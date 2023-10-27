import React from 'react';
import './Login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPw: false,
        }
    }


    handleOnChangeInputUserName = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    handleOnChangeInputPassWord = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handlLogin = () => {
        console.log('Đoi tuong : ')
        console.log(this.state)
    }
    handlShowPw = () => {
        this.setState({
            isShowPw: !this.state.isShowPw, // Toggle isShowPw
          });
    }

    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group">
                            <lable>Username</lable>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter your username "
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeInputUserName(event)}
                            ></input>
                        </div>
                        <div className="col-12 form-group" src="https://kit.fontawesome.com/a076d05399.js">
                            <lable>Passwword</lable>
                            <div className="pass-eye">
                                <input 
                                    className="form-control"
                                    type={this.state.isShowPw? 'text' : 'password'}
                                    placeholder="Enter your paswword "
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangeInputPassWord(event)}>
                                </input>
                                
                                <span onClick={() => {
                                    this.handlShowPw();
                                }} >
                                    <i class={this.state.isShowPw? "fas fa-eye-slash":"far fa-eye"  }></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <button className="btn" onClick={this.handlLogin} >Login</button>
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