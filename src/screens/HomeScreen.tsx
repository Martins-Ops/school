import {useEffect} from 'react'
import Carousel from '../components/Carousel'
import { useDispatch, useSelector } from "react-redux";
import { setToken, setIsLoggedIn } from '../store/slices/authslice';


interface authState {
  isLoggeedin:boolean,
  token : string
}

function HomeScreen() {

const dispatch = useDispatch();

useEffect(()=>{

var isLoggedIn = localStorage.getItem('isLoggedin')
var token = localStorage.getItem('token')
dispatch(setToken(token))
dispatch((setIsLoggedIn(isLoggedIn==='true'? true:false)))

},[])

const token:any = useSelector((state:authState) => state);


  return (
    <div>
     
        <Carousel />
        <div>

        </div>
    </div>
  )
}

export default HomeScreen