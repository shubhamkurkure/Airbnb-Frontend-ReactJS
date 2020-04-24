import React from "react";
import {findPropertyByUsername} from "../services/propertyService";
import HeadingGeneric from "../components/generics/HeadingGeneric.Component";
import {Link} from "react-router-dom";
import {findTripByGuestId, findTripByHostId} from "../services/tripService";

class TripList extends React.Component {

    state = {
        trips: []
    }

    componentDidMount() {
        if (localStorage.getItem("userType") === "guest") {
            findTripByGuestId(localStorage.getItem("uid"))
                .then((response) => {
                    this.setState({
                                      trips: response
                                  })
                })
        }

        if (localStorage.getItem("userType") === "host") {
            findTripByHostId(localStorage.getItem("uid"))
                .then((response) => {
                    this.setState({
                                      trips: response
                                  })
                })
        }

    }

    render() {
        return (
            <div className={"container"}>
                {
                    localStorage.getItem("userType") === "guest" &&
                    <HeadingGeneric text={`Trips made by ${localStorage.getItem("username")}`}/>

                }

                {
                    localStorage.getItem("userType") === "host" &&
                    <HeadingGeneric
                        text={`Trips happened on the the properties of ${localStorage.getItem(
                            "username")}`}/>
                }
                <div className={"list-group"}>
                    {
                        this.state.trips.map((trip, index) => {
                            return (<div className={"list-group-item"} key={index}>
                                <h5><Link to={`/trip/${trip.id}`}>Trip {index + 1}</Link></h5>
                                <h5>Trip start date: <Link
                                    to={`/trip/${trip.id}`}>{trip.start}</Link></h5>
                                <h5>Trip end date: {trip.end}</h5>
                                <h5>Payment type:{trip.payment_detail.payment_type}</h5>
                                <h5>Payment date:{trip.payment_detail.payment_date}</h5>
                                <h5>Payment amount:{trip.payment_detail.payment_amount}</h5>
                            </div>)
                        })
                    }
                </div>
            </div>

        )
    }
}

export default TripList;
