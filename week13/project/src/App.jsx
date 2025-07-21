import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-1 sm:col-span-5 bg-red-300">rohit</div>
        <div className="col-span-1 sm:col-span-5 bg-blue-300">vinod</div>
        <div className="col-span-1 sm:col-span-2 bg-yellow-300">chavan</div>
      </div>
    </>
  );
}

export default App;
