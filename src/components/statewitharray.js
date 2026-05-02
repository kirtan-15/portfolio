import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseState = () => {
    const navigate = useNavigate();
    const[favourite, setFavourite] = useState(["Apple"]);
    const [fruits,setFruits] = useState("")

    console.log(fruits);

    function updateFavorite(){
        // function updateFavorite(event){
        //     console.log(event.target.value);
        //     favourite.push(event.target.value);
        //     let arr = favourite
        //     arr.push(event.target.value);
        //     setFavourite(arr);

        //     let newArray = [...favourite]

        //     let newArr = structuredClone(favourite)
        //     console.log(event.target.value);
        //     setFavourite([...favourite,event.target.value]);
        setFavourite([...favourite,fruits]);
    }

    return(
        <div>
            <h1>Array State Management</h1>
            <input type="text" placeholder="Enter your favourite fruit" onChange={e => setFruits(e.target.value)} />
            <button onClick={updateFavorite}>Add</button>
            <div>
                <h3>Your Favourite Fruits:</h3>
                {favourite.join(", ")}
            </div>
            <div style={{marginTop: "20px"}}>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate("/projects")} style={{marginLeft: "10px"}}>Projects</button>
            </div>
        </div>
    )
}
export default UseState;