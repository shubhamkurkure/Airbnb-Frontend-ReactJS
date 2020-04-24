import React from "react";
import HeadingGeneric from "../components/generics/HeadingGeneric.Component";
import {deleteGuestById, findGuestById, updateGuest} from "../services/guestService";
import {createHost, deleteHostById, findHostById, updateHost} from "../services/hostService";
import {findAdminById, updateAdmin} from "../services/adminService";

class UserManagement extends React.Component {

    state = {
        searchSelectedType: "nil",
        userSearchField: "",
        id: "",
        userName: "",
        firstName: "",
        lastName: "",
        userType: "",
        updateMode: false
    }

    usernameChangeHandler = (event) => {
        this.setState({
                          userName: event.target.value
                      })
    }

    lastnameChangeHandler = (event) => {
        this.setState({
                          lastName: event.target.value
                      })
    }

    firstnameChangeHandler = (event) => {
        this.setState({
                          firstName: event.target.value
                      })
    }

    userSearchFieldChangeHandler = (event) => {
        this.setState({
                          userSearchField: event.target.value
                      })
    }

    searchSelectedTypeHandler = (event) => {
        this.setState({
                          searchSelectedType: event.target.value
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
                <HeadingGeneric text={"User management"}/>
                <input className={"form-control"} onChange={this.userSearchFieldChangeHandler}
                       value={this.state.userSearchField} placeholder={"Search user by Id"}/>

                Select the type of user being searched:
                <select value={this.state.searchSelectedType}
                        onChange={this.searchSelectedTypeHandler}>
                    <option value={"Nil"}>Select user type</option>
                    <option value={"host"}>Host</option>
                    <option value={"guest"}>Guest</option>
                    <option value={"admin"}>Admin</option>
                </select>

                <button className={"btn btn-primary"} onClick={() => {

                    if (this.state.searchSelectedType === "guest") {
                        findGuestById(this.state.userSearchField)
                            .then((response) => {
                                this.setState({
                                                  userName: response.userName,
                                                  firstName: response.firstName,
                                                  lastName: response.lastName,
                                                  userType: response.type
                                              })
                            })
                    }

                    if (this.state.searchSelectedType === "host") {
                        findHostById(this.state.userSearchField)
                            .then((response) => {
                                this.setState({
                                                  userName: response.userName,
                                                  firstName: response.firstName,
                                                  lastName: response.lastName,
                                                  userType: response.type
                                              })
                            })
                    }

                    if (this.state.searchSelectedType === "admin") {
                        findAdminById(this.state.userSearchField)
                            .then((response) => {
                                this.setState({
                                                  userName: response.userName,
                                                  firstName: response.firstName,
                                                  lastName: response.lastName,
                                                  userType: response.type
                                              })
                            })
                    }

                }}>Find the user by user id
                </button>

                {
                    !this.state.updateMode &&
                    <div>
                        <h4>Firstname : {this.state.firstName}</h4>
                        <h4>Lastname : {this.state.lastName}</h4>
                        <h4>Username : {this.state.userName}</h4>
                    </div>
                }

                {
                    this.state.updateMode &&
                    <div>
                        <input className={"form-control"} onChange={this.firstnameChangeHandler}
                               value={this.state.firstName}/>
                        <input className={"form-control"} onChange={this.lastnameChangeHandler}
                               value={this.state.lastName}/>
                        <input className={"form-control"} onChange={this.usernameChangeHandler}
                               value={this.state.userName}/>
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
                    <button className={"btn btn-success"} onClick={() => {
                        if (this.state.userType === "guest") {
                            updateGuest({
                                            firstName: this.state.firstName,
                                            lastName: this.state.lastName,
                                            userName: this.state.userName
                                        })
                                .then((response) => {
                                    console.log(response);
                                    alert("Profile updated successfully")
                                    this.toggleUpdate();
                                })
                        }

                        if (this.state.userType === "host") {
                            updateHost({
                                           firstName: this.state.firstName,
                                           lastName: this.state.lastName,
                                           userName: this.state.userName
                                       })
                                .then((response) => {
                                    console.log(response);
                                    alert("Profile updated successfully")
                                    this.toggleUpdate();
                                })
                        }

                        if (this.state.userType === "admin") {
                            updateAdmin({
                                            firstName: this.state.firstName,
                                            lastName: this.state.lastName,
                                            userName: this.state.userName
                                        })
                                .then((response) => {
                                    console.log(response);
                                    alert("Profile updated successfully")
                                    this.toggleUpdate();
                                })
                        }
                    }
                    }>Done</button>
                }

                {
                    (this.state.userType === "guest" || this.state.userType === "host") &&
                    <button className={"btn btn-danger"} onClick={() => {
                        if (this.state.userType === "guest") {
                            deleteGuestById(this.state.userSearchField)
                                .then((response) => {
                                    alert("user deleted successfully");
                                    window.location.reload();
                                })
                        }

                        if (this.state.userType === "host") {
                            deleteHostById(this.state.userSearchField)
                                .then((response) => {
                                    alert("user deleted successfully");
                                    window.location.reload();
                                })
                        }
                    }}>Delete this user</button>

                }


                {
                    this.state.userType === "guest" &&
                    <button className={"btn btn-primary"} onClick={() => {
                        // create new host with current guest creds

                        findGuestById(this.state.userSearchField)
                            .then((guestCred) => {
                                deleteGuestById(this.state.userSearchField)
                                    .then((deleteResponse) => {

                                        guestCred.type = "host";

                                        createHost(guestCred)
                                            .then((conversionResponse) => {
                                                console.log(conversionResponse);
                                                alert("User converted to host successfully")
                                                window.location.reload();
                                            })
                                    })
                            })
                    }
                    }>Change role to host</button>
                }

                {
                    this.state.userType === "host" &&
                    <button className={"btn btn-primary"} onClick={() => {
                        findHostById(this.state.userSearchField)
                            .then((hostCred) => {
                                deleteHostById(this.state.userSearchField)
                                    .then((deleteResponse) => {

                                        hostCred.type = "guest";

                                        createHost(hostCred)
                                            .then((conversionResponse) => {
                                                console.log(conversionResponse);
                                                alert("User converted to Guest successfully")
                                                window.location.reload();
                                            })
                                    })
                            })
                    }
                    }>Change role to guest</button>
                }

            </div>
        )
    }

}

export default UserManagement;
