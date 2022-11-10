import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import App from "../App";



const Url = "https://dog.ceo/api/breeds/list"

function BreedList() {

  //let data = stockData.map((stock) => 
  //{ return <a href="" className="ticker">{stock.symbol + " - " + stock.name  } </a> })
  

  const [post, setPost] = React.useState(null);

    React.useEffect(() => {
    axios.get(Url).then((response) => {
     setPost(response.data);

    });
  }, []);
  
  
  if (!post) return null;


  return (
    <div className="Component">

  
      <p>{post.message + " "}</p>




    </div>
  );
}

export default BreedList;
