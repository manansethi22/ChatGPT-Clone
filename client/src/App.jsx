import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App min-h-screen min-w-full">
      <div className="p-10 text-red-500 text-4xl">Hello World!!</div>
      <div></div>
    </div>
  );
}

export default App;
