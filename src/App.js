import { Component } from "react";
import "./App.scss";
import { tourData } from "./tourData";
import NavBar from './components/NavBar/navBar'
import TourList from "./components/TourList/tourList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <TourList/>
      </div>
    );
  }
}

export default App;
