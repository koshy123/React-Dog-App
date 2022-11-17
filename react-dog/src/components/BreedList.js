import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import App from "../App";




const BreedList = (props) => {
  

   console.log(props.post)

  return (
    <div className="Component">

  

<h1>{props.post + ", "}</h1>


    </div>
  );
}

export default BreedList;
