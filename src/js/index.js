//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/secondsCounter.scss";

//import your own components
import { SecondsCounter } from "./component/secondsCounter.js";

let counter = 0;
//render your react application
setInterval(function() {
	ReactDOM.render(
		<SecondsCounter seconds={counter} />,
		document.querySelector("#app")
	);
	counter += 1;
}, 1000);
