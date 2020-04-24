import React from "react";
import {
    createGuestReview,
    createHostReview,
    findGuestReviewsByGuestId,
    findHostReviewsByHostId
} from "../services/reviewService";

class CreateReview extends React.Component {

    state = {
        // Review
        guest_review: "",
        property_review: "",
        host_review: "",
        host_rating: "",
        guest_rating: "",
        property_rating: "",
        given_by: "",
    }

    guest_reviewChangeHandler = (event) => {
        this.setState({
                          guest_review: event.target.value
                      })
    }

    property_reviewChangeHandler = (event) => {
        this.setState({
                          property_review: event.target.value
                      })
    }

    host_reviewChangeHandler = (event) => {
        this.setState({
                          host_review: event.target.value
                      })
    }

    host_ratingChangeHandler = (event) => {
        this.setState({
                          host_rating: event.target.value
                      })
    }

    guest_ratingChangeHandler = (event) => {
        this.setState({
                          guest_rating: event.target.value
                      })
    }

    property_ratingChangeHandler = (event) => {
        this.setState({
                          property_rating: event.target.value
                      })
    }

    // given_byChangeHandler = (event) => {
    //     //     this.setState({
    //     //                       given_by: event.target.value
    //     //                   })
    //     // }

    render() {
        return (
            <div className={"container list-group"}>

                {
                    localStorage.getItem("userType") === "host" &&
                    <div class="list-group-item">
                        Guest Review:
                        <input className={"form-control"} onChange={this.guest_reviewChangeHandler}
                               value={this.state.guest_review}/>
                    </div>
                }

                {
                    localStorage.getItem("userType") === "guest" &&
                    <div className="list-group-item">
                        Property Review:
                        <input className={"form-control"} onChange={this.property_reviewChangeHandler}
                               value={this.state.property_review}/>
                    </div>
                }

                {
                    localStorage.getItem("userType") === "guest" &&
                    <div className="list-group-item">
                        Host Review:
                        <input className={"form-control"} onChange={this.host_reviewChangeHandler}
                               value={this.state.host_review}/>
                    </div>
                }

                {
                    localStorage.getItem("userType") === "guest" &&
                    <div className="list-group-item">
                        Host Rating:
                        <input className={"form-control"} onChange={this.host_ratingChangeHandler}
                               value={this.state.host_rating} placeholder={"out of 5"}/>
                    </div>
                }

                {
                    localStorage.getItem("userType") === "host" &&
                    <div class="list-group-item">
                        Guest Rating:
                        <input className={"form-control"} onChange={this.guest_ratingChangeHandler}
                               value={this.state.guest_rating} placeholder={"out of 5"}/>
                    </div>
                }


                <div className="list-group-item">
                    Property Rating:
                    <input className={"form-control"} onChange={this.property_ratingChangeHandler}
                           value={this.state.property_rating} placeholder={"out of 5"}/>
                </div>

                <div className="list-group-item">
                    <button className={"btn btn-success"} onClick={()=>{
                        if(localStorage.getItem("userType") === "guest") {
                            createGuestReview(this.state, this.props.tripId)
                                .then((response) =>{
                                    console.log(response);
                                    alert("Review submitted successfully");
                                })
                        }

                        if(localStorage.getItem("userType") === "host") {
                            createHostReview(this.state, this.props.tripId)
                                .then((response) =>{
                                    console.log(response);
                                    alert("Review submitted successfully");
                                })
                        }
                    }}>Give review</button>
                </div>

            </div>
        )
    }

}

export default CreateReview;
