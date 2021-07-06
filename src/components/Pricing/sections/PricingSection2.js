import React from 'react'
import './PricingSection2.css'
export default function PricingSection2() {
    return (
        <div className="container-flex">
            <div className="row">
                <div className="col-md-3 pric1">
                    <h2 id="pric-h">Listening</h2><hr id="p-h1"/>
                    <p id="pric-c">For growing brands and agencies looking for an intuitive solution to get started with social listening. </p>
                    <h2 id="pric-h">9000$</h2>
                    <a href="demo" className="btn btn-primary rounded-pill mt-2" id="cs1demoa">
                        Learn More
                    </a>
                    <ul className=" mt-4 ml-3 mr-1" id="pric-c">
                        <li>
                            <p>The best data coverage on social and web.</p>
                        </li>
                        <li>
                            <p> Easy-to-use dashboards, reports and alerts on your brand and competitors. </p>
                        </li>
                        <li>
                            <p> Top-of-the-line social listening training for your team. </p>
                        </li>
                        <li>
                            <p>And much more </p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 pric2">
                    <h2 id="pric-h">Analytics</h2><hr id="p-h2"/>
                    <p id="pric-c">For growing brands and agencies seeking advanced analytics on their digital performance. </p>
                    <h2 id="pric-h">On Request</h2>
                    <a href="demo" className="btn btn-primary rounded-pill mt-2" id="cs1demob">
                        Learn More
                    </a>
                    <ul className=" mt-4 ml-3 mr-1 p2m" id="pric-c">
                        <li>
                            <p>Customizable dashboards and reporting to fit your specific needs.</p>
                        </li>
                        <li>
                            <p> Detailed analytics on your brand, campaigns and competitors. </p>
                        </li>
                        <li>
                            <p>And much more </p>
                        </li>
                    </ul>
                </div >
                <div className="col-md-3 pric3">
                    <h2 id="pric-h">Research</h2><hr id="p-h3"/>
                    <p id="pric-c">For enterprise brands & agencies interested in consumers, categories insights & trend detection. </p>
                    <h2 id="pric-h">On Request</h2>
                    <a href="demo" className="btn btn-primary rounded-pill mt-2" id="cs1democ">
                        Learn More
                    </a>
                    <ul className=" mt-4 ml-3 mr-1 p3m" id="pric-c">
                        <li>
                            <p>Best-in-class AI features (visual analytics, Conversation Clusters)</p>
                        </li>
                        <li>
                            <p> Advanced data integration on top of web and social data. </p>
                        </li>
                        <li>
                            <p> Enhanced features for collaboration and governance </p>
                        </li>
                        <li>
                            <p>And much more </p>
                        </li>
                    </ul>
                </div>
            </div>
            <br/><br/><br/><br/>
        </div>
    )
}
