import React from 'react';
import './Login.css';
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group">
                            <lable>Username</lable>
                            <input type="text" className="form-control" placeholder = "Enter your username "></input>
                        </div>
                        <div className="col-12 form-group">
                            <lable>Passwword</lable>
                            <input type="password" className="form-control" placeholder = "Enter your paswword "></input>
                        </div>
                        <div className = "col-12 ">
                            <button className = "btn" >Login</button>
                        </div>
                        <div className="col-12 form-group">
                            <span>Forgot your password</span>
                        </div>


                    </div>
                </div>
            </div>
        )

    }
}
export default Login;