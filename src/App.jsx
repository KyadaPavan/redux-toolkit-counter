import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounterval";
import Buttons from "./components/Buttons";
function App() {
  return (
    <>
      <div className="counter-container">
        <Header />
        <DisplayCounter />
        <Buttons />
      </div>
    </>
  );
}

export default App;
