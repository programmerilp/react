import avatar from "./img/section/avatar.png"
import item1 from "./img/section/itemIcon-1.png"
import item2 from "./img/section/itemIcon-2.png"
import item from "./img/section/itemIcon.png"
import workf from "./img/section/workflow.png"
import download from './img/download.png'

import task from './img/content/task.png'
import item3 from "./img/content/itemIcon-1.png"
import item4 from "./img/content/itemIcon-2.png"
import item6 from "./img/content/itemIcon-3.png"
import item5 from "./img/content/itemIcon.png"
function Section(){
    return(
        <div className="section">
            <div className="container">
                <div className="section-content">
                    <h3>Start using bots in your projects right now</h3>
                    <div className="section-project">
                        <a href="#">Data processing</a>
                        <a href="#">E-commerce</a>
                        <a href="#">E-commerce</a>
                        <a href="#">E-government</a>
                        <a href="#">Examples</a>
                        <a href="#">Examples</a>
                        <a href="#">Lifestyle</a>
                        <a href="#">Marketing</a>
                        <a href="#">News</a>
                        <a href="#">Search engines</a>
                        <a href="#">Social</a>
                        <a href="#">Tools</a>
                        <a href="#">Travel</a>
                    </div>
                    <div className="one-line-content">
                        <div className="online-container">
                            <div className="logo-cont">
                                <img src={item} alt="" />
                                <h4>Google Search <br /> Results Scraper</h4>
                            </div>
                            <a className="workf" href="#"><img src={workf} alt="" />botz/logingoogle</a>
                            <p>The easiest way t search and access <br /> content on Instagram is by using the mobile app or the website</p>
                            <div className="bottom-cont">
                                <a href="#"><img src={avatar} alt="" />botz</a>
                                <span><img src={download} alt=""/>931</span>
                            </div>
                        </div>
                        <div className="online-container">
                            <div className="logo-cont">
                                <img src={item1} alt="" />
                                <h4>Google Search <br /> Results Scraper</h4>
                            </div>
                            <a className="workf" href="#"><img src={workf} alt="" />botz/logingoogle</a>
                            <p>The easiest way t search and access <br /> content on Instagram is by using the mobile app or the website</p>
                            <div className="bottom-cont">
                                <a href="#"><img src={avatar} alt="" />botz</a>
                                <span><img src={download} alt=""/>931</span>
                            </div>
                        </div>
                        <div className="online-container">
                            <div className="logo-cont">
                                <img src={item2} alt="" />
                                <h4>Google Search <br /> Results Scraper</h4>
                            </div>
                            <a className="workf" href="#"><img src={workf} alt="" />botz/logingoogle</a>
                            <p>The easiest way t search and access <br /> content on Instagram is by using the mobile app or the website</p>
                            <div className="bottom-cont">
                                <a href="#"><img src={avatar} alt="" />botz</a>
                                <span><img src={download} alt=""/>931</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                            <div className="bottom-container">
                            <div className="logo-cont">
                                <img src={item5} alt="" />
                                <h4>Google Search <br /> Results Scraper</h4>
                            </div>
                            <a className="workf" href="#"><img src={task} alt="" />botz/logingoogle</a>
                            <p>The easiest way t search and<br /> access  content on Instagram is by using the mobile app or the website</p>
                            <div className="bottom-cont">
                                <a href="#"><img src={avatar} alt="" />botz</a>
                                <span><img src={download} alt=""/>931</span>
                            </div>
                        </div>
                        <div className="bottom-container">
                            <div className="logo-cont">
                                <img src={item4} alt="" />
                                <h4>Google Search <br /> Results Scraper</h4>
                            </div>
                            <a className="workf" href="#"><img src={task} alt="" />botz/logingoogle</a>
                            <p>The easiest way t search and<br /> access  content on Instagram is by using the mobile app or the website</p>
                            <div className="bottom-cont">
                                <a href="#"><img src={avatar} alt="" />botz</a>
                                <span><img src={download} alt=""/>931</span>
                            </div>
                        </div>
                        <div className="bottom-container">
                            <div className="logo-cont">
                                <img src={item3} alt="" />
                                <h4>Google Search <br /> Results Scraper</h4>
                            </div>
                            <a className="workf" href="#"><img src={task} alt="" />botz/logingoogle</a>
                            <p>The easiest way t search and<br /> access  content on Instagram is by using the mobile app or the website</p>
                            <div className="bottom-cont">
                                <a href="#"><img src={avatar} alt="" />botz</a>
                                <span><img src={download} alt=""/>931</span>
                            </div>
                        </div>
                        <div className="bottom-container">
                            <div className="logo-cont">
                                <img src={item6} alt="" />
                                <h4>Google Search <br /> Results Scraper</h4>
                            </div>
                            <a className="workf" href="#"><img src={task} alt="" />botz/logingoogle</a>
                            <p>The easiest way t search and<br /> access  content on Instagram is by using the mobile app or the website</p>
                            <div className="bottom-cont">
                                <a href="#"><img src={avatar} alt="" />botz</a>
                                <span><img src={download} alt=""/>931</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section