import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>count is +</button>
        <button
          onMouseOver={() => {
            if (count > 0) setCount(count - 1);
          }}
        >
          count is -{" "}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <p className="read-the-docs">------------form validation--------------</p>

      <div className="form-container">
        <h2 className="form-title">Facebook</h2>
        <form>
          username <input type="text" name="username"></input><br></br>
          email id<input type="text" id="e" name="email"></input><br></br>
          mobile no<input type="text" id="m" name="mobile"></input><br></br>
          password<input type="text" id="p" name="pass"></input><br></br>
          conformpass<input type="text" id="cp" name="conpass"></input><br></br>
          <input type="submit" name="submit" value='submit' className="submit"></input>
        </form>
      </div> */}
    </>
  );
}

export default App;
