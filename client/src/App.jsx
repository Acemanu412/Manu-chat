import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./index.css";

import Chat from "./Components/Chat"

const App = () => <div>Project working <Chat /></div>;

ReactDOM.render(<App />, document.getElementById("app"));