import { useState } from "react";

function Compteur() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Cliqué {count} fois</button>;
}

export default Compteur;
