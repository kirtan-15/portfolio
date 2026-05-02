import React from "react";
import {useNavigate, NavLink} from "react-router-dom";

const projectList = [
  {
    name: "Personal Portfolio",
    tech: "React, CSS",
    desc: "Responsive SPA showcasing my skills and projects.",
    path: "/"
  },
  {
    name: "Counter App",
    tech: "React, useState",
    desc: "Simple counter application demonstrating state management.",
    path: "/counter"
  },
  {
    name: "Array State Management",
    tech: "React, useState",
    desc: "Fruit list management using array state operations.",
    path: "/array-state"
  },
  {
    name: "Object State Management", 
    tech: "React, useState",
    desc: "Coin collection manager using object state operations.",
    path: "/object-state"
  },
  {
    name: "Live Search",
    tech: "React, useEffect",
    desc: "Real-time country search with filtering functionality.",
    path: "/live-search"
  },
  {
    name: "Weather Dashboard",
    tech: "React, OpenWeather API",
    desc: "Live weather updates for any city with geolocation support.",
    path: "/weather"
  },
  {
    name: "Form Validation",
    tech: "React, useState",
    desc: "Interactive form with validation and state management.",
    path: "/form"
  }
];

const Projects = () => {
    const navigate = useNavigate();
    return(
        <div className="projects">
            <h2>Projects</h2>
            <div>
              {projectList.map((p)=> (
                <NavLink key={p.name} to={p.path} style={{textDecoration:"none", color:"inherit"}}>
                  <div className="section" style={{textAlign:"left", cursor:"pointer", border:"1px solid #ddd", margin:"10px 0", padding:"15px", borderRadius:"8px"}}>
                    <h3>{p.name}</h3>
                    <p><strong>Tech Stack:</strong> {p.tech}</p>
                    <p>{p.desc}</p>
                  </div>
                </NavLink>
              ))}
            </div>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate(1)}>Forward</button>
        </div>
    )
}
export default Projects;