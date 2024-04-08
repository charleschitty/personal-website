import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

/** Navbar: component with links to different pages of website
 *
 * Props: none
 * State: none
 *
 * App -> Navbar
 */

function Navbar(): JSX.Element {

    return (
        <div className="Navbar">
            <NavLink to="/" end>
                me
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
