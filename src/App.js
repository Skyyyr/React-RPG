import './App.css';
import Menu from "./components/Menu";

function App() {
    console.log("APP RERE")
    return (
    <div className="App">
        <h1>
        RPG TITLE
        </h1>
        <p>
        Here's our base html.
        </p>
        <div>
            <h1>
                Menu Component:
            </h1>
            <Menu />
        </div>
    </div>
  );
}

export default App;
