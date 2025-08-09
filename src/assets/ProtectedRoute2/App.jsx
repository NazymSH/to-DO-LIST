import React, { useState } from "react";
import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import Login from "./Login";
import ProtedRoute from "../ProtectedRoute/ProtectedRoute";
import Home from "./Home";
import About from './About'
import Profile from './Profile'
import Project from './Project'
function App(){
    const [isAuth,setAuth]=useState(false)

return(
    <div>

        <Router>
            <Routes>
                <Route path="/project" element={<Project/>}/>
                 < Route path='/profile' element={
                   < ProtedRoute isAuth={isAuth}>
                    <Profile/>
                   </ProtedRoute>
                 }/>
                 < Route path='/about' element={
                   < ProtedRoute isAuth={isAuth}>
                    <About/>
                   </ProtedRoute>
                 }/>
                <Route path='/login' element={<Login setAuth={setAuth}/>}/>
                 < Route path='/home' element={
                   < ProtedRoute isAuth={isAuth}>
                    <Home/>
                   </ProtedRoute>
                 }/>
               
            </Routes>
        </Router>
    </div>
)}export default App