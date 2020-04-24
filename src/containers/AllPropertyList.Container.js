import React from "react";
import {findAllProperty} from "../services/propertyService";
import {PropertyRow} from "../components/PropertyRow.Component";
import HeadingGeneric from "../components/generics/HeadingGeneric.Component";

class AllProperty extends React.Component {

    state = {
        propertyList : []
    }

    componentDidMount() {
        findAllProperty()
            .then((response) => {
                this.setState({
                                  propertyList: response
                              })
                console.log(response);
            });
    }

    render() {
        return (
            <div className={"container"}>
                <HeadingGeneric text={"Available properties"}/>
                <ul>
                    {
                        this.state.propertyList.map((property, index) =>
                            <PropertyRow key = {index}
                                         property = {property}
                            />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default AllProperty;
