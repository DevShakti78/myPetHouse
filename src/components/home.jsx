import "./home.css"
import {useParams} from "react-router-dom"
import {useEffect} from "react"
import axios from "axios"
import { useDispatch,useSelector } from "react-redux"
import {selectProduct} from "../redux/actions"




export const Home=()=>{
    const {id}=useParams()
    const dispatch=useDispatch()
    const selectedProduct=useSelector(store => store.selectedProduct)
  useEffect(()=>{

    axios.get(`https://datapethome.herokuapp.com/pets/${id}`).then(({data})=>{
    dispatch(selectProduct(data))

    })
  },[])
  console.log(selectedProduct)




    return (
        <div className="Home">
            <h2>About</h2>
            <img src={selectedProduct.input?.image} alt="pet" className="img_pet" />
            <div className="about">
            <p className="detail">{selectedProduct.input?.details}</p>
                 
                 </div>
                 <h2>Number of pets</h2>
                 <p className="detail">{selectedProduct.input?.capacity}</p>
                 <p className="detail">------------------</p>
                 <h2>Accept pet types</h2>
                 <p className="detail">Dog , Cats , Rabbits</p>
                 <p className="detail">------------------</p>
                 <h2>Accept pet Size</h2>
                 <p className="detail">1-5 kg , 5-10 kg , 10-20 kg , 20-40 kg , 40+ kg</p>
                 <p className="detail">------------------</p>
                 <h2>Level of adult supervision</h2>
                 <p className="detail">Pets will never be unattended</p>
                 <p className="detail">------------------</p>
                 <h2>Type of Home Stay</h2>
                 <p className="detail">House</p>
                 <p className="detail">------------------</p>
                 <h2>Outside area</h2>
                 <p className="detail">Large</p>
                 <p className="detail">------------------</p>
                 <h2>Emergency transport</h2>
                 <p className="detail">Yes</p>
                 <p className="detail">------------------</p>

        </div>
        

    )
}