import React from "react";
import {Link, withRouter} from "react-router-dom";
import {getLoggedInUserType, IsLoggedIn} from "../utility/SessionUtility";

class TopBar extends React.Component {
    state = {}

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link to="/" className="navbar-brand">TravelWorld</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">

                        {/*Auth and non-Auth user*/}
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>


                        <li className="nav-item">
                            <Link to="/search" className="nav-link">Search property</Link>
                        </li>

                        {/*Logged in and host*/}
                        {IsLoggedIn() &&
                         getLoggedInUserType() === "host" &&
                         <li className="nav-item">
                             <Link to="/properties" className="nav-link">Properties</Link>
                         </li>
                        }

                        {/*Logged in and either admin or host*/}
                        {IsLoggedIn() &&
                         (getLoggedInUserType() === "host" || getLoggedInUserType() === "admin") &&
                         <li className="nav-item">
                             <Link to="/create/property" className="nav-link">Add property</Link>
                         </li>
                        }

                        {/*Logged in and guest*/}
                        {IsLoggedIn() &&
                         getLoggedInUserType() === "guest" &&
                         <li className="nav-item">
                             <Link to="/create/trip" className="nav-link">Create trip</Link>
                         </li>
                        }

                        {/*Common for all user types*/}
                        {IsLoggedIn() &&
                         <li className="nav-item">
                             <Link to="/trips" className="nav-link">All trips</Link>
                         </li>
                        }

                        {IsLoggedIn() &&
                         <li className="nav-item">
                             <Link to={`/profile`}
                                   className="nav-link">{localStorage.getItem("username")}`s
                                 profile</Link>
                         </li>
                        }


                        <li className="nav-item">
                            <Link to={`/reviews`}
                                  className="nav-link">
                                Reviews</Link>
                        </li>


                        {/*Login*/}
                        {!IsLoggedIn() &&
                         <li className="nav-item">
                             <Link to="/register" className="nav-link">Register</Link>
                         </li>
                        }

                        {!IsLoggedIn() &&
                         localStorage.getItem("userType") === "admin" &&
                         <li className="nav-item">
                             <Link to="/userManager" className="nav-link">User management</Link>
                         </li>
                        }

                        {!IsLoggedIn() &&
                         <li className="nav-item">
                             <Link to="/login" className="nav-link">Login</Link>
                         </li>
                        }

                        {/*Logout*/}
                        {IsLoggedIn() &&
                         <li className="nav-item">
                             <div
                                 className="nav-link"
                                 onClick={() => {
                                     localStorage.clear()
                                     window.location.reload()
                                 }}
                             >Logout
                             </div>
                         </li>
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(TopBar);
