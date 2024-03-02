import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './features/navBar/Navbar';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

function App() {
  // var [x,setX] = useState()
  // useEffect(()=>{
  //   axios({
  //     method:'GET',
  //     url:'http://localhost:3500/home'
  //   }).then((res)=>{
  //     setX(res.data)
  //   })
  // },[])
  // console.log(x)
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
