
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import Show from "./Show";
// import './App.css'
import Showpoisk from "./Showpoisk"
import ChatPage from "./ChatPage"
import Messages from "./Messages";
import QuizApp from "./QuizApp";
import Onepage from "./Onepage";
import Reels from "./Reels";
import MapPage from "./MapPage";
import Login from "./Login";
import InterestingPage from "./InterestingPage";
import TrueFalseGame from "./TrueFalsegame";
import AnswePage from "./AnswerPage";
import ProtectedRoute from './ProtectedRoute'
import Book from './Book'



function App(){
    const[isAuth,setAuth]=useState(false)




    
    return(
        <Router>
            <Routes>
                <Route path="/" element={<ChatPage/>}/>
                
                <Route path="/Login" element={<Login/>}></Route>
                {/* <Route path='/Show' element={
                   
                     <Show/>
                   
                       }/> */}
                <Route path="/Chatpage" element={
                  
                   <ChatPage/>
                   
                    
                    
                    }>

                    </Route>
                <Route path="/Showpoisk" element={<Showpoisk/>}/>
                <Route path="/Messages" element={<Messages/>}></Route>
                <Route path="/Onepage" element={<Onepage/>}></Route>
                <Route path="/quizapp" element={<QuizApp/>}></Route>
                <Route path="/Reels" element={<Reels/>}></Route>
                <Route path="/MapPage" element={<MapPage/>}></Route>
                <Route path="/Book" element={<Book/>}></Route>
                <Route path="/interesting" element={<InterestingPage/>}></Route>
                <Route path="truefalse" element={<TrueFalseGame/>}></Route>
                <Route path="AnswerPage" element={<AnswePage/>}></Route>
            </Routes>
        </Router>
    )
}


export default App
