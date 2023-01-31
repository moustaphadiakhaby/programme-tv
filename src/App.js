import "./App.css";
import Logo from "./components/Logo";
import Content from "./components/Content";
export { default as data } from "./data.json";

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Content />
    </div>
  );
};

export default App;
