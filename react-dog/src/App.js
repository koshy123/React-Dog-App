import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from "react"
import { Routes, Route } from 'react-router-dom';
import BreedList from './components/BreedList';


const Url = "https://dog.ceo/api/breeds/image/random"

function App() {

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

      <main>
   
      <p><img src= {post.message }></img></p>

      <button handleClick={BreedList}> ButtonList</button>
      </main>



    </div>
  );
}

export default App;
