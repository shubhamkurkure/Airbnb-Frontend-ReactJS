import React from "react";
import {SearchResultList} from "../components/SearchResultList.Component";
import {findPropertyByLocation} from "../services/propertyService";
import HeadingGeneric from "../components/generics/HeadingGeneric.Component";

class SearchProperty extends React.Component {
    state = {
        searchField: "",
        searchResultList: []
    }

    searchFieldChangeHandler = (event) => {
        this.setState({
                          searchField: event.target.value
                      })
    }

    render() {
        return (
            <div className={"container"}>
                <HeadingGeneric text = {"Search for the best properties here"}/>
                <br/>
                <div className={"row"}>
                    <input
                        style={{"width":"90%"}}
                        className={"form-control"}
                        placeholder={"Search for property by your choice of city"}
                        onChange={this.searchFieldChangeHandler} value={this.state.searchField}/>
                    <button className={"btn btn-primary ml-2"} style={{"width":"9%"}} onClick={() => {
                        findPropertyByLocation(this.state.searchField)
                            .then((searchResult) => {
                                this.setState({
                                    searchResultList: searchResult
                                              })
                            })
                    }}>Search</button>
                </div>
                <div className={"row mt-2"}>
                    <ul className={"list-group"} style={{"width":"100%"}}>
                        {
                            this.state.searchResultList.length > 0 &&
                            this.state.searchResultList.map((property, index) =>
                                                                <SearchResultList key={index}
                                                                                  property={property}
                                                                />
                            )
                        }
                    </ul>
                </div>

            </div>
        )
    }
}

export default SearchProperty;
