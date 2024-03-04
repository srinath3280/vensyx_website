import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './features/navBar/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
