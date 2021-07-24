import React, { Component } from "react";
import Tour from "../Tours/tours";
import "./tourList.scss";

class TourList extends Component {
  render() {
    return (
      <section className="tourlist">
        <div>
          <Tour />
        </div>
      </section>
    );
  }
}

export default TourList;
