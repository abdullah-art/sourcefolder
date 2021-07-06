import React from 'react'
import './Blogs.css'
import background from "../../assets/img/pattern_1.svg";
import Section1 from './Sections/BlogsSection1'
import Section2 from './Sections/BlogsSection2'
export default function Blogs() {
    return (
        <>
            <Section1/>
            <div
                className="position-realive bg-image"
                style={{ backgroundImage: `url(${background})` }}
            >
            <Section2/>
                </div>
        </>
    
    );
}
