import React, { useState } from "react";
import "./Book.css";
import { Link } from "react-router-dom";
import img from '/public/ChatGPT Image 6 авг. 2025 г., 21_53_28.png'
function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Abai joly 1",
      author: "Mukhtar Auezov",
      cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJXkdGcA0ffRPoqIfSLSUZQu8QSZkbRowPw&s",
      pdfUrl: "https://drive.google.com/file/d/1mG6xTddv6X3hX4-IB_WSGbx1eEfWfvN3/preview",
      content: "Abai turaly"
    },
    {
      id: 2,
      title: "Аbai joly 2",
      author: "Mukhtar Auezov",
      cover: "https://cdn.kitap.kz/storage/book/97564d9f4e2a7d9a140a8d2c75936bad.png",
      pdfUrl:"https://drive.google.com/file/d/1BRKCt4i6xztOGCNUNusURd5a6tkIDyUf/preview",
      content: "Abai turaly"
    },
{
  id: 3,
  title: "Abai joly 3",
  author: "Mukhtar Auezov",
  cover: "https://adebiportal.kz/storage/upload/iblock/a71/a71434595e5f4aa8e1ce3de2cec0c511.jpg",
  pdfUrl: "https://drive.google.com/file/d/1wb-soknJxe8ecctWnt0NHzGlISDQ78V5/preview",
   content:"Abai Turaly"
 

},
{
  id: 4,
  title: "Abai shygarmalaryna   tekstologiasyjaiynda",
  author: "Kaiym Mukhametzhanov",
  cover: "https://nabrk.kz/FileStore/dataFiles/cc/30/1033532/content/cover.png?time=1754508699117&key=32cacb4b98a48a51a1c4001fb45880b4",
  pdfUrl: "https://drive.google.com/file/d/1o1XMmTnT5F0RkTxaH2Au5QBfuEsyhJip/preview",
   content:"Abai Turaly"
 

},
{
  id: 5,
  title: "Alash adebiettanuy",
  author: "Aigul Isymagova",
  cover: "https://nabrk.kz/FileStore/dataFiles/2f/25/1039163/content/cover.png?time=1754508699124&key=cd507a355ffc56f1ac92e70c921b8a76",
  pdfUrl: "https://drive.google.com/file/d/1o1XMmTnT5F0RkTxaH2Au5QBfuEsyhJip/preview",
   content:"Alash"
 

},

{
  id: 6,
  title: "Moskva ushin shaikas",
  author: "Bauyrzhan Momyshuly",
  cover: "https://cdn.kitap.kz/storage/book/12fc4730f03a2d0d655c64a99b9e4592.jpg",
  pdfUrl: "https://drive.google.com/file/d/1lYtXg2Ic4Nq7MwmUS4-ZrJ1rf_iTrGP5/preview",
   content:"Shaikas"
 

},
{
  id: 7,
  title: "Alash adebiettanuy",
  author: "Aigul Isymagova",
  cover: "https://nabrk.kz/FileStore/dataFiles/2f/25/1039163/content/cover.png?time=1754508699124&key=cd507a355ffc56f1ac92e70c921b8a76",
  pdfUrl: "https://drive.google.com/file/d/1o1XMmTnT5F0RkTxaH2Au5QBfuEsyhJip/preview",
   content:"Alash"
},
{
  id: 8,
  title: "Virtualdy korme",
  author: "Äl‑Farabi atyndaǵy kitapkhanasy",
  cover: "https://elibrary.kaznu.kz/wp-content/uploads/2020/10/geofak-skrin.png",
  pdfUrl: "https://drive.google.com/file/d/1lrsmQ924Ja45Jwr8hKbuyPW8HYOdJGQ7/preview",
   content:""
},
{
  id: 9,
  title: "Ybyrai Altynsarin",
  author: "Ybyrai Altynsarin turaly",
  cover: "https://adebiportal.kz/storage/tmp/resize/books/1200_0_d2408b62ed42e7f86faa0fc744be98ee.jpg",
  pdfUrl: "https://drive.google.com/file/d/1Ozqrb-4ZhavYNKTwRirQ7zqz9aJaZov0/preview",
   content:"Y.Altynsarin"
},
{
  id: "10",
  title: "Bauyrzhan Momyshuly",
  author: "Ushkan uia",
  cover: "https://kitapal.kz/media/7897/photo5334982507512312071.png",
  pdfUrl: "https://drive.google.com/file/d/1csoj5ZzUBt-zT1jw7120p0OCwZazgJwR/preview",
   content:""
},
{
  id: "11",
  title: "Abai Kunanbaev",
  author: "Kara cozder",
  cover: "https://kitapal.kz/media/2023/06/19/photo_5224695817594587249_y.jpg",
  pdfUrl: "https://drive.google.com/file/d/19zTwrnFoOxTkDgvb10LfQwyGVxrTg5Pz/preview",
   content:""
},
{
  id: "12",
  title: "",
  author: "Bauyrzhan Momyshuly turaly",
  cover: "https://ztgzt.kz/uploads/resized-images/2021/12/750-momyshuly-cmyk.jpg",
  pdfUrl: "https://drive.google.com/file/d/19zTwrnFoOxTkDgvb10LfQwyGVxrTg5Pz/preview",
   content:""
},
{
  id: "13",
  title: "",
  author: "Mukhtar Auezov turaly",
  cover: "https://semeylib.kz/wp-content/uploads/2013/05/s01.jpg",
  pdfUrl: "https://drive.google.com/file/d/17N8VckzFEkwp6Ff1LFc6STQxJWF1AYN7/preview",
   content:""
},

{
  id: "13",
  title: "",
  author: "Dnevnik Дневник Анны Франк ",
  cover: "https://semeylib.kz/wp-content/uploads/2013/05/s01.jpg",
  pdfUrl: "https://drive.google.com/file/d/1gO_ACbnOJSkh5cPK12wwm5myruz_qwpr/preview",
   content:""
},


  ]);

  const [selectedBook, setSelectedBook] = useState(null);
 

  const handleAddBook = () => {
    if (!newBook.title || !newBook.author || !newBook.cover || !newBook.content) return;

    const newBookWithId = {
      ...newBook,
      id: books.length + 1
    };

    setBooks([...books, newBookWithId]);
    
  };


  return (
    <div className="app">
     
     
      {!selectedBook ? (

        <>
          <Link to="/Chatpage" >
       <img src="https://cdn-icons-png.freepik.com/512/3114/3114883.png" alt="" width={40} height={40} />
      </Link>
        
        
         <div className="booksall">
          
          <img  src={img} alt="" />
      <div className="bottom-left"> <h3>Тұлғалар әлеміне тереңірек үңілгіңіз келсе – бұл бөлім сіз үшін! Мұнда әр тұлға туралы жазылған танымдық кітаптар мен олардың өз шығармалары ұсынылады.</h3></div>
  <div className="top-left"> <img src="https://www.nicepng.com/png/full/6-61578_open-book-history-clipart.png" alt=""/><span>BOOKS</span> </div>
      </div>
      <div className="new-arrivals-header">
  <img
    src="https://cdn-icons-png.flaticon.com/512/5988/5988242.png"
    alt=""
    width={50}
    height={50}
  />
  <span>New arrivals</span>
</div>
          <div className="book-list">
            {books.map((book) => (
              <div key={book.id} className="book-card" onClick={() => setSelectedBook(book)}>
                <img src={book.cover} alt={book.title} width={150} height={250}/>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <h5>{book.content}</h5>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="book-reader">
          <button onClick={() => setSelectedBook(null)}>← Артқа</button>

          <h2>{selectedBook.title}</h2>
          <p><i>{selectedBook.author}</i></p>
          
          <div className="content-box">
            <iframe 
  src={selectedBook.pdfUrl} width={800} height={800}
></iframe>
     
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
