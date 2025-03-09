import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ModeToggle />
      <p>hej</p>
    </>
  );
}

export default App;
