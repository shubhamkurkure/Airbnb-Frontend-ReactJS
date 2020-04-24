import React from "react";
import {Link} from "react-router-dom";
import {loginService} from "../services/loginService";
import {findHostById, findHostByUsername} from "../services/hostService";
import {findGuestById, findGuestByUsername} from "../services/guestService";
import {findAdminByUsername} from "../services/adminService";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",
            userType: "nil"
        }
    }

    userNameChangeHandler = (event) => {
        this.setState({
                          userName: event.target.value
                      })
    }

    passwordChangeHandler = (event) => {
        this.setState({
                          password: event.target.value
                      })
    }

    userTypeChangeHandler = (event) => {
        this.setState({
                          userType: event.target.value
                      })
    }

    render() {
        return (
            <div className={"container"}>
                Username:
                <input className={"form-control mb-2"} onChange={this.userNameChangeHandler}
                       value={this.state.userName}/>

                Password:
                <input type={"password"} className={"form-control mb-2"}
                       onChange={this.passwordChangeHandler} value={this.state.password}/>

                Select user type:
                <select className={"form-control"} onChange={this.userTypeChangeHandler}
                        value={this.state.userType}>
                    <option value={"nil"}>Select user type</option>
                    <option value={"host"}>Host</option>
                    <option value={"guest"}>Guest</option>
                    <option value={"admin"}>Admin</option>
                </select>

                <button className={"btn btn-primary mt-2 mr-2"} onClick={() => {
                    if (this.state.userType === "admin") {
                        // findAdminByUsername(this.state.userName)
                        //     .then((resp) =>{
                        //         console.log(resp);
                        //         localStorage.setItem('username',
                        // this.state.userName); localStorage.setItem('uid', resp.id);
                        // localStorage.setItem('userType', this.state.userType);
                        // this.props.history.push("/"); window.location.reload(); })
                        localStorage.setItem('username', "admin");
                        localStorage.setItem('uid', 37);
                        localStorage.setItem('userType', "admin");

                        this.props.history.push("/");
                        window.location.reload();
                    }

                    loginService(this.state)
                        .then(async (response) => {
                            console.log(response);
                            if (response) {

                                if (this.state.userType === "host") {
                                    findHostByUsername(this.state.userName)
                                        .then((resp) => {
                                            console.log(resp);
                                            localStorage.setItem('username', this.state.userName);
                                            localStorage.setItem('uid', resp.id);
                                            localStorage.setItem('userType', this.state.userType);

                                            this.props.history.push("/");
                                            window.location.reload();
                                        })

                                }

                                if (this.state.userType === "guest") {
                                    findGuestByUsername(this.state.userName)
                                        .then((resp) => {
                                            console.log(resp);
                                            localStorage.setItem('username', this.state.userName);
                                            localStorage.setItem('uid', resp.id);
                                            localStorage.setItem('userType', this.state.userType);

                                            this.props.history.push("/");
                                            window.location.reload();
                                        })

                                }

                                if (this.state.userType === "admin") {
                                    // findAdminByUsername(this.state.userName)
                                    //     .then((resp) =>{
                                    //         console.log(resp);
                                    //         localStorage.setItem('username',
                                    // this.state.userName); localStorage.setItem('uid', resp.id);
                                    // localStorage.setItem('userType', this.state.userType);
                                    // this.props.history.push("/"); window.location.reload(); })
                                    localStorage.setItem('username', "admin");
                                    localStorage.setItem('uid', 37);
                                    localStorage.setItem('userType', "admin");

                                    this.props.history.push("/");
                                    window.location.reload();
                                }

                            } else {
                                alert("Username/Password Invalid")
                            }
                        })
                }}>Login
                </button>
                <Link to={"/"}>
                    <button className={"btn btn-primary mt-2"}>Cancel</button>
                </Link>

            </div>
        )
    }

}

export default Login;
