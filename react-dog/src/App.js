import './App.css';
import axios from "axios";
import React from "react"
//import { Routes, Route } from 'react-router-dom';
//import BreedList from './components/BreedList';


const Url = "https://dog.ceo/api/breeds/list/all"

function App() {

  //let data = stockData.map((stock) => 
  //{ return <a href="" className="ticker">{stock.symbol + " - " + stock.name  } </a> })
  

  const [post, setPost] = React.useState(null);

    React.useEffect(() => {
    axios.get(Url).then((response) => {
     setPost(response.data);

    });
  },  []);
  
   

  if (!post) return null;
 const props = Object.keys(post.message)
    console.log(props)
    console.log(post.message)


  return (
    <div className="Component">

      <main>
   
      <p className='breeds'>{props + " " }</p>

      </main>



    </div>
  );
}

export default App;
