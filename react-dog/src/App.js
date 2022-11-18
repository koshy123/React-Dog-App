import './App.css';
import axios from "axios";
import React, {useState, useEffect} from "react"
import { Routes, Route ,Link } from "react-router-dom";
import BreedList from './components/BreedList';
import RandomDogs from './components/RandomDogs';


const Url2 = "https://dog.ceo/api/breeds/image/random"

const Url = "https://dog.ceo/api/breeds/list/all"

function App() {

  //let data = stockData.map((stock) => 
  //{ return <a href="" className="ticker">{stock.symbol + " - " + stock.name  } </a> })
  

  const [post, setPost] = useState(null);
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    axios.get(Url).then((response) => {
     setPost(response.data);
    });

    axios.get(Url2).then((response) => {
      setBreed(response.data);
     });

  },  []);
  if (!post) return null;



 const breeds = Object.keys(post.message)



  return (
    <div className="Component">
   <nav>   
    <Link to='/' ><h1 className="mainPage"> Main Page </h1></Link>

   <Link to='/components/BreedList' ><h1 className="clickPerson"> Breed List </h1></Link>
   <Link to='/components/RandomDogs'  ><h1 className="clickPerson"> Dog Pics </h1></Link>


   </nav>
      <main>
   
   

      <Routes>
       <Route  path='/' element={<BreedList/>} />
        <Route  path='/components/RandomDogs' element={<RandomDogs pics={breed}  />} />
        <Route  path='/components/BreedList' element={<BreedList post={breeds}  />} />


        </Routes>

      </main>



    </div>
  );
}

export default App;
