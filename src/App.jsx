// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// // //PROJECT
// import './Staticblog.css'
// import Staticblog from './Staticblog';

// import { useState } from 'react';

// function App() {
//   return (
//     <div className="STATIC">
//       <Staticblog
      
//       name="Қарапайым және талғампаз оқу нәтижесі"
      
          
//          li="басты бет"
//          li2="біз туралы"
//          li3="байланыс"

//         react="React-тың негіздері"
//         text="React-бұл интерфейстерді құруға арналаған күшті кітапхана"

//       react1="Компенеттер мен Props" 
//      text1="Компоненттер-бұл React-та қайта қолданылатын ul бөліктері"  
     
//      react2="Автор:Sharip Nazym"
//      text2="Nazym-Amjilt cyber shooll оқушысы"

//      text34="2025 Менің блогым"
// />
//         </div>
   
  

//   );
// }

// export default App;

//TASK

import './Books.css'
import Books from './Books';

import { useState } from 'react';

function App() {
  return (
    <div className='Booksclass'>
      <h6>Librarian</h6>
<Books
   image="https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/i/s/isabekov_dundefinedundefined_g_1443529_1.png"
  text3="Gauhar tas"
  text="Author:Mukhtar Auezov"
  text2="1930"


image1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreULdBym0dguY7fKzn_mXCHqVF9e-xNo3Dg&s "
  text4="Bolmagan balalyk shag"
  text1="Author:Berdibek Sokpakpaev"
  text5="1960"



image2="https://resources.cdn-kaspi.kz/img/m/p/h9d/hd1/64471369547806.jpg?format=gallery-large"
  text6="Gorgansyzdyn kuni"
  text7="Author:Mukhtar Auezov"
  text8="1917"



image3="https://resources.cdn-kaspi.kz/img/m/p/p6e/p47/40813405.jpeg?format=gallery-large"
  text9="Okpek jolayshy"
  text10="Author:Dulat Isabekov"
  text11="1974"






image4="https://m.media-amazon.com/images/I/912F83swwRL._UF1000,1000_QL80_.jpg "
  text12="Voina i mir"
  text13="Author:Lev Tolstoi"
  text14="2025"



/>



//     </div>
   )}
  export default App;

//ат пен санн
// import { useState } from 'react';
// import './App.css'

// function App(){
//   let [san,setSan]=useState(0)
//   let [text,setText]=useState('Nazym')
//  function handleClick(){setSan(san + 1)}
//  function handleChangeName(){ 
//   setText('NAZYM')
//  }
//      return(
//     <>
//      <p id='number'>{san}</p>
//      <button onClick={handleClick} >+</button>
//      {text}
//      <button onClick={handleChangeName} >Атауды өзгерту</button>
//     </>
//   )
// }
// export default App








// import { useState } from 'react';
// import './App.css'

// function App(){
//   let [san,setSan]=useState(0)
//   let [text,setText]=useState('Nazym')
//   let [items,setItems]=useState({
//     name:"Nazym",
//     hobby:"coding"
//     })
    
//     let [texts,setTexts]=useState(['NAME1','NAME2','NAME3'])
//  function handleClick(){setSan(san + 1)}
//  function handleChangeName(){ 
//   setText('NAZYM')
//  }
//  function handleAddName(){
//   setTexts([...texts,'Nazym'])
//  }
//  let [words,setWords]=useState('')
//  function handleChange(e){
//   setWords(e.target.value)
//  }
//      return(
//     <>
//      <p id='number'>{san}</p>
//      <button onClick={handleClick} >+</button>
//      {text}
//      <button onClick={handleChangeName} >Атауды өзгерту</button>
//      <ul>
// {texts.map(element=>(<li> {element}</li>))}
// <button onClick={handleAddName} >nazymdy qos</button>
// {items.hobby}
// {items.name}


//      </ul>
//      <input type="text" onChange={handleChange}/>
//     </>
//   )
// }
// export default App

 




