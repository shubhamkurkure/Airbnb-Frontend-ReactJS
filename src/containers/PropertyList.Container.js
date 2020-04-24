import React from "react";
import {findPropertyByUsername} from "../services/propertyService";
import HeadingGeneric from "../components/generics/HeadingGeneric.Component";
import {Link} from "react-router-dom";

class PropertyList extends React.Component {

    state = {
        properties: []
    }

    componentDidMount() {
        findPropertyByUsername(localStorage.getItem("username"))
            .then((response) => {
                this.setState({
                    properties : response
                              })
            })
    }

    render() {
        return (
            <div className={"container"}>
                <HeadingGeneric text={`Properties owned by ${localStorage.getItem("username")}`}/>
                <div className={"list-group"}>
                    <div className={"list-group-item"}>
                        {
                            this.state.properties.map((property,index)=>{
                                return(<div>
                                    <h5>Name:<Link to={`/property/${property.id}`}>{property.name}</Link></h5>
                                    <h5>Description: {property.description}</h5>
                                </div>)
                            })
                        }

                    </div>
                </div>
            </div>

        )
    }
}

export default PropertyList;
