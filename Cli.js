import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';
import { mkdir } from 'fs/promises';
import { program } from 'commander';
import CliProgress from 'cli-progress';

const url = 'https://api.github.com/repos/princelulinda/FongolaUI/contents/component';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': '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',

}
// Improved progress bar handling
const progressBar = new CliProgress.SingleBar({
}, CliProgress.Presets.shades_classic);

async function createComponent(component) {
  progressBar.start();

  try {
    await mkdir('component', { recursive: true });

    if (component === 'components') {
      await fetchMultipleComponents();
    } else {

      await fetchSingleComponent(component);
    }

    progressBar.stop();
  } catch (error) {
    console.error(error);
  }
}

async function fetchSingleComponent(component) {
  const url = `https://raw.githubusercontent.com/princelulinda/FongolaUI/main/component/%40${component}.jsx`;

  const response = await fetch(url);
  const data = await response.text();
  if (!data ==="404: Not Found") {
    await writeFile(`component/${component}.jsx`, data);
    
  } else{
    console.log("\n","this component is not exist", data);
    const answer = await inquirer.prompt({
      type: 'list',
      name: 'componentChoice',
      message: 'Select a component or choose to fetch all:',
      choices: ['components', ...(await listAvailableComponents())], // Dynamically list available components
    });

    await createComponent(answer.componentChoice);

  }
}

async function fetchMultipleComponents() {
  const response = await fetch(url);
  const components = await response.json();

  const totalFiles = components.length;
  let downloadedFiles = 0;

  const promises = components.map(async (item) => {
    downloadedFiles++;
    progressBar.update(downloadedFiles / totalFiles * 100, {
      component: item.name,
      percentage: Math.round(downloadedFiles / totalFiles * 100),
    });

    const response = await fetch(item.download_url);
    const data = await response.text();
    await writeFile(`component/${item.name}`, data);
    await writeFile(`fongolaUI.js`, `export default function FongolaUIConfig() {
      const INCLUDE = [
        // include the names for components
      ]
      const EXCLUDE = [
        // exclude the names for components
      ]
      if (INCLUDE.length > 0) {
        return {
          type: "INCLUDE",
          data: INCLUDE,
        };
      } else if (EXCLUDE.length > 0) {
        return {
          type: "EXCLUDE",
          data: EXCLUDE,
        };
      } else {
        return {
          type: "INCLUDE",
          data: [],
        };
      }
    }
    `);
  });

  await Promise.all(promises);
  console.log('All components downloaded successfully!');
}

// Improved command-line interface (CLI) interaction
(async () => {
  program
    .command('add')
    .argument('<string>', 'Component name or "components" to fetch all', async (item) => {
      await createComponent(item);
    })

    program
    .command("clear")
    .action(()=>{
       
    })
  
  program.parse(); // Parse command-line arguments
})();

async function listAvailableComponents() {
  const response = await fetch(url);
  const components = await response.json();
  return components.map((item) => item.name.split("@")[1].split(".")[0]);
}
