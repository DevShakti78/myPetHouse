import "./nv.css"
import {useState} from "react"
import { useDispatch } from "react-redux"
import { setProducts } from "../redux/actions"
import axios from "axios"

export const Navbar=()=>{
    const [input , setInput] =useState('')
    const dispatch=useDispatch()
    const onSearch = () => {
        axios.get(`https://datapethome.herokuapp.com/pets?input.ciity=${input}`).then(({data})=>{
           dispatch(setProducts(data))
        })
    }


    return (
        <div className="navbar">
            
            <input type="text" value={input} id="city" placeholder="search..." onChange={(e)=>setInput(e.target.value)}></input>
            <button className="filter" onClick={onSearch}>Search</button>
            
        </div>
    )
}