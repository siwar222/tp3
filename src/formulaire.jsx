import { useState } from "react";

function Formulaire() {
  const [nom, setNom] = useState(""); 

  function handleChange(event) {
    setNom(event.target.value); 
  }

  function handleClick() {
    alert(`Bonjour, ${nom} !`);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Dire bonjour</button>
    </div>
  );
}

export default Formulaire;
