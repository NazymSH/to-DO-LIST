function Profilecard(props){
    return(
      <div className="name"> 
      <img className="IMG" src={props.image} alt="profile" width="150" height="150" /> <h1>Profilecard</h1>
      
        <h2 className="name1">{props.name}</h2>
       
        <p className="text">{props.bio}</p>
      </div>

    )
}
export default Profilecard