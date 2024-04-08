import React from "react";
import "./Info.css";


/** Body: presentational component for about me details
 *
 *  Props: none
 *  State: none
 *
 *  App -> Info
 */

function Info(): JSX.Element {

    return (
        <>
            <div className="Info">
                <h2 className="Info-header mt-5">Experience</h2>
                <h2 className="Info-header mt-5">Education</h2>
                <h3 className="RS-title mt-4">Full Stack Web Development</h3>
                <h4 className="RS"><a href="https://www.rithmschool.com/" target="_blank" rel="noopener">Rithm School 2023-2024</a></h4>
                <h3 className="Duke mt-4">Bachelor of Science, Economics</h3>
                <h4 className="Duke"><a href="https://www.dukeuniversity.edu/" target="_blank" rel="noopener">Duke University 2023</a></h4>
            </div>
        </>
    );
}

export default Info;