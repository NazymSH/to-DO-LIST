function Staticblog(props){
       return( 
  <div className="header"> 

<div className="class">
       <h1 className="text43">Менің блогым</h1>
 <p className="name">{props.name}</p> 
</div>   


       <div className="ull">
       <ul className="ull2">
         <li>{props.li}</li>
         <li>{props.li2}</li>
         <li>{props.li3}</li>
       </ul>
        </div>

        <div className="react">
           
           <h1 className="react1">{props.react}</h1>
             <p className="text">{props.text}</p>
        </div>


            <div className="react">
           <h1 className="react1">{props.react1}</h1>
            <p className="text">{props.text1}</p>
        </div>

            <div className="react">
           <h1 className="react2">{props.react2}</h1>
            <p className="text">{props.text1}</p>
        </div>
      <div className="footer"> 
         <h1>{props.text34}</h1>
      </div>



     </div>


)
}

export default Staticblog   