// Originally from this tutorial: https://ibaslogic.com/react-tutorial-for-beginners/

import React from "react";
import ReactDOM from "react-dom";
// component file
import "./App.css"
import TodoContainerClass from "./components/TodoContainer-Class";
import TodoContainerHook from "./components/TodoContainer-Hook";

const useReactClasses = false;

if (useReactClasses) {
  ReactDOM.render(<TodoContainerClass />, document.getElementById("root"))
} else {
  ReactDOM.render(<TodoContainerHook />, document.getElementById("root"))
}
