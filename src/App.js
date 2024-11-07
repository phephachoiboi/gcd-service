import "./App.css";
import Header from "./components/Header";
import ServiceScenario from "./components/ServiceScenario";

function App() {
  return (
    <div className="App">
      <div className="service">
        <Header />
        <ServiceScenario />
      </div>
    </div>
  );
}

export default App;
