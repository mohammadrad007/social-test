import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App-header">
      <Navbar />
      <div className="App-body">
        <Main />
      </div>
    </div>
  );
}

export default App;
