import React from "react"
import {useEffect,useState} from "react"
import axios from 'axios';
import "./product.css";
import { BsFillCartFill,BsFillHeartFill,BsGithub,BsTwitter,BsInstagram,BsLinkedin } from "react-icons/bs";
import { BiRupee } from "react-icons/bi"
import {Link} from "react-router-dom"
export default function Product (){
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

 


  const newLocal = <div className="title-container">
    <h1 className="title">Funky Feet</h1>


    <input className="input" placeholder="serach your category or brand"></input>

    <div className="badge-icons">
      <BsFillCartFill></BsFillCartFill>
      <div className="number">2</div>
    </div>
    <div className="badge-icons-2">
      <BsFillHeartFill></BsFillHeartFill>
      <div className="number-2">2</div>
    </div>

    <div className="right-nav">
      Hi,User
      <button className="btn-right">Login</button>
    </div>
  </div>;
    return (
       <div className="App">

        {newLocal}
    
       
      {loader && <div>Getting Data...</div>} 
     
         <div className="left-bar">
          <p className="filter-nav">Filter</p>
          <label><input type="radio"/>Men</label>
          <label><input  type="radio"/>Women</label>
          <label><input  type="radio"/>Kids</label>
          <hr style={{width:"100%"}}/>
          <div className="filter-nav">
           <p>Producer</p>
           <label><input type="checkbox"/>adidas</label>
           <label><input type="checkbox"/>Air Max</label>
           <label><input type="checkbox"/>Puma</label>
           <label><input type="checkbox"/>Red Chief</label>
           <hr style={{width:"100%"}}/>
          </div>
          <div className="filter-nav">
            <p>
              Style
            </p>
            <label><input type="checkbox"/>casuals</label>
           <label><input type="checkbox"/>sneakers</label>
           <label><input type="checkbox"/>sports</label>
           <label><input type="checkbox"/>formal</label>
           <label><input type="checkbox"/>crocs</label>
          </div>
          <hr style={{width:"100%"}}/>
          <div className="filter-nav">
            <p>
            Discount
            </p>
            <label><input type="checkbox"/>10% and above</label>
           <label><input type="checkbox"/>20% and above</label>
           <label><input type="checkbox"/>30% and above</label>
           <label><input type="checkbox"/>40% and above</label>
           <label><input type="checkbox"/>50% and above</label>
          </div>
          <hr style={{width:"100%"}}/>
         </div>
       

         <div className="product-container"> {data && data.map(  (data)  => 
         <li key={data.name} className="card-container">
          <div className="img-box"><span className="new-tag">Best Seller </span><BsFillHeartFill className="card-wishlist-emoji"></BsFillHeartFill>
          <img src={data.img} key={data.img} className="product-img"></img></div>
     
        <h3>{data.name }</h3>
        <p style={{color:"grey"}}>{data.description}</p> 
        <p><span style={{color:"red",fontSize:"1.3rem"}}><BiRupee></BiRupee> {data.price}</span>
         <span style={{textDecoration:"line-through",margin:"0.4rem"}}>Rs.{data.original_price} 
         </span> 
        <span >({data.discount} OFF)</span>
        </p>
        <button className="product-cart-button">Add To Cart <BsFillCartFill></BsFillCartFill></button>
  
           </li>
         )}
              </div>
     
         <Link to="/home">Home</Link>
       
       </div>
    )
}

