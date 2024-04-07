import { useEffect, useState } from "react";

 const Grid = () => {
    return (
      <div className="grid grid-cols-12 gap-4 w-[50%] h-[50vh]">
      <header className="col-span-12 bg-[#ddd]">
     
      </header>
      <main className="col-span-12 md:col-span-9 bg-[#ddd]">
  
      </main>
      <aside className="col-span-12 md:col-span-3 bg-[#ddd]">
  
      </aside>
      <footer className="col-span-12 w-full bg-[#ddd]">
      </footer>
    </div>
    );
  };


  export default Grid;