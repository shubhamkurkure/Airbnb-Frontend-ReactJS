import React from "react";
import {findGuestById, updateGuest} from "../services/guestService";
import {findHostById, updateHost} from "../services/hostService";
import HeadingGeneric from "../components/generics/HeadingGeneric.Component";
import {findAdminById, updateAdmin} from "../services/adminService";

class ProfilePage extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        username: "",
        updateMode: false
    }

    componentDidMount() {
        if (localStorage.getItem("userType") === "guest") {
            findGuestById(localStorage.getItem("uid"))
                .then((response) => {
                    this.setState({
                                      firstname: response.firstName,
                                      lastname: response.lastName,
                                      username: response.userName,
                                  })
                })
        }

        if (localStorage.getItem("userType") === "host") {
            findHostById(localStorage.getItem("uid"))
                .then((response) => {
                    this.setState({
                                      firstname: response.firstName,
                                      lastname: response.lastName,
                                      username: response.userName,
                                  })
                })

        }

        if (localStorage.getItem("userType") === "admin") {
            findAdminById(localStorage.getItem("uid"))
                .then((response) => {
                    this.setState({
                                      firstname: response.firstName,
                                      lastname: response.lastName,
                                      username: response.userName,
                                  })
                })

        }
    }

    usernameChangeHandler = (event) => {
        this.setState({
                          username: event.target.value
                      })
    }

    lastnameChangeHandler = (event) => {
        this.setState({
                          lastname: event.target.value
                      })
    }

    firstnameChangeHandler = (event) => {
        this.setState({
                          firstname: event.target.value
                      })
    }

    toggleUpdate = () => {
        this.setState((prevState) => ({
            updateMode: !prevState.updateMode
        }))
    }

    render() {
        return (
            <div>
                <HeadingGeneric text={"Profile details"}/>
                {
                    !this.state.updateMode &&
                    <div>
                        <h4>Firstname : {this.state.firstname}</h4>
                        <h4>Lastname : {this.state.lastname}</h4>
                        <h4>Username : {this.state.username}</h4>
                    </div>
                }

                {
                    this.state.updateMode &&
                    <div>
                        <input className={"form-control"} onChange={this.firstnameChangeHandler}
                               value={this.state.firstname}/>
                        <input className={"form-control"} onChange={this.lastnameChangeHandler}
                               value={this.state.lastname}/>
                        <input className={"form-control"} onChange={this.usernameChangeHandler}
                               value={this.state.username}/>
                    </div>
                }


                {
                    !this.state.updateMode &&
                    <button className={"btn btn-primary"} onClick={() => {
                        this.toggleUpdate();
                    }}>Update profile
                    </button>
                }

                {
                    this.state.updateMode &&
                    <button className={"btn btn-success"} onClick={()=>{
                        if(localStorage.getItem("userTyp") === "guest") {
                            updateGuest({
                                firstName:  this.state.firstname,
                                lastName:  this.state.lastname,
                                userName:  this.state.username
                                        })
                                .then((response) =>{
                                    console.log(response);
                                    alert("Profile updated successfully")
                                    this.toggleUpdate();
                                })
                        }

                        if(localStorage.getItem("userTyp") === "host") {
                            updateHost({
                                            firstName:  this.state.firstname,
                                            lastName:  this.state.lastname,
                                            userName:  this.state.username
                                        })
                                .then((response) =>{
                                    console.log(response);
                                    alert("Profile updated successfully")
                                    this.toggleUpdate();
                                })
                        }

                        if(localStorage.getItem("userTyp") === "guest") {
                            updateAdmin({
                                            firstName:  this.state.firstname,
                                            lastName:  this.state.lastname,
                                            userName:  this.state.username
                                        })
                                .then((response) =>{
                                    console.log(response);
                                    alert("Profile updated successfully")
                                    this.toggleUpdate();
                                })
                        }
                    }
                    }>Done</button>
                }
            </div>
        );
    }

}
