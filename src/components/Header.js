import { useState } from "react";

function Header() {
  const [name, setName] = useState();

  return (
    <div>
      search{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => {}}>Add</button>
    </div>
  );
}

export default Header;
