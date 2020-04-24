import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./Register.Container";
import Login from "./Login.Container";
import AllProperty from "./AllPropertyList.Container";
import SearchProperty from "./SearchProperty.Container";
import CreateProperty from "./CreateProperty.Container";
import CreateTrip from "./CreateTrip.Container";
import PropertyDetails from "./PropertyDetails.Container";
import PropertyList from "./PropertyList.Container";
import TripList from "./TripList.Container";
import TripDetails from "./TripDetails.Container";
import ReviewsList from "./ReviewsList.Container";
import UserManagement from "./UserManagement.Container";

class AppMain extends React.Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Route
                    path={"/"}
                    exact = {true}
                    component = {AllProperty}
                />

                <Route
                    path={"/search"}
                    exact = {true}
                    component = {SearchProperty}
                />

                {/*Property list for host/admin*/}
                <Route
                    path={"/properties"}
                    exact = {true}
                    component = {PropertyList}
                />

                <Route
                    path={"/create/property"}
                    exact = {true}
                    component = {CreateProperty}
                />

                {/*Trips list for all user types*/}
                <Route
                    path={"/trips"}
                    exact = {true}
                    component = {TripList}
                />

                <Route
                    path={"/create/trip"}
                    exact = {true}
                    component = {SearchProperty}
                />

                <Route
                    path={"/trip/:tripId"}
                    exact = {true}
                    component = {TripDetails}
                />

                <Route
                    path={"/reviews"}
                    exact = {true}
                    component = {ReviewsList}
                />

                <Route
                    path={"/userManager"}
                    exact = {true}
                    component = {UserManagement}
                />

                {/*Profile for all user types*/}
                <Route
                    path={"/profile"}
                    exact = {true}
                    component = {SearchProperty}
                />

                {/*Property details route*/}
                <Route
                    path={"/property/:propertyId"}
                    exact = {true}
                    component = {PropertyDetails}
                />

                {/*Booking route*/}
                <Route
                    path={"/book/property/:propertyId"}
                    exact = {true}
                    component = {CreateTrip}
                />
                <Route
                    path={"/register"}
                    exact = {true}
                    component = {Register}
                />
                <Route
                    path={"/login"}
                    exact = {true}
                    component = {Login}
                />
            </div>
        );
    }

}

export default AppMain;
