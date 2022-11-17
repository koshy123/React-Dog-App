import './App.css';
import axios from "axios";
import React from "react"
import { Routes, Route ,Link } from "react-router-dom";
import BreedList from './components/BreedList';




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
 const breeds = Object.keys(post.message)
    console.log(post.message)


   

  return (
    <div className="Component">
   <nav>
   <Link to='/components/BreedList' ><h1 className="clickPerson"> BreedList </h1></Link>

   </nav>
      <main>
   
   

      <Routes>
        <Route  path='/components/BreedList' element={<BreedList post={breeds}  />} />
        
        </Routes>

      </main>



    </div>
  );
}

export default App;
