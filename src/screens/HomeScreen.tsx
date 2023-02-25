import {useEffect} from 'react'
import Carousel from '../components/Carousel'
import { useDispatch } from "react-redux";


function HomeScreen() {

const dispatch = useDispatch();

  return (
    <div>
        <Carousel />
    </div>
  )
}

export default HomeScreen