import React from "react";
import {findPropertyById} from "../services/propertyService";
import {addGuestToTrip, createTrip} from "../services/tripService";
import {createPayment} from "../services/paymentDetailsService";
import HeadingGeneric from "../components/generics/HeadingGeneric.Component";
import {withRouter} from "react-router-dom";
import {findGuestByUsername} from "../services/guestService";

class CreateTrip extends React.Component {
    state = {
        start: "",
        end: "",
        // Payment Details
        type: "",
        payment_date: "",
        amount: "",

        property: {},

        searchInvitee: '',
        inviteeIdList: [],
        inviteeNameList: []
    }

    componentDidMount() {
        findPropertyById(this.props.match.params.propertyId)
            .then((response) => {
                console.log(response);
                this.setState({
                                  property: response
                              })
            })

    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    // }

    inviteeNameChangeHandler = (event) => {
        this.setState({
                          searchInvitee: event.target.value
                      })
    }

    startChangeHandler = (event) => {
        this.setState({
                          start: event.target.value
                      })
    }

    endChangeHandler = (event) => {
        this.setState({
                          end: event.target.value
                      })
    }

    typeChangeHandler = (event) => {
        this.setState({
                          type: event.target.value
                      })
    }

    payment_dateChangeHandler = (event) => {
        this.setState({
                          payment_date: event.target.value
                      })
    }

    amountChangeHandler = (event) => {
        this.setState({
                          amount: event.target.value
                      })
    }

    render() {
        return (

            <div className={"container"}>
                <HeadingGeneric text={"Create trip"}/>
                <div>
                    <h4>Property selected for this trip:</h4>
                    <h5>Name: {this.state.property.name}</h5>
                    <h5>Description: {this.state.property.description}</h5>
                </div>
                <br/>
                <hr/>
                Start Date:
                <input className={"form-control"} onChange={this.startChangeHandler}
                       value={this.state.start}/>

                End Date:
                <input className={"form-control"} onChange={this.endChangeHandler}
                       value={this.state.end}/>


                Type:
                <input className={"form-control"} onChange={this.typeChangeHandler}
                       value={this.state.type}/>

                Payment Date:
                <input className={"form-control"} onChange={this.payment_dateChangeHandler}
                       value={this.state.payment_date}/>

                Amount:
                <input className={"form-control"} onChange={this.amountChangeHandler}
                       value={this.state.amount}/>


                <hr/>

                Invitee other guests
                <hr/>
                your guest list:
                <br/>
                <br/>
                {
                    this.state.inviteeNameList.map((inviteeName, index)=><h5 key={index}>Guest: {inviteeName}</h5>)
                }

                <input placeholder={"Search invitee/other guest name to add to this trip"} className={"form-control"} value={this.state.searchInvitee} onChange={this.inviteeNameChangeHandler}/>
                <button className={"btn btn-primary"} onClick={()=>{
                    findGuestByUsername(this.state.searchInvitee)
                        .then((response)=>{
                            console.log(response);
                            if(response.id) {
                                let guestIdList = [...this.state.inviteeIdList , response.id];
                                let guestNameList = [...this.state.inviteeNameList , response.firstName];
                                this.setState({
                                    inviteeIdList : guestIdList,
                                    inviteeNameList: guestNameList
                                              })

                            } else {
                                alert("No such guest user found")
                            }
                        })
                }}>Add guest to trip</button>

                <hr/>

                <button className={"btn btn-success"} onClick={() => {
                    createTrip({"start": this.state.start, "end": this.state.end},
                               this.state.property.id,
                               localStorage.getItem("uid"))
                        .then((tripResponse) => {
                            console.log(tripResponse);
                            console.log("Trip created successfully");

                            createPayment({
                                              type: this.state.type,
                                              payment_date: this.state.payment_date,
                                              amount: this.state.amount,
                                          }, tripResponse.id)
                                .then((resp) => {
                                    console.log("payment successful");
                                    console.log(resp);

                                    this.state.inviteeIdList.map((inviteeId, index) =>{
                                        addGuestToTrip(tripResponse.id, inviteeId)
                                            .then((resp)=>{
                                                console.log("Invitee added")
                                            })
                                        alert("Booking successful")
                                        this.props.history.push("/");
                                    })


                                })

                        })
                }}>Book this trip
                </button>

            </div>
        );
    }
}

export default withRouter(CreateTrip);
