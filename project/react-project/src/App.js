import Login from './component/Login' ;
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
 import Users from './component/Users';


function App() {
  return (
    <Router>

    <div className="App">
      <div>

     
  
      </div>
      <Routes>
      <Route path='/' element={<Login/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/users' element={<Users/>} ></Route>

      </Routes>
    
    </div>

    </Router>
  );
}

export default App;
