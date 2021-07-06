import React from 'react'
import background from "../../../assets/img/pattern_1.svg";
import Section1 from './Section/signupSection'
export default function Signup() {
    return (
        <div>
            <>
            <div
                className="position-realive bg-image"
                style={{ backgroundImage: `url(${background})` }}
            >
            <Section1/>
            </div>
            </>
        </div>
    )
}