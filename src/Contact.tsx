import React from "react";
import "./Contact.css";

/** Contact: presentational component for contact info.
 *
 * Props: none
 * State: none
 *
 * App -> RoutesList -> Contact
 */

function Contact(): JSX.Element {

    return (
        <>
            <div className="Contact-container">
                <h5 className="Contact-email">charlescchitty@gmail.com</h5>
                <div className="Contact-icons">
                    <h5><a href="https://www.linkedin.com/in/charleschitty/" className="nav-link" target="_blank" rel="noopener"><i className="fa-brands fa-linkedin"></i></a></h5>
                    <h5><a href="https://github.com/charleschitty" className="nav-link" target="_blank" rel="noopener"><i className="fa-brands fa-github"></i></a></h5>
                    <h5><a href="mailto:charlescchitty@gmail.com" className="nav-link"><i className="fa-solid fa-envelope"></i></a></h5>
                </div>
            </div>
        </>

    );
}

export default Contact;