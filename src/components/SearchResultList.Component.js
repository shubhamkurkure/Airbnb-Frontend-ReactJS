import React from "react";
import {Link} from "react-router-dom";

export const SearchResultList = (props) => {
    return (

        <li className="list-group-item">

            <Link to={`/property/${props.property.id}`}><h3>Name: {props.property.name}</h3></Link>
            <p>{props.property.description}</p>
            <h5>No. of rooms: {props.property.noOfRooms}</h5>
            <h5>Verified: {props.property.verified ? "Yes" : "No" }</h5>
            <h5>Max no. of people: {props.property.maxNoOfPerson}</h5>
            {
                localStorage.getItem("userType") === "guest" &&
                <Link to={`/book/property/${props.property.id}`}><button className={"btn btn-success"}>Book now</button></Link>
            }

        </li>
    )
}
