import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currDate = new Date().getHours();
let gretting = "";
const CssStyle = {};

if (currDate >= 1 && currDate < 12) {
  gretting = "Good Morning";
  CssStyle.color = "green";
} else if (currDate >= 12 && currDate < 19) {
  gretting = "Good Afternon";
  CssStyle.color = "Orange";
} else {
  gretting = "Good Night";
  CssStyle.color = "#808080";
}
ReactDOM.render(
  <>
    <div>
      <h1>
        Hello Sir, <span style={CssStyle}> {gretting} </span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
