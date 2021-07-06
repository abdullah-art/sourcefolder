import React from 'react'
import './Reports.css'
import background from "../../assets/img/pattern_1.svg";
import Header from '../Home/Sections/Header'
import Section1 from './sections/ReportsSection1'
import Section2 from './sections/ReportsSection2'
import Section3 from './sections/ReportsSection3'
import Footer from '../Home/Sections/Footer'
export default function Reports() {
    return (
        <>
            <Section1/>
            <div
                className="position-realive bg-image"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Section2/>
                <Section3/>
            </div>  
        </>
    )
}
