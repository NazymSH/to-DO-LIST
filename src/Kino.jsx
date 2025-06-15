import React, { useEffect, useState } from 'react';
import './Kino.css';

function Kino() {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    poster: '',
  });
const[effect,setEffect]=useState('')
useEffect(()=>{
  if(effect==='add'){
  alert('қосылды')}
else if(effect==='delete'){
  alert('Өшірілді')
}
else if(effect==='toggle'){
  alert('күйі өзгерді')
}
},[movies])
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddMovie = () => {
    if (form.title && form.description && form.poster) {
      setMovies([
        ...movies,
        { ...form, id: Date.now(), watched: false },
      ]);
      setForm({ title: '', description: '', poster: '' });
      setEffect('add')
    }
  };

  const handleDelete = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
    setEffect('delete')
  };

  const handleToggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      )
    );
    setEffect('toggle')
  };

  return (
    <div>
      <h1>🎬 Movie App</h1>

      <input
        name="title"
        placeholder="Название"
        value={form.title}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Описание"
        value={form.description}
        onChange={handleChange}
      />

      <input
        name="poster"
        placeholder="Ссылка на постер"
        value={form.poster}
        onChange={handleChange}
      />

      <button onClick={handleAddMovie}>Добавить фильм</button>

      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: movie.watched ? 'red' : 'white',
          }}
        >
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          {movie.poster && (
            <img
              src={movie.poster}
              alt="Постер"
              style={{ width: '150px' }}
            />
          )}
          <div>
            <button onClick={() => handleDelete(movie.id)}>Удалить</button>
            <button onClick={() => handleToggleWatched(movie.id)}>
              {movie.watched
                ? 'Отметить как не просмотренный'
                : 'Отметить как просмотренный'}
            </button>
          </div>
          <div></div>
        </div>
      ))}




      
    </div>
  );
}

export default Kino;


