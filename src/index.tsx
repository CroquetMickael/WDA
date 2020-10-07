import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import App from "./Apps/App";
import * as serviceWorker from "./serviceWorker";
import { initDatabase } from "./Database/InitDb/initDatabase";
import { jsonData } from "./Pages/Todo/TodoService";
import "./Common/Translation/I18n";
initDatabase();
jsonData();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
