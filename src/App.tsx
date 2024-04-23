import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <div data-tauri-drag-region className="titlebar"></div>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <textarea
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="..."
        />
      </form>

      <p>{greetMsg}</p>
    </>
  );
}

export default App;
