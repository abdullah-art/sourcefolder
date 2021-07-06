import React from 'react'
import Section1 from './Sections/SentimentSection1'
import Section2 from './Sections/SentimentSection2'
import Section3 from './Sections/SentimentSection3'
import Section4 from './Sections/SentimentSection4'
import Section5 from './Sections/SentimentSection5'
import background from "../../assets/img/pattern_1.svg";
export default function Sentiment() {
    return (
        <>
            <Section1/>
            <div
                className="position-realive bg-image"
                style={{ backgroundImage: `url(${background})` }}
            >
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            </div>
        </>
    )
}
