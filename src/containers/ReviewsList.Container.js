import React from "react";
import {findGuestReviewsByGuestId, findHostReviewsByHostId} from "../services/reviewService";
import HeadingGeneric from "../components/generics/HeadingGeneric.Component";

class ReviewsList extends React.Component {

    state = {
        // Review
        reviewsList: []
    }

    componentDidMount() {
        if (localStorage.getItem("userType") === "guest") {
            findGuestReviewsByGuestId(localStorage.getItem("uid"))
                .then((reviewResponse) => {

                    console.log(reviewResponse);

                    this.setState({
                                      reviewsList: reviewResponse

                                  })
                })

        }

        if (localStorage.getItem("userType") === "host") {
            findHostReviewsByHostId(localStorage.getItem("uid"))
                .then((reviewResponse) => {
                    console.log(reviewResponse);
                    this.setState({

                                      reviewsList: reviewResponse
                                  })
                })

        }

    }

    render() {
        return (
            <div className={"container list-group"}>
                <HeadingGeneric text ={"Review given by you"}/>

                {
                    this.state.reviewsList.map((review, index) =>{
                        return <div key={index} className={"list-group-item"}>

                            {<h5>Property review: {review.property_review}</h5>}
                            { <h5>Property rating: {review.property_rating}</h5>}
                            {localStorage.getItem("userType")==="guest" && <h5>Host review: {review.host_review}</h5>}
                            {localStorage.getItem("userType")==="guest" && <h5>Host rating: {review.host_rating} </h5>}
                            {localStorage.getItem("userType")==="host" && <h5>Guest rating: {review.guest_rating}</h5>}
                            {localStorage.getItem("userType")==="host" && <h5>Guest review: {review.guest_review} </h5>}

                        </div>
                    })
                }
            </div>
        )
    }

}

export default ReviewsList;
