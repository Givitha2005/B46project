import './App.css';
import Header from "./Header";

import React from "react";
class App extends Component {
  render() {
    let users = [
      {
        name: "John",
        phone: "1234555",
      },
      {
        name: "Jill",
        phone: "1234555",
      }
    ];
    return 
      (
        <div>
          <Header />
          <div className="component-body-container">
            <button className="custom-btn add-btn"> Add </button>
            <div className="grid-container heading-container">
              <span className="grid-item name-heading">Name</span> <br></br>
              <span className="grid-item phone-heading">Phone</span>
            </div>
  
             
            {users.map((user) => {
              return (
                <div className="grid-container">
                  <span className="grid-item">{user.name}</span>
                  <span className="grid-item">{user.phone}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
  }
  /*React.createElement(
    "div",
    {id:"module", className: "header"},
    React.createElement("p",null,"ReactJS")
  )*/
}

export default App;
