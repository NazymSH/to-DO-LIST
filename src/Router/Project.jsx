import React from 'react';
import { useNavigate } from "react-router-dom";
import img from '../assets/Снимок экрана 2025-06-14 150814.png';
import img1 from '../assets/Снимок экрана 2025-06-29 102040.png';
import img2 from '../assets/Снимок экрана 2025-06-29 102238.png';
import img3 from '../assets/Снимок экрана 2025-07-03 212657.png';
import img4 from '../assets/Снимок экрана 2025-07-03 212604.png';
import img5 from '../assets/Снимок экрана 2025-07-03 211959.png';
import img6 from '../assets/Снимок экрана 2025-07-03 212358.png';
import img7 from '../assets/Снимок экрана 2025-06-08 175839.png'

function Project() {
  
const navigate=useNavigate()
  return (
    <div className="project-container">
      <h1>My Project</h1>
      <div className="project-gallery">
        <div className='img1'>
          <img src={img} alt="" />
        <h6>Movie app</h6>
         <button className='btn' onClick={()=>navigate('/kino')}>Толыгырак</button>
        </div>
        <div className='img2'> 
           <img src={img1} alt="" />
             <h6>Fitnes</h6>
        </div>
      <div>
        <img src={img2} alt="" />
        <h6>Kaspi store</h6>
      </div>
      <div>
        <img  src={img3} alt="" />
        <h6>weather</h6>
      </div>
        <div>
          <img src={img4} alt="" />
          <h6>StopWatch</h6>
        </div>
        <div>
          <img src={img5} alt="" />
          <h6>To-do list</h6>
        </div>
        <div>
  <img src={img6} alt="" />
    <h6>online store</h6>
        </div>
        <div>
          <img src={img7} alt="" />
          <h6>
   <h6>FeedBack</h6>
          </h6>
        </div>
      </div> <button className='btn' onClick={()=>navigate('/profile')}>Home</button>
    </div>
  );
}

export default Project;
