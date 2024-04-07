import React from "react";


const ListeElement = () => {
  const items = [
    {
      avatar: "https://i.imgur.com/618t4jH.png",
      name: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      avatar: "https://i.imgur.com/7v794Eo.png",
      name: "Jane Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      avatar: "https://i.imgur.com/836zF3H.png",
      name: "John Smith",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="container">
      <ul className="list-items">
        {items.map((item) => (
          <li key={item.name} className="list-item">
            <div className="avatar">
              <img src={item.avatar} alt={item.name} />
            </div>
            <div className="info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
            <div className="actions">
              <button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeElement;
