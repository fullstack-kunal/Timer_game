import { useState, useRef } from "react";

export default function Player() {
  const inputRef = useRef();
  const [name, setName] = useState();

  const handleClick = () => {
    setName(inputRef.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {name ? name : "Unknown Entity"}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
