import "./table.css"
import {Link} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import {useEffect} from "react"
import axios from "axios"
import {setProducts} from "../redux/actions"


export const Table=()=>{
    const dispatch=useDispatch()
     const products=useSelector(store => store.products)
     
    

    useEffect(()=>{
    axios.get("https://datapethome.herokuapp.com/pets").then(({data})=>{
        dispatch(setProducts(data))
    })

    },[])

   

    

 const sort = (by, ascending=true)=>{
     const sortOrder = ascending ? 'asc' : 'desc'
     axios.get(`http://localhost:8080/pets?_sort=input.${by}&_order=${sortOrder}`).then(({data})=>{
       dispatch(setProducts(data))
     })
 }
    



    return(
        <>
        
        <button onClick={() => sort('cost')} className="sort_btn">sort by cost aesc</button>
        <button  onClick={() => sort('cost',false)} className="sort_btn">sort by cost desc</button>
        <Link to="/form" ><button className="btn" >Register</button></Link>
        <button  onClick={() => sort('rating')} className="sort_btn">sort by rating aesc</button>
        <button  onClick={() => sort('rating',false)} className="sort_btn">sort by rating desc</button>
        
        <div className="head">
                <p style={{fontSize:"20px",fontWeight:"500"}}>Id</p>
                <p className="heading">Name</p>
                <p className="heading">City</p>
                <p className="heading">Address</p>
                <p className="heading">Cost</p>
                <p className="heading">Rating</p>
                <p className="heading">Image</p>
                
            </div>
       
             
                  
                    {
                        products.map((e)=>{
                            console.log(e)
                            return (
                                <>
                                <Link to ={`/petdetails/${e.id}`} >
                                <div className="border" key={e.id}>
            
                                <div className="table">{e.id}</div>
                                <div className="table">{e.input.name}</div>
                                <div className="table">{e.input.ciity}</div>
                                <div className="table">{e.input.address}</div>
                                <div className="table">{e.input.cost}</div>
                                <div className="table">{e.input.rating}</div>
                                <div className="table" style={{marginLeft:"30px"}}><img src={e.input.image} /></div>
                                
                                </div>
                                </Link>
                                <hr/>
                                </>
                                
                            )
                        })
                    }
                   
               
            
            

            
        
        </>

    )
 }
