import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

const App = () => 
	<div>
		<Nav />
			<Router>
			    <Switch>
			    	<Route exact path="/saved" component={Saved} />
			       	<Route path="/" component={Home} />
			    </Switch>
			</Router>
	</div>;

export default App;


