function Books(props){
       return( 
        <div className="Header">
            <div className="class">
               
        <img className="image"  src={props.image} alt=""/>
        <h1>{props.text3}</h1>
        <p>{props.text}</p>
        <p>{props.text2}</p>
           </div>

<div className="class">
        <img className="image"  src={props.image1} alt=""/>
        <h1>{props.text4}</h1>
        <p>{props.text1}</p>
        <p>{props.text5}</p>
           </div>


<div className="class">
        <img className="image"  src={props.image2} alt=""/>
        <h1>{props.text6}</h1>
        <p>{props.text7}</p>
        <p>{props.text8}</p>
           </div>

<div className="class">
        <img className="image"  src={props.image3} alt=""/>
        <h1>{props.text9}</h1>
        <p>{props.text10}</p>
        <p>{props.text11}</p>
 </div>




<div className="class">
        <img className="image"  src={props.image4} alt=""/>
        <h1>{props.text12}</h1>
        <p>{props.text13}</p>
        <p>{props.text14}</p>


</div>
          
</div>
       )
    }
    export default Books