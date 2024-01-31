import React from "react";
import "../assets/css/Home.css"
import micro from "../assets/images/microsoft.svg"
import auto from "../assets/images/automatic.svg"
import bis from "../assets/images/bissell.svg"
import airbnb from "../assets/images/airbnb.svg"
import nasdaq from "../assets/images/nasdaq.svg"
import star from "../assets/images/star.png";
import Footer from "../components/Footer";
import Info1 from "../components/Info1";
function Home() {
    return ( <>
   <div className="hp">
        <div className="par">
            <div className="left">
    <h1 className="one1">Find the Best Online jobs</h1>
    <h3>It takes just one job to develop a successful relationship that can propel your career forward.</h3>
            </div>
            <div className="right">
                <div className="right1">
                    <h2 className="h22">Professionals on Upwork rate clients</h2>
                    <div className="star1">
                    <img className="star" src={star}></img>
                    <h1 className="h2">4.9/5</h1>
                    </div>
                    <div className="com"><h3 className="h3">on average from 2M+ reviews</h3></div>
                    
                </div>
               

            </div>
        </div>
        <div className="com1">
            <div className="com11">
            <h3>Trusted by</h3>
            </div>
            <div className="com11"><img src={airbnb}></img></div>
            <div className="com11"><img src={micro}></img></div>
            <div className="com11"><img src={auto}></img></div>
            <div className="com11"><img src={bis}></img></div>
            <div className="com11"><img src={nasdaq}></img></div>
        </div>
        <Info1 />
        <Footer />
   
    </div>
    
    </> );
}

export default Home;<>
</>