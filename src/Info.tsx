import React from "react";
import "./Body.css";


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
            <div className="Body-container">
                <h2 className="Body-header mt-5">Experience</h2>
                <h3>Field Operator Specialist III</h3>
                <h4 className="Kett"><a href="https://www.ketteng.com/" target="_blank" rel="noopener">Kett Engineering 2018-2023</a></h4>
                <h2 className="Body-header mt-5">Education</h2>
                <h3 className="RS-title mt-4">Full Stack Web Development</h3>
                <h4 className="RS"><a href="https://www.rithmschool.com/" target="_blank" rel="noopener">Rithm School 2023-2024</a></h4>
                <h3 className="De-Anza mt-4">Associate of Science, Computer Science</h3>
                <h4 className="RS"><a href="https://www.deanza.edu/" target="_blank" rel="noopener">De Anza College 2019</a></h4>
                <h3 className="LMU mt-4">Bachelor of Arts, Screenwriting</h3>
                <h4 className="RS"><a href="https://www.lmu.edu/" target="_blank" rel="noopener">Loyola Marymount University 2016</a></h4>
            </div>


        </>
    );
}

export default Body;