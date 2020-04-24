//Core/stage for Main containers.
import React from "react";
import AppMain from "./AppMain.Containers";
import TopBar from "./TopBar.Container";
import {withRouter} from "react-router-dom";

class AppCore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <TopBar/>
                <AppMain />
            </div>
        )
    }
}

export default withRouter(AppCore);
