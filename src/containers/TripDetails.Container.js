import React from "react";
import {
    deleteTripById,
    findPropertyByTripId,
    findTripByTripId,
    updateTrip
} from "../services/tripService";
import {findGuestReviewsByGuestId, findHostReviewsByHostId} from "../services/reviewService";
import HeadingGeneric from "../components/generics/HeadingGeneric.Component";
import CreateReview from "./CreateReview.Container";

class TripDetails extends React.Component {

    state = {
        tripStart: '',
        tripEnd: '',
        property: {},
        updateMode: false,
        invitees: []
    }

    componentDidMount() {
        findTripByTripId(this.props.match.params.tripId)
            .then((tripResponse) => {
                console.log("trip response")
                console.log(tripResponse)
                findPropertyByTripId(this.props.match.params.tripId)
                    .then((propertyResponse) => {
                        console.log(propertyResponse)
                        this.setState({
                                          tripStart: tripResponse.start,
                                          tripEnd: tripResponse.end,
                                          property: propertyResponse,
                                          invitees: tripResponse.guests
                                      })
                    })
            })
    }

    tripStartChangeHandler = (event) => {
        this.setState({
                          tripStart: event.target.value
                      })
    }

    tripEndChangeHandler = (event) => {
        this.setState({
                          tripEnd: event.target.value
                      })
    }

    toggleUpdateChangeHandler = () => {
        this.setState((prevState) => ({
            updateMode: !prevState.updateMode
        }))
    }

    render() {
        return (
            <div className={"container"}>
                <HeadingGeneric text={"Trip details"}/>
                <hr/>

                {/*trip details common*/}
                {
                    !this.state.updateMode &&
                    <h5>Trip start date: {this.state.tripStart}</h5>
                }
                {
                    this.state.updateMode &&
                    <input className={"form-control"} value={this.state.tripStart}
                           onChange={this.tripStartChangeHandler}/>
                }

                {
                    !this.state.updateMode &&
                    <h5>Trip end date: {this.state.tripEnd}</h5>
                }

                {
                    this.state.updateMode &&
                    <input className={"form-control"} value={this.state.tripEnd}
                           onChange={this.tripEndChangeHandler}/>
                }

                {
                    !this.state.updateMode &&
                    <button className={"btn btn-primary"} onClick={() => {
                        this.toggleUpdateChangeHandler()
                    }}>Update trip
                    </button>
                }

                {
                    this.state.updateMode &&
                    <button className={"btn btn-success"} onClick={() => {
                        updateTrip({
                                       "start": this.state.tripStart,
                                       "end": this.state.tripEnd
                                   }, this.props.match.params.tripId)
                            .then((tripUpdateResponse) => {
                                console.log(tripUpdateResponse);
                                this.toggleUpdateChangeHandler();
                                alert("Trip update successful");
                            })
                    }}>Done
                    </button>
                }

                <button className={"btn btn-danger"} onClick={() => {
                    deleteTripById(this.props.match.params.tripId)
                        .then((tripDeleteRespone) => {
                            console.log(tripDeleteRespone);
                            alert("Trip deleted successfully.");
                            this.props.history.goBack();
                        })
                }}>Delete trip
                </button>


                {/*trip property common*/}
                <HeadingGeneric text={"Property used on this trip"}/>
                <h4>Property name: {this.state.property.name}</h4>
                <h4>Property description: {this.state.property.description}</h4>

                <HeadingGeneric text={"Other guests on the trip"}/>
                {
                    this.state.invitees.map((invitee, index)=> <h4 key={index}>Name: {invitee.firstName}</h4>

                    )
                }

                {/*Trip review*/}
                <HeadingGeneric text={"Give reviews"}/>
                <CreateReview tripId={this.props.match.params.tripId}/>
            </div>
        )
    }
}

export default TripDetails;
