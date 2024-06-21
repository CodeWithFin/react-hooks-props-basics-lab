import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <h3>Links</h3>
      <a href ={props.github}>{props.github}</a>
     <a href ={props.linkedIn}>{props.linkedIn}</a>
      
        
      
      
      
      
    </div>
  );
}

export default About;
