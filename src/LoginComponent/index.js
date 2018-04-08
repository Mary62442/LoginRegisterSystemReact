import React, { Component } from "react"; // eslint-disable-line no-unused-vars

class Login extends Component {
    constructor(props) {
        super(props);
        this.usernameemail = "";

    }

    logIn = () => {
        this.usernameemail = this.refs.usernameemail.value;
        this.userpassword = this.refs.userpassword.value;
        if (typeof this.usernameemail !== 'undefined' && typeof this.userpassword !== 'undefined') {
            fetch(`http://localhost:3000/login`,{ 
                method: "POST",  
                body: JSON.stringify({usernameemail:this.usernameemail, userpassword:this.userpassword}),     
                headers: {
                  'Content-type':'application/json'              
                }
            })
            .then(response => {
                if (response.status >= 400) { 
                  console.log(response.status); 
                }    
                return response.json();
            })              
            .then(data => {
                console.log(data);
            })
        }
    }
	
	render(){
		return(
			<div>
				<p>Username or email</p>
                <input ref = "usernameemail" type="text"/>
                <p>Password</p>
                <input ref = "userpassword" type="text"/>

                <button onClick = {this.logIn}>Login</button>
			</div>
		);
	}
}

export default Login;