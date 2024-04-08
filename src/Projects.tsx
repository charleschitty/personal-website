import React from "react";
import "./Projects.css";
// import joblyGif from "../public/joblyGif.gif";
// import frienderGif from "../public/frienderGif.gif";

/** Projects: presentational component for projects
 *
 * Props: none
 * State: none
 *
 * App => RouteList => Projects
 */

function Projects(): JSX.Element {
    return (
        <div>
            <div className="Projects-container">
                <a
                    href="https://jobly.charleschitty.com"
                    target="_blank"
                    rel="noopener"
                    className="Projects-project">
                    <h2 className="Project-title">
                        Jobly
                    </h2>

                </a>
                <a
                    href="https://charleschitty-jobly.onrender.com/"
                    target="_blank"
                    rel="noopener"
                >
                    {/* <img src={joblyGif} className="Projects-gif" /> */}
                </a>
                <p> Job board where users can sign up, browse companies,and apply to jobs.
                    Companies can post new jobs. Protects routes on unauthorized users. Manages React state.
                    Backenend authentication using jsonschema and JWT. Additional tech: React, React Router, Fetch API, Node.js, Express, PostgreSQL, ElephantSQL, render.&nbsp;
                </p>
                <a href="https://friender-demo-app.onrender.com"
                    target="_blank"
                    rel="noopener"
                    className="Projects-project">
                    <h2 className="Project-title">
                        Friender
                    </h2>
                </a>
                <a href="https://friender-demo-app.onrender.com"
                    target="_blank"
                    rel="noopener"
                >
                    {/* <img src={frienderGif} className="Projects-gif" /> */}
                </a>
                <p> Social Media Site that lets users upload profile pictures, view other profiles, and links members to local users
                    Uses AWS S3 to store and retrieve image files. Additional tech: Python, Flask, Jinja, SQLAlchemy, JS.&nbsp;
                    <a
                        href="https://github.com/charleschitty/friender"
                        target="_blank"
                        rel="noopener"
                    >
                        GitHub.
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Projects;
