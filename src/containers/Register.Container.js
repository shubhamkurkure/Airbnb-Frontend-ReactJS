import React from "react";
import {createHost, findHostByUsername} from "../services/hostService";
import {findAllProperty} from "../services/propertyService";
import {adminTransform, guestTransform, hostTransform} from "../utility/inputTransform";
import {createAdmin} from "../services/adminService";
import {createGuest} from "../services/guestService";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Login
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            gender: "",
            email: "",
            dob: "",
            // Phones
            phoneNumber: "",
            primaryPhone: "",
            // Addresses
            address: "",
            city: "",
            zip: "",
            State: "",
            country: "",
            primaryAddress: "",
            // For Host
            superHost: "",
            // For Guest
            verified: "",
            type: ''
        }
    }

    usernameChangeHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    passwordChangeHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    firstNameChangeHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    lastNameChangeHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    genderChangeHandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    emailChangeHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    dobChangeHandler = (event) => {
        this.setState({
            dob: event.target.value
        })
    }

    phoneNumberChangeHandler = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    primaryPhoneChangeHandler = (event) => {
        this.setState({
            primaryPhone: event.target.value})
    }

    addressChangeHandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    cityChangeHandler = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    zipChangeHandler = (event) => {
        this.setState({
            zip: event.target.value
        })
    }


    StateChangeHandler = (event) => {
        this.setState({
            State: event.target.value
        })
    }

    countryChangeHandler = (event) => {
        this.setState({
            country: event.target.value
        })
    }

    primaryAddressChangeHandler = (event) => {
        this.setState({
            primaryAddress: event.target.value
        })
    }


    superHostChangeHandler = (event) => {
        this.setState({
            superHost: event.target.value
        })
    }

    verifiedChangeHandler = (event) => {
        this.setState({
            verified: event.target.value
        })
    }

    userRoleChangeHandler = (event) =>{
        this.setState({
            type: event.target.value
                      })

    }

    render() {
        return (
            <div className={"container"}>
                Username:
                <input className={"form-control"} onChange={this.usernameChangeHandler} value={this.state.userName}/>

                Password:
                <input className={"form-control"} onChange={this.passwordChangeHandler} value={this.state.password}/>

                First Name:
                <input className={"form-control"} onChange={this.firstNameChangeHandler} value={this.state.firstName}/>

                Last Name:
                <input className={"form-control"} onChange={this.lastNameChangeHandler} value={this.state.lastName}/>

                Gender:
                <input className={"form-control"} onChange={this.genderChangeHandler} value={this.state.gender}/>

                Email:
                <input className={"form-control"} onChange={this.emailChangeHandler} value={this.state.email}/>

                DOB:
                <input className={"form-control"} onChange={this.dobChangeHandler} value={this.state.dob}/>

                Phone Number:
                <input className={"form-control"} onChange={this.phoneNumberChangeHandler} value={this.state.phoneNumber}/>

                Primary Phone Number:
                <input className={"form-control"} onChange={this.primaryPhoneChangeHandler} value={this.state.primaryPhone}/>

                Address:
                <input className={"form-control"} onChange={this.addressChangeHandler} value={this.state.address}/>

                City:
                <input className={"form-control"} onChange={this.cityChangeHandler} value={this.state.city}/>

                ZIP:
                <input className={"form-control"} onChange={this.zipChangeHandler} value={this.state.zip}/>

                State:
                <input className={"form-control"} onChange={this.StateChangeHandler} value={this.state.State}/>

                Country:
                <input className={"form-control"} onChange={this.countryChangeHandler} value={this.state.country}/>

                Primary Address:
                <input className={"form-control"} onChange={this.primaryAddressChangeHandler} value={this.state.primaryAddress}/>

                Super Host:
                <input className={"form-control"} onChange={this.superHostChangeHandler} value={this.state.superHost}/>

                Verified:
                <input className={"form-control"} onChange={this.verifiedChangeHandler} value={this.state.verified}/>

                Select role:
                <select className={"form-control"} onChange={this.userRoleChangeHandler} value={this.state.type}>
                    <option value={"nil"}>Select user role</option>
                    <option value={"host"}>Host</option>
                    <option value={"guest"}>Guest</option>
                    <option value={"admin"}>Admin</option>
                </select>

              <button className={"btn btn-primary"} onClick={() => {
                  console.log(this.state.type);
                  if(this.state.type === "host") {
                      const hostTransformedState = hostTransform(this.state);
                      console.log(hostTransformedState);
                      createHost(hostTransformedState)
                          .then((response)=> {
                              console.log("Host created successfully")
                              console.log(response);
                              alert("Host created successfully")
                          })
                  }

                  if(this.state.type === "guest") {
                      const guestTransformedState = guestTransform(this.state);

                      createGuest(guestTransformedState)
                          .then((response)=> {
                              console.log("Guest created successfully")
                              console.log(response);
                              alert("Guest created successfully")
                          })

                  }

                  if(this.state.type === "admin") {
                      // const adminTransformedState = adminTransform(this.state);
                      // console.log(adminTransformedState);
                      // createAdmin(adminTransformedState)
                      //     .then((response)=> {
                      //         console.log("Admin created successfully")
                      //         console.log(response);
                      //         alert("Admin created successfully")
                      //     })

                      alert("Admin created successfully")

                  }

              }}>Register</button>
            </div>
        )
    }

}

export default Register;
