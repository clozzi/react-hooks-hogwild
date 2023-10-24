import React, { useState } from "react";

function Pig({ name, image, specialty, weight, greased, medal }) {
    const [moreInfo, setMoreInfo] = useState("")

    function handleMoreInfo() {
        if (moreInfo === "") {
            setMoreInfo(
                <div>
                    <p>{specialty}</p>
                    <p>I weigh {weight} pounds!</p>
                    <p>Greased status: {greased.toString()}</p>
                    <p>I've earned a {medal} medal!</p>
                </div>
            )
        } if (moreInfo !== "") {
            setMoreInfo("")
        } 
    }

    return (
        <div className="card">
            <div className="image">
                <img src={image}></img>
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
                <div className="ui bottom attached button" onClick={handleMoreInfo}>
                    <i className="add icon"></i>More Info
                        <div className="extras">
                            {moreInfo}
                        </div>
                </div>                
            </div>
        </div>

    )
}

export default Pig