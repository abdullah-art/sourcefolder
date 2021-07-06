import React from 'react'
import './AboutSection3.css'
import aus3a from "../../../assets/img/aus3a.jpg"
import aus3b from "../../../assets/img/aus3b.jpg"
export default function AboutSection3() {
    return (
        <section id="AboutSection3">
            <div className="page-section">
                <div className="container-fluid">
                <div className="row m-auto justify-content-center text-center">
                    <div>
                            <h2 id="aus3title-c">
                            Talkwalker in numbers 
                            </h2><br/><br/>
                            <img src={aus3a} alt="no" id="aus3a-i"/>
                    </div>
                
                    <div className="aus3c">
                            <h2 id="aus3title-c">
                            Our Business Principles: our mission & vision 
                            </h2><br/><br/>
                            <img src={aus3b} alt="no" id="aus3a-i"/>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
