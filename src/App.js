import { Component } from "react";
import "./App.scss";
import { tourData } from "./tourData";
import NavBar from './components/NavBar/navBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>
    );
  }
}

export default App;
