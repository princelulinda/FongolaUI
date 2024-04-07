import React, { useState } from "react";


export default function Form() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Envoyer les données du formulaire
      console.log("Nom:", nom);
      console.log("Email:", email);
      console.log("Message:", message);
    };
  
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Nom
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="block w-full h-20 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-600"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        send
      </button>
    </form>
    );
  }
  