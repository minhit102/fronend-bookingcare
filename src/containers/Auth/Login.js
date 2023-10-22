import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
    <div className = "login-background">
        <div className = "login-container">
            <div className = "login-contem">
                <div className ="col-12 text-center">Login</div>
                <div className = "col-12 form-group">
                    <lable>Username</lable>
                    <input type = "text" className = "form-control"></input>
                </div>

            </div>
        </div>
    </div>
        )
    
  }
}
export default Login;