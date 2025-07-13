import React ,{useState} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login'
import Dashboard from  './Dashboard'
import ProtectedRoute from './ProtectedRoute'
import Home from './Home';
import About from './About'
import Regist from './Regist';
import './Login.css'
import Project from './Project'
function App(){
    const[isAuth,setAuth]=useState(false)
    return(
        <div>
            <Router>
             <Routes>
                <Route path='/Project' element={
                        <ProtectedRoute isAuth={isAuth}>
                         <Project/>
                    </ProtectedRoute>
                }/> 
                
                <Route path='/about' element={
                        <ProtectedRoute isAuth={isAuth}>
                         <About/>
                    </ProtectedRoute>
                }/> 
                 <Route path="/home"element={
                        <ProtectedRoute isAuth={isAuth}>
                         <Home/>
                    </ProtectedRoute>
                }/> 
    
                <Route path="/login" element={<Login setAuth={setAuth}/>}/>
                 <Route path="/dashboard" element={
                    <ProtectedRoute isAuth={isAuth}>
                         <Dashboard/>
                    </ProtectedRoute>
                    }
                    />
              </Routes>
              </Router>


    
     
      
    

        </div>
    )
}
export default App