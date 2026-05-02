import React from "react";
import { useState } from "react";
const StateObject = () => {
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
                Gold: {coin.Gold} <br />
                Silver: {coin.Silver} <br />
                Platinum: {coin.Platinum} <br />
            </div>
        </div>
    );
};
export default StateObject;