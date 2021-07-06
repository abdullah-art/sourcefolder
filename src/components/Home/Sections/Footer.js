import React from 'react'
import "./footer.css"
export default function Footer() {
    return (
        <section id="footer">
            <footer className="site-footer foot">
                <div className="container-fluid">
                <div className="row p-5">
                    <div className="col mt-1">
                        <h4 id="f-h">Features</h4><br/>
                        <a href="/sentimentanalysis"><p id="f-h">Sentiment Analysis</p></a>
                        <a href="/conversationcluster" ><p id="f-h">Conversation Cluster</p></a>
                        <a href="/analytics" ><p id="f-h">Analytics</p></a>
                    </div>

                    <div className="col mt-1">
                        <h4 id="f-h">Resources</h4><br/>
                        <a href="/blogs"><p id="f-h">Blogs</p></a>
                        <a href="/reports"><p id="f-h">Reports</p></a>
                        
                    </div>
                    <div className="col mt-1">
                        <h4 id="f-h">Pricing</h4><br/>
                        <a href="/pricing"><p id="f-h">Plans</p></a>
                    </div>
                    <div className="col mt-1">
                        <h4 id="f-h">About us</h4><br/>
                        <a href="/aboutus" ><p id="f-h">About</p></a>
                        <a href="/contact"><p id="f-h">Contact Us</p></a>
                        
                    </div>
                </div>
                <hr/>
            </div>
            </footer>
        </section>
    )
}
