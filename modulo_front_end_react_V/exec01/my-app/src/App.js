import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import Button from "./components/Button/index";
import { logoAmericanas } from "./assets/index";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <div className="buttons-container">
        <Button color="btn-success" title="Success" />
        <Button color="btn-warning" title="Warning" />
        <Button color="btn-danger" title="Danger" />
      </div>
      <img src={logoAmericanas} alt="" />
    </div>
  );
}

export default App;
