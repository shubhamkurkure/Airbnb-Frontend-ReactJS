import React from "react";
import {assignSubProperty, createProperty, findPropertyById} from "../services/propertyService";

class CreateProperty extends React.Component {
    state = {
        price: "",
        name: "",
        property_type: "",
        noOfRooms: "",
        verified: "",
        maxNoOfPerson: "",
        description: "",
        subPropertyId: "",
        subPropertyList: []
    }

    priceChangeHandler = (event) => {
        this.setState({
                          price: event.target.value
                      })
    }

    nameChangeHandler = (event) => {
        this.setState({
                          name: event.target.value
                      })
    }

    property_typeChangeHandler = (event) => {
        this.setState({
                          property_type: event.target.value
                      })
    }

    noOfRoomsChangeHandler = (event) => {
        this.setState({
                          noOfRooms: event.target.value
                      })
    }

    verifiedChangeHandler = (event) => {
        this.setState({
                          verified: event.target.value
                      })
    }
    maxNoOfPersonChangeHandler = (event) => {
        this.setState({
                          maxNoOfPerson: event.target.value
                      })
    }

    descriptionChangeHandler = (event) => {
        this.setState({
                          description: event.target.value
                      })
    }

    subPropertyTextChangeHandler = (event) => {
        this.setState({
                          subPropertyId: event.target.value
                      })
    }

    render() {
        return (
            <div className={"container"}>
                Price:
                <input className={"form-control"} onChange={this.priceChangeHandler}
                       value={this.state.price}/>

                Name:
                <input className={"form-control"} onChange={this.nameChangeHandler}
                       value={this.state.name}/>

                Property Type:
                <input className={"form-control"} onChange={this.property_typeChangeHandler}
                       value={this.state.property_type}/>

                Number Of Rooms:
                <input className={"form-control"} onChange={this.noOfRoomsChangeHandler}
                       value={this.state.noOfRooms}/>

                Verified:
                <input className={"form-control"} onChange={this.verifiedChangeHandler}
                       value={this.state.verified}/>

                Max Number Of People:
                <input className={"form-control"} onChange={this.maxNoOfPersonChangeHandler}
                       value={this.state.maxNoOfPerson}/>

                Description:
                <input className={"form-control"} onChange={this.descriptionChangeHandler}
                       value={this.state.description}/>

                Enter sub-property id:
                <input className={"form-control"} onChange={this.subPropertyTextChangeHandler}
                       value={this.state.subPropertyId}/>
                <button className={"btn btn-primary mt-2"} onClick={() => {
                    findPropertyById(this.state.subPropertyId)
                        .then((response) => {
                            this.setState((prevState) => ({
                                subPropertyList: [...prevState.subPropertyList, response.id]
                            }))
                        })
                }}>Verify and add Sub-Property
                </button>

                <hr/>
                <h5>Sub-property list</h5>
                <hr/>
                {
                    this.state.subPropertyList.map(
                        (subProperty, index) => <h6 key={index}>{subProperty}</h6>)
                }
                <hr/>
                <br/>
                <button className={"btn btn-success"} onClick={() => {
                    createProperty({
                                       price: this.state.price,
                                       name: this.state.name,
                                       type: this.state.property_type,
                                       noOfRooms: this.state.noOfRooms,
                                       verified: this.state.verified,
                                       maxNoOfPerson: this.state.maxNoOfPerson,
                                       description: this.state.description
                                   }, localStorage.getItem("uid"))
                        .then((response) => {
                            console.log(response);
                            this.state.subPropertyList.map((subPropertyId)=>{
                                assignSubProperty(response.id, subPropertyId)
                                    .then((resp)=>{
                                        console.log("sub-property added");
                                        console.log(resp);
                                    })
                            })

                            alert("Property add successfully");
                        })
                }}>Create property
                </button>

            </div>
        );
    }
}

export default CreateProperty;
