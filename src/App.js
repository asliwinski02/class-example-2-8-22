import "./styles.css";
import Page from "./Page";
import Notebook from "./Notebook";

export default function App() {
  const p = new Page();
  const q = new Page();
  const mathNotebook = new Notebook(p);
  console.log(p.text);
  p.addText("Hi");
  p.addText("there");
  console.log(p.text);
  console.log(q.text);
  console.log("P was last modified", p.lastModified);
  console.log(q.lastModified);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
