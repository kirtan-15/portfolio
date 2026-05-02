import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Counter = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    function addTwo() {
        setCount(count + 2);
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h2>Counter: {count}</h2>
            <button onClick={addTwo}>Add 2</button>
            <div style={{marginTop: "20px"}}>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate("/projects")} style={{marginLeft: "10px"}}>Projects</button>
            </div>
        </div>
    );
};

export default Counter;
