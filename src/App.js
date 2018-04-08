import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import {Route, Switch, HashRouter } from "react-router-dom"; // eslint-disable-line no-unused-vars
import Login from "./LoginComponent/index";
import Home from "./HomeComponent/index";
import Register from "./RegisterComponent/index";

class App extends Component {
	
	render(){
		return(
			<div>
				<HashRouter>					
					<Switch>
						<Route exact path= "/login" component = {Login} /> 
						<Route exact path= "/" component = {Home} /> 
						<Route exact path= "/register" component = {Register} />
					</Switch>					
				</HashRouter>
			</div>
		);
	}
}

export default App;