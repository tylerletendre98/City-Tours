import React, { Component } from "react";
import "./tours.scss";

class Tour extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img
            src="https://images.pexels.com/photos/4388165/pexels-photo-4388165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <span className="close-btn">
            <button>delete</button>
          </span>
        </div>
        <div className="tour-info">
          <h3>City</h3>
          <h4>Name</h4>
          <h5>
            Info{" "}
            <span>
              <button>more info</button>
            </span>
          </h5>
          <p>
            This is just some worlds to put in here for now until i can figure
            out some real data to put in here.
          </p>
        </div>
      </article>
    );
  }
}

export default Tour;
