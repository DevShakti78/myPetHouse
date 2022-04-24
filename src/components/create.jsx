import "./create.css"
import {Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"


export const Form=()=>{
    const [input,setInput]=useState({
        name:"",
        ciity:"",
        address:"",
        capacity:"",
        cost:"",
        rating:"",
        image:"",
        details:""
    })
       

    

    const handlechange=(e)=>{
        const {id,value} = e.target

        setInput({
            ...input,
          [id]:value
        })
            
       
    }
    console.log(input)
    const handlesubmit=()=>{

        axios.post("https://datapethome.herokuapp.com/pets",{input}).then(()=>{

        alert("Pet Home is registered")

        setInput({
            name:"",
            ciity:"",
            address:"",
            capacity:"",
            cost:"",
            rating:"",
            image:"",
            details:""
        })
        })
           
       
        
    }


    return(
        <div className="form">
          
           <h1>Register your Pet Home</h1>
          
        <input type="text" id="name"  className="input" placeholder="Enter Name" onChange={handlechange} value={input.name} />
        <input type="text" id="ciity" className="input" placeholder="Enter city" onChange={handlechange} value={input.ciity} />

        <input type="text" id="address" className="input" placeholder="Enter Address" onChange={handlechange} value={input.address} />
        <input type="text" id="capacity" className="input" placeholder="Enter Capacity" onChange={handlechange} value={input.capacity} />

        <input type="text" id="cost" className="input" placeholder="Enter Cost per day" onChange={handlechange} value={input.cost} />
        <input type="text" id="rating" className="input" placeholder="Enter Rating" onChange={handlechange} value={input.rating} />

        <input type="text" id="image" className="input" placeholder="Enter Image" onChange={handlechange} value={input.image} />
        <input type="text" id="details" className="details" placeholder="Enter details" onChange={handlechange} value={input.details} />

      <Link to="/"> <button className="submit" onClick={handlesubmit}> Submit</button></Link> 
      <br />
      <br />
      <br />
      <br />
      <br />
        </div>
    )
}