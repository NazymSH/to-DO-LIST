
import React, { useState } from 'react';
import './FeedbackList.css';

function FeedbackForm() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    rating: '',
  });
 JSON.parse(localStorage.getItem('form'))
 
  
 const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddFeedback = () => {
    if (form.title && form.description && form.rating) {
      setFeedbacks([
        ...feedbacks,
        { ...form, id: Date.now(), watched: false },
      ]);
      setForm({ title: '', description: '', rating: '' });
    }
  };

  const handleDelete = (id) => {
    setFeedbacks(feedbacks.filter((e) => e.id !== id));
  };


  return (
    <div className='container'>
    
      <h1>Student FeedBack App</h1>


      <div className='class'>
<div >
      <input className='inp'
        name="title"
        placeholder="Атыңыз"
        value={form.title}
        onChange={handleChange}
      />
</div>

<div>

  <input className='inp1'
        name="description"
        placeholder="Пікіріңізді жазыңыз"
        value={form.description}
        onChange={handleChange}
      /></div>
     

      <select className='select1' name="rating" value={form.rating} onChange={handleChange}>
        <option value="">Баға беріңіз</option>
        <option value="1-2">нашар</option>
        <option value="3-4">төмен</option>
        <option value="5-6">орташа</option>
        <option value="7-8">жақсы</option>
        <option value="9-10">керемет</option>
      </select>

      <button className='btn' onClick={handleAddFeedback}>Жіберу</button>
</div>
      {feedbacks.map((e) => (
        <div className='clas2'
          key={e.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            
          }}
        >
          <div className='box'>
            <h3>{e.title}</h3>
          <p>{e.description}</p>
          <p>Бағасы: {e.rating}</p>
          <button className='btn1' onClick={() => handleDelete(e.id)}>Жою</button>
          </div>
        </div>

      
      ))} 
      
    </div>
  );
}

export default FeedbackForm;
