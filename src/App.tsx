
import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';

import {Routes,Route,Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import ProfileForm from './screens/RegisterStudents';

function App() {
  return (
    <div className="App">
   <Header />

   <Routes>

    <Route  path='/' element={ <HomeScreen /> } /> 
    <Route  path='/login' element={ <Login /> } /> 
     <Route  path='/register' element={ <ProfileForm /> } /> 

   </Routes>

 
  
    </div>
  );
}

export default App;
