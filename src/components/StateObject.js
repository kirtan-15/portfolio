import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StateObject = () => {
    const navigate = useNavigate();
    const [coin,setcoins] = useState({Gold: 1000, Silver: 500 , Platinum: 300});
    console.log("coins",coin);
    function incGold() {
        setcoins({...coin,Gold: coin.Gold + 100});
    }
    function incSilver() {
        setcoins({...coin,Silver: coin.Silver + 100});
    }
    function incPlatinum() {
        setcoins({...coin,Platinum: coin.Platinum + 100});
    }
    return (
        <div>
            <h1>State Object</h1>
            <div>
                <button onClick={incGold}>Gold +100</button>
                <button onClick={incSilver}>Silver +100</button>
                <button onClick={incPlatinum}>Platinum +100</button>
            </div>
            <div>
                <h3>Current Coins:</h3>
                Gold: {coin.Gold} <br />
                Silver: {coin.Silver} <br />
                Platinum: {coin.Platinum} <br />
            </div>
            <div style={{marginTop: "20px"}}>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate("/projects")} style={{marginLeft: "10px"}}>Projects</button>
            </div>
        </div>
    );
};
export default StateObject;