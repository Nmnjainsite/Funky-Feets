import React from "react"
import {useEffect,useState} from "react"
import axios from 'axios';
import {Link} from 'react-router-dom'
export default function Home (){
    const [data,setData] = useState([]);
    const [loader,setLoader] = useState(true);
  
  
useEffect(() => {
    (async() => {  try {
      const getData = await axios.get("/api/products")
            setLoader(false);
            setData(getData.data.products);
          ;
       } catch (error) {
        console.error("error occured")
       }})()
  }, []);

//   useEffect(() => {
//     (async() => {  
//         try {
//       const getCategory = await axios.get("/api/categories")
//             setLoader(false);
//             setData(getCategory.data.categories);
//        } catch (error) {
//         console.error("error occured")
//        }})()
//   }, []);


    return (
       <div className="App">
           <h1> Showcase Products </h1>
      {loader && <div>Getting Data...</div>}

     
      <Link to="/Products">Product </Link> 

      <div> {data && data.map(  (data)  => <li key={data.name}>
      <img src={data.img} key={data.img} style={{width:"10%"}}></img>
        {data.name }
        {data.price} 
      
      </li>)} </div> 

       </div>
    )
}

