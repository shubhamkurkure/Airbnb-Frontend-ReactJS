import React from "react";
import {Link} from "react-router-dom";

export const PropertyRow = (props) => {
    return (
        <li className="list-group-item">

            <Link to={`/property/${props.property.id}`}><h3>Name: {props.property.name}</h3></Link>
            <p>{props.property.description}</p>
            <h5>No. of rooms: {props.property.noOfRooms}</h5>
            <h5>Verified: {props.property.verified ? "Yes" : "No" }</h5>
            <h5>Max no. of people: {props.property.maxNoOfPerson}</h5>

        </li>
    )
}
