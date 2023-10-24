import React from "react";
import Nav from "./Nav";
import PigsDisplay from "./PigsDisplay";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PigsDisplay hogs={hogs}/>
		</div>
	);
}

export default App;
