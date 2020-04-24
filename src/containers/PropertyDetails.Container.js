import React from "react";
import {findHostById} from "../services/hostService";
import {withRouter} from "react-router-dom";
import {deletePropertyById, findPropertyById, updateProperty} from "../services/propertyService";
import {findTripByPropertyId} from "../services/tripService";
import HeadingGeneric from "../components/generics/HeadingGeneric.Component";
import {IsLoggedIn} from "../utility/SessionUtility";

class PropertyDetails extends React.Component {

    state = {
        host: {},
        property: {},
        trips: [],
        updateMode: false,
        propertyName: '',
        propertyDescription: ''
    };

    componentDidMount = async () => {
        let hostDetails;
        let propertyDetails;
        let tripsDetails;
        await findHostById(localStorage.getItem("uid"))
            .then(async (hostResponse) => {
                await findPropertyById(this.props.match.params.propertyId)
                    .then(async (propertyResponse) => {
                        await findTripByPropertyId(this.props.match.params.propertyId)
                            .then(async (tripResponse) => {
                                // console.log(hostResponse);
                                console.log(propertyResponse.sub_properties);
                                // console.log(tripResponse);
                                await this.setState({
                                                        host: hostResponse,
                                                        property: propertyResponse,
                                                        trips: tripResponse,
                                                        propertyName: propertyResponse.name,
                                                        propertyDescription: propertyResponse.description
                                                    })
                            })
                    })
            })

    };

    toggleUpdateMode = () => {
        this.setState((prevState) => ({
            updateMode: !prevState.updateMode
        }))
    }

    propertyNameChangeHandler = (event) => {
        this.setState({
                          propertyName: event.target.value
                      })
    }

    propertyDescriptionChangeHandler = (event) => {
        this.setState({
                          propertyDescription: event.target.value
                      })
    }

    render() {
        return (
            <div className={"container"}>
                <HeadingGeneric text={"Property Details"}/>
                {
                    this.state.property &&
                    <div>
                        {
                            !this.state.updateMode &&
                            <h6>Name: {this.state.propertyName}</h6>
                        }

                        {
                            this.state.updateMode &&
                            <input className={"form-control"}
                                   onChange={this.propertyNameChangeHandler}
                                   value={this.state.propertyName}/>
                        }

                        {
                            !this.state.updateMode &&
                            <h6>Description: {this.state.propertyDescription}</h6>
                        }

                        {
                            this.state.updateMode &&
                            <input className={"form-control"}
                                   onChange={this.propertyDescriptionChangeHandler}
                                   value={this.state.propertyDescription}/>
                        }

                        {
                            this.state.property.sub_properties &&
                            <div>
                                <h6>Sub-properties</h6>
                                <ul>
                                    {
                                        this.state.property.sub_properties.map(
                                            (subProperty, index) => <li
                                                key={index}>{subProperty.name}</li>)
                                    }
                                </ul>
                            </div>

                        }


                        {
                            this.state.updateMode &&
                            <button className={"btn btn-success"} onClick={() => {
                                updateProperty({
                                                   "name": this.state.propertyName,
                                                   "description": this.state.propertyDescription
                                               }, this.state.property.id)
                                    .then((response) => {

                                        this.setState({
                                                          propertyName: response.name,
                                                          propertyDescription: response.description
                                                      })
                                        this.toggleUpdateMode();
                                    })

                            }

                            }>Done</button>
                        }
                        {
                            !this.state.updateMode &&
                            IsLoggedIn() &&
                            <button className={"btn btn-primary"} onClick={() => {
                                this.toggleUpdateMode();
                            }}>Update
                            </button>
                        }

                        {
                            IsLoggedIn() &&
                            <button className={"btn btn-danger"} onClick={() => {
                                deletePropertyById(this.state.property.id)
                                    .then((response) => {
                                        console.log(response);
                                        this.props.history.goBack();
                                    })
                            }}>Delete</button>

                        }


                    </div>
                }
                <hr/>

                {
                    this.state.host.id &&
                    IsLoggedIn() &&
                    <div>
                        <HeadingGeneric text={"Host details"}/>
                        <h6>Firstname: {this.state.host.firstname}</h6>
                        <h6>Lastname: {this.state.host.lastname}</h6>
                        <h6>username: {this.state.host.username}</h6>
                        <h6>Email: {this.state.host.email}</h6>
                    </div>
                }

                <hr/>
                <HeadingGeneric text={"Trips on this property"}/>
                <div className="list-group">
                    {
                        this.state.trips.map((trip, index) => {
                            return (
                                <li className={"list-group-item"}>
                                    <h5>Start: {trip.start}, End: {trip.end}</h5>
                                </li>
                            )
                        })
                    }
                </div>

            </div>
        )
    }

}

export default withRouter(PropertyDetails);
