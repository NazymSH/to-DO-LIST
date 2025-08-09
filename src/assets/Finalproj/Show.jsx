


// import { lazy } from "react";
// import { useState,useEffect} from "react";
// import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
// import './App.css'

// function Show() {
//   const navigate = useNavigate();
//   const [Laik, setLaik] = useState(false);
//   const [show, setShow] = useState(false);
//   const [activeStory, setActiveStory] = useState(null);
//    const people = [
//     {
//       name: "Al-Farabi",
//       img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZMcousfo0xwGjXGsCV3GYglB-gyfY9-Q6W0UXVJQWVXKMBkd03t856zA5QLD_UCnLPvbYFni4Zv-A-K-8oof0GQ" ,
//       quote: "Адамға ең бірінші білім емес, тәрбие берілуі керек.",
//     },
//     {
//       name: "Abai Kunanbaiuly",
//       img: "https://iaer.kz/cache/imagine/main_page_full/uploads/news/2024/08/09/66fe2fe14d058696012713.jpg",
//       quote: "Тілім бар, тілдесемін, жаным бар, сүйсемін.",
//     },
//     {
//       name: "Aliya Moldagulova",
//       img: "https://api.qalam.global/storage/media/r/1000x-/c1dba35c-b600-44dd-96a0-45ffddc308d4.webp",
//       quote: "Мен Отан үшін жанымды беруге дайынмын!",
//     },
//     {
//       name: "Napoleon",
//       img: "https://24smi.org/public/media/resize/800x-/2018/7/18/04-jrp0t0v.jpg",
//       quote: "Жеңіске жету үшін ерлік пен тәртіп керек.",
//     },
//     {
//       name: "Қаныш Сатпаев",
//       img: "https://upload.wikimedia.org/wikipedia/kk/4/41/Satpaev.jpg",
//       quote: "Ғылым – ұлттың болашағының негізі.",
//     },
//     {
//       name: "Дина Нұрпейісова",
//       img: "https://otuken.kz/wp-content/uploads/2014/05/dina-nurpeisova-278x300.jpg",
//       quote: "Күй – халықтың үні.",
//     },
//     {
//       name: "Anna Frank",
//       img: "https://wjc-dev.imgix.net/about-holocaust/assets/YgPNe5dI/anne-frank-cropped-e1542142756434.png?auto=format&fit=crop&fm=jpg&h=480&lossless=true&q=60&w=750",
//       quote: "Мен адамдардың жақсы екеніне сенемін.",
//     },
//     {
//       name: "Bauyrzhan Momyshuly",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdNh05Sx5yYmcd31uNJWTjIFUOU8-ub2ztw&s",
//       quote: "Тәртіпке бағынған құл болмайды.",
//     },
//     {
//       name: "Avram Lincoln",
//       img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Lincoln_O-17_by_Brady%2C_1860.png/250px-Lincoln_O-17_by_Brady%2C_1860.png",
//       quote: "Бостандық – халықтың жүрегі.",
//     },
//     {
//       name: "Kenesary",
//       img: "https://inkaraganda.kz/wp-content/uploads/2022/01/img7.jpg",
//       quote: "Ел үшін жан пида!",
//     },
//   ];
//    useEffect(() => {
//     if (activeStory) {
//       const timer = setTimeout(() => {
//         setActiveStory(null);
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [activeStory]);

//   return (


//     <div className="cont1">
//       <div className="div1">
//         <div className="Class1">
//           <img className="IMG1" src="https://www.talkinghistory.org/thlogo.jpg" alt="" width={140} height={73} />
          
//           <div className="home">
//             <Link to={'/Show'}>
//               <img src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_home_48px-1024.png" alt="" width={40} height={40} />
//               <span>Главная</span>
//             </Link>
//           </div>

//           <div className="search">
//             <Link to={'/Onepage'}>
//               <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-1024.png" alt="" width={40} height={40} />
//               <span>Поисковый запрос</span>
//             </Link>
//           </div>

//           <div className="inter">
//             <Link to={'/interesting'}>
//               <img src="https://i.pinimg.com/1200x/42/84/5e/42845e80c6d5215149be72f1f37f24db.jpg" alt="" width={40} height={40} />
//               <span>Интересное</span>
//             </Link>
//           </div>

//           <div className="reels">
//             <Link to={'/Reels'}>
//               <img src="https://cdn3.iconfinder.com/data/icons/instagram-latest/1000/Instagram_reels-1024.png" alt="" width={40} height={40} />
//               <span>Reels</span>
//             </Link>
//           </div>

//           <div className="message">
//             <Link to={'/Messages'}>
//               <img src="https://cdn1.iconfinder.com/data/icons/office-322/24/send-email-message-mail-letter-512.png" alt="" width={40} height={40} />
//               <span>Сообщения</span>
//             </Link>
//           </div>

//           <div className="Profil">
//             <Link to={'./'}>
//               <img src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/user4-1024.png" alt="" width={40} height={40} />
//               <span>Профиль</span>
//             </Link>
//           </div>
//           <div className="Profil">
//           <Link to={'/Chatpage'}>
//            <img src="https://www.clipartmax.com/png/full/418-4181873_our-history-icon-png.png" alt="" width={85} height={85} />
//            <span>Chatpage</span>
//           </Link>
//           </div>
//         </div>
    
//         <div className="Class2">
//           {people.map((person, index) => (
//             <div key={index} onClick={() => setActiveStory(person)}>
//               <img className="abai" src={person.img} alt={person.name} />
//               <span>{person.name}</span>
//             </div>
//           ))}
//        </div>
        

//   {activeStory && (
//         <div className="story-modal" onClick={() => setActiveStory(null)}>
//           <div className="story-content" onClick={(e) => e.stopPropagation()}>
//             <div className="story-progress">
//  <div className="progress-bar"></div>
//             </div>
//              <div className="close-button" onClick={() => setActiveStory(null)}>✕</div>
//             <img src={activeStory.img} alt={activeStory.name} className="story-img"  width={800} height={700}/>
//             <h2>{activeStory.name}</h2>
//             <p className="quote">📖 {activeStory.quote}</p>
//           </div>
//         </div> 
//       )}
      



//       </div>
//       <div className="Post">
//         <div className="container1">
//           <img className="abai1" src="https://iaer.kz/cache/imagine/main_page_full/uploads/news/2024/08/09/66fe2fe14d058696012713.jpg" alt="" width={30} height={30} />
//           <span>Abai Kunanbaiuly <br />📍Семей-Қазақстан</span>
//         </div>

//         <div className="container2">
//           <img src="https://vecher.kz/uploads/images/2022/08/image_750x_62f3c97d3de80.jpg" alt="" />
//         </div>

//         <div className="all">
//           <div className="container3">
//             <button  onClick={() => setLaik(!Laik)}>
//               {!Laik ?
//                 <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" width={30} height={30} alt="" />
//                 :
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" width={30} height={30} alt="" />
//               }
//             </button>
//             <button onClick={() => setShow(!show)}>
//               <img src="https://media.istockphoto.com/id/1001787048/vector/comment-icon-vector-icon-simple-element-illustration-comment-symbol-design-can-be-used-for.jpg?s=170667a&w=0&k=20&c=SarREg89suTl0ElaUTidIIEi8SM6S-jsLZ7NuRcf0OE=" alt="" width={30} height={30} />
//             </button>
//           </div>

//           <div>
//             <p>{Laik ? " 2901 отметок Нравится" : "2900 отметок  Нравится"}</p>
//           </div>

//           {show && (
//             <div className="comment">
//               <p>ss</p>
//               <img className="abai3" src="https://inkaraganda.kz/wp-content/uploads/2022/01/img7.jpg" alt="" width={30} height={30} />
//               <span>Kenesary</span>
//             </div>
//           )}

//           <h1>
//             Abai Kunanbaiuly: <span className="span">«Тілім бар, тілдесемін, жаным бар, сүйсемін.»  <br />
// 📚 #Абай #НақылСөздер #ҚазақПарасаты #ӨмірСүруСыры
//             </span>
//           </h1>
//      </div>
//      </div>
     



//   <div className="Post1">
//         <div className="container1">
//           <img className="abai1" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZMcousfo0xwGjXGsCV3GYglB-gyfY9-Q6W0UXVJQWVXKMBkd03t856zA5QLD_UCnLPvbYFni4Zv-A-K-8oof0GQ" alt="" width={30} height={30} />
//           <span>Әль-Фараби<br /> 📍Бағдат,Аббасидтер</span>
//         </div>
//  <div className="container2">
//           <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZMcousfo0xwGjXGsCV3GYglB-gyfY9-Q6W0UXVJQWVXKMBkd03t856zA5QLD_UCnLPvbYFni4Zv-A-K-8oof0GQ" alt="" />
//         </div> 
//  <div className="all">
//           <div className="container3">
//             <button onClick={() => setLaik(!Laik)}>
//               {!Laik ?
//                 <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" width={30} height={30} alt="" />
//                 :
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" width={30} height={30} alt="" />
//               }
//             </button>
//             <button onClick={() => setShow(!show)}>
//               <img src="https://media.istockphoto.com/id/1001787048/vector/comment-icon-vector-icon-simple-element-illustration-comment-symbol-design-can-be-used-for.jpg?s=170667a&w=0&k=20&c=SarREg89suTl0ElaUTidIIEi8SM6S-jsLZ7NuRcf0OE=" alt="" width={30} height={30} />
//             </button>
//           </div>
//     <div>
//             <p>{Laik ? "1276 отметок Нравится" : "1275 отметок  Нравится"}</p>
//             {show && (
//             <div className="comment">
//               <p>ss</p>
//               <img className="abai3" src="https://inkaraganda.kz/wp-content/uploads/2022/01/img7.jpg" alt="" width={30} height={30} />
//               <span>Kenesary</span>
//             </div>
//           )}

//           <h1>
//             Al Faraby: <span className="span">«Адамға ең бірінші білім емес, тәрбие берілуі керек. Тәрбиесіз берілген білім – адамзаттың қас жауы.»

// Әл-Фараби осыдан ғасырлар бұрын-ақ бүгінгі қоғам үшін ең маңызды шындықты айтып кеткен <br />

// Ол үшін ғылым – тек құрал. Ал адамды адам ететін – рухани биіктік, әділет, сабыр мен ұят <br />

// «Бақыт – әр адамның мақсатқа жету жолында тапқан рухани тыныштығы» деп білді. <br />

// Оның "Қайырымды қала тұрғындары" еңбегінде әрбір қоғам мүшесі – әділеттілік пен парасаттың иесі болуы керектігі жазылған. <br />

// Бізге мұра етіп қалдырған – тек кітаптар емес, ойлау мәдениеті. <br />

// 📚 #ӘлФараби #ПарасатЖолы #ҚазақФилософиясы #АқылменТәрбиелеу
//             </span>
//           </h1>
//           </div>

//         </div>
//        </div>


// <div className="Post1">
//   <div className="container1">
//     <img className="abai1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETAMFZK5UBGxOa1kNzZhZSTua5p2eMwSwbF4z5qKVNzhpY8UlkKeKnRKVVpxXMgmVnjALv5INDQi4FXRW4g5z6yKEJgEvzmhkRitEUg" alt="" width={30} height={30} />
//     <span>Әлия Молдағұлова<br />📍Қазақстан, Екінші Дүниежүзілік соғыс</span>
//   </div>
//   <div className="container2">
//     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sniper_Aliya_Nurmuhametqyzy_Moldagulova.jpg/330px-Sniper_Aliya_Nurmuhametqyzy_Moldagulova.jpg" alt="" />
//   </div>
//   <div className="all">
//     <div className="container3">
//       <button onClick={() => setLaik(!Laik)}>
//         {!Laik ? <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" width={30} height={30} alt="" /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%BEn.svg.png" width={30} height={30} alt="" />}
//       </button>
//       <button onClick={() => setShow(!show)}>
//         <img src="https://media.istockphoto.com/id/1001787048/vector/comment-icon-vector-icon.jpg" alt="" width={30} height={30} />
//       </button>
//     </div>
//     <div>
//       <p>{Laik ? "1026 отметок Нравится" : "1025 отметок Нравится"}</p>
//       {show && (
//         <div className="comment">
//           <p>Мықты батыр!</p>
//           <img className="abai3" src="https://inkaraganda.kz/wp-content/uploads/2022/01/img7.jpg" alt="" width={30} height={30} />
//           <span>Kenesary</span>
//         </div>
//       )}
//       <h1>
//         Әлия Молдағұлова: <span className="span">«Мен Отан үшін жанымды беруге дайынмын!»<br />
      
//         📚 #ҰлтБатырлары #ҚазақҚызы
//         </span>
//       </h1>
//     </div>
//   </div>
// </div>

// {/* 2. Наполеон */}
// <div className="Post1">
//   <div className="container1">
//     <img className="abai1" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg" alt="" width={30} height={30} />
//     <span>Наполеон Бонапарт<br />📍Франция, XIX ғасыр</span>
//   </div>
//   <div className="container2">
//     <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg" alt="" />
//   </div>
//   <div className="all">
//     <div className="container3">
//       <button onClick={() => setLaik(!Laik)}>
//         {!Laik ? <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" width={30} height={30} alt="" /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" width={30} height={30} alt="" />}
//       </button>
//       <button onClick={() => setShow(!show)}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="" width={30} height={30} />
//       </button>
//     </div>
//     <div>
//       <p>{Laik ? "3126 отметок Нравится" : "3125 отметок Нравится"}</p>
//       {show && (
//         <div className="comment">
//           <p>Тарихтың ұлы тұлғасы!</p>
//           <img className="abai3" src="https://inkaraganda.kz/wp-content/uploads/2022/01/img7.jpg" alt="" width={30} height={30} />
//           <span>Auezov</span>
//         </div>
//       )}
//       <h1>
//         Наполеон: <span className="span">«Жеңіске жету үшін ерлік пен тәртіп қатар жүруі керек.»<br />
     
//         📚 #Наполеон #ФранцияТарихы #ҰлыҚолбасшы
//         </span>
//       </h1>
//     </div>
//   </div>
// </div>

// {/* 3. Анна Франк */}
// <div className="Post1">
//   <div className="container1">
//     <img className="abai1" src="https://www.deutschland.de/sites/default/files/styles/image_carousel_mobile/public/media/image/aufmacher-460673641.jpg?itok=1ISORlX6" alt="" width={30} height={30} />
//     <span>Анна Франк<br />📍Нидерланды, Екінші Дүниежүзілік соғыс</span>
//   </div>
//   <div className="container2">
//     <img src="https://static.tildacdn.com/tild3938-3931-4539-a138-363730636561/_33.png" alt="" />
//   </div>
//   <div className="all">
//     <div className="container3">
//       <button onClick={() => setLaik(!Laik)}>
//         {!Laik ? <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" width={30} height={30} alt="" /> :
//          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" width={30} height={30} alt="" />}
//       </button>
//       <button onClick={() => setShow(!show)}>
//         <img src="https://media.istockphoto.com/id/1001787048/vector/comment-icon-vector-icon.jpg" alt="" width={30} height={30} />
//       </button>
//     </div>
//     <div>
//       <p>{Laik ? "1826 отметок Нравится" : "1825 отметок Нравится"}</p>
//       {show && (
//         <div className="comment">
//           <p>Қайғылы, бірақ батыл тағдыр.</p>
//           <img className="abai3" src="https://inkaraganda.kz/wp-content/uploads/2022/01/img7.jpg" alt="" width={30} height={30} />
//           <span>Tomiris</span>
//         </div>
//       )}
//       <h1>
//         Анна Франк: <span className="span">«Мен адамдардың шын мәнінде жақсы екеніне әлі де сенемін.»<br />
        
//         📚 #АннаФранк #АдамзатТарихы #Күнделік
//         </span>
//       </h1>
//     </div>
//   </div>
// </div>

// <div className="Post1">
//   <div className="container1">
//     <img className="abai1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjDVDuX0hmfa0Lt3VS_Xk6ZvqGBtjbaFY7A&s" alt="" width={30} height={30} />
//     <span>Бауыржан Момышұлы<br />📍Мәскеу, Екінші Дүниежүзілік соғыс</span>
//   </div>
//   <div className="container2">
//     <img src="https://historyrussia.org/images/06052022_Archiv_Momishuli/wr-750.jpg" alt="" />
//   </div>
//   <div className="all">
//     <div className="container3">
//       <button onClick={() => setLaik(!Laik)}>
//         {!Laik ? <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" width={30} height={30} alt="" /> :
//          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" width={30} height={30} alt="" />}
//       </button>
//       <button onClick={() => setShow(!show)}>
//         <img src="https://media.istockphoto.com/id/1001787048/vector/comment-icon-vector-icon.jpg" alt="" width={30} height={30} />
//       </button>
//     </div>
//     <div>
//       <p>{Laik ? "2226 отметок Нравится" : "2225 отметок Нравится"}</p>
//       {show && (
//         <div className="comment">
//           <p>Нағыз қазақ батыры!</p>
//           <img className="abai3" src="https://inkaraganda.kz/wp-content/uploads/2022/01/img7.jpg" alt="" width={30} height={30} />
//           <span>Aliya</span>
//         </div>
//       )}
//       <h1>
//         Бауыржан Момышұлы: <span className="span">«Тәртіпке бағынған құл болмайды.»<br />
        
//         📚 #БауыржанМомышұлы #ҰлтБатыры #Тәртіп
//         </span>
//       </h1>
//     </div>
//   </div>
// </div>
// <div className="Post1">
//   <div className="container1">
//     <img className="abai1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Y76_ogad0U9TXUb9449TQ1MQnzUsyKYR4Q&s" alt="" width={30} height={30} />
//     <span>Кенесары Қасымұлы<br />📍Қазақ хандығы, XIX ғасыр</span>
//   </div>
//   <div className="container2">
//     <img src="https://inkaraganda.kz/wp-content/uploads/2022/01/img7.jpg" alt="" />
//   </div>
//   <div className="all">
//     <div className="container3">
//       <button onClick={() => setLaik(!Laik)}>
//         {!Laik ? <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" width={30} height={30} alt="" /> : 
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" width={30} height={30} alt="" />}
//       </button>
//       <button onClick={() => setShow(!show)}>
//         <img src="https://media.istockphoto.com/id/1001787048/vector/comment-icon-vector-icon.jpg" alt="" width={30} height={30} />
//       </button>
//     </div>
//     <div>
//       <p>{Laik ? "1626 отметок Нравится" : "1625 отметок Нравится"}</p>
//       {show && (
//         <div className="comment">
//           <p>Ханға лайық тұлға!</p>
//           <img className="abai3" src="https://inkaraganda.kz/wp-content/uploads/2022/01/img7.jpg" alt="" width={30} height={30} />
//           <span>Shokan</span>
//         </div>
//       )}
//       <h1>
//         Кенесары хан: <span className="span">«Ел үшін жан пида!»<br />
//         Қазақ мемлекеттігін сақтап қалу жолында күрескен соңғы хан. <br />
//         Еркіндік үшін жанын қиған күрескер тұлға. <br />
//         📚 #Кенесары #ҚазақХандығы #Тәуелсіздік
//         </span>
//       </h1>
//     </div>
//   </div>
// </div>


        
       



{/*         
        <div className="Class2">
          {people.map((person, index) => (
            <div key={index} onClick={() => setActiveStory(person)}>
              <img className="abai" src={person.img} alt={person.name} />
              <span>{person.name}</span>
            </div>
          ))}
       </div>
        

  {activeStory && (
        <div className="story-modal" onClick={() => setActiveStory(null)}>
          <div className="story-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeStory.image} alt={activeStory.name} className="story-image" />
            <h2>{activeStory.name}</h2>
            <p className="quote">📖 {activeStory.quote}</p>
          </div>
        </div> 
      )}
       */}

      

  
//   </div>

     
//     )} 

// export default Show;