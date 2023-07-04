import { useEffect, useState } from "react";

function Header({search}) {
  const [name, setName] = useState();
  
  useEffect(()=> {
    search(name)
  }, [name])

  return (
    <div>
      search
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
