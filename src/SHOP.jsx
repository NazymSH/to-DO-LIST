function SHOP(props){
  return(
   <div className="shops">
    
    <img src={props.image} alt="product"width="150" height="200" />
    <h1 >{props.name}</h1>
    <h2 >{props.price}</h2>


  

   </div>

  )
}
export default SHOP