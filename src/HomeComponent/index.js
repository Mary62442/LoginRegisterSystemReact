import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";

class Home extends Component {
	
	render(){
		return(
			<div>
				<Link to="/login"><button>Login</button></Link>
                <Link to="/register"> <button>Register</button></Link>
			</div>
		);
	}
}

export default Home;