// Originally from this tutorial: https://ibaslogic.com/react-tutorial-for-beginners/

import React from "react";
import ReactDOM from "react-dom";
// component file
import TodoContainer from "./components/TodoContainer";
import "./App.css"

ReactDOM.render(<TodoContainer />, document.getElementById("root"))
