import React from 'react'
import './PricingSection3.css'
import css3a from '../../../assets/img/css3a.png'
import css3b from '../../../assets/img/css3b.png'
export default function PricingSection3() {
    return (
        <div className="container-flex">
            <div className="hero-caption pt-1">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                    <div className="wow fadeInUp">
                        <h2 id="css3mtext">Leader in enterprise social listening,as recognized by Forrester & G2Crowd</h2>
                        <br/><br/><br/>
                        <div className="row lead m-auto">
                            <div className="col-md-6">
                                <img src={css3a} alt="no" id="i1"/>
                            </div>
                            <div className="col-md-6">
                            <img src={css3b} alt="no" id="i2"/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
