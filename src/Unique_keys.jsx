import React, { useEffect, useState } from 'react';
import './Unique_keys.css';

function Unique_keys() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');
  const[effect,setEffect]=useState('')

   useEffect(()=>{
     if(effect==='add'){
       alert(' қосу')
     }
     else if(effect==='toggle'){
      alert('мән ozgerdi')
     }
     else if(effect==='delete')
      alert('мән жойылды')
    },[tasks])
  

  const handelRemoveIndex = (id) => {
    setTasks(tasks.filter((_, index) => index !== id));
    setEffect('delete');
      }
useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (storedTasks) {
    setTasks(storedTasks);
  }
}, []);
  return (
    <div className="container1">
      <div className="sidebar">
        <div className="profile">
          <img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="user" className="avatar" />
          <span>Денис</span>
        </div>
        <button className="add-task-btn">+ Добавить задачу</button>
        <ul className="menu">
          <li>Поиск</li>
          <li>Входящие</li>
          <li className="SEGOD">Сегодня</li>
          <li>Предстоящее</li>
          <li>Фильтры и метки</li>
        </ul>
        <h4>Мои проекты</h4>
        <ul className="menu">
          <li># Фитнес</li>
          <li># Покупки</li>
          <li># Встречи и записи</li>
        </ul>
        <h4>Команда</h4>
        <ul className="menu">
          <li># Новый бренд</li>
          <li># Обновление сайта</li>
          <li># Дорожная карта продукта</li>
          <li># Повестка встречи</li>
        </ul>
      </div>

      <div className="content">
        <h2>Сегодня</h2>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Жаңа тапсырма..."
        />
        <button className='btn1'
          onClick={() => {
            setEffect('add')
            setText(value);
            setTasks([...tasks, { task: value, completed: false}]);
               localStorage.setItem('tasks',JSON.stringify(tasks))
          }}
        >
          Қосу
        </button>

        <ul className="task-list">
          {tasks.map((n, index) => (
            <li key={index} className={n.completed ? 'completed' : ''}>
              <span>{n.task}</span>
              <div className="task-actions">
                <button className='btn2'
                  onClick={() =>{
                    setEffect('toggle')
                    setTasks(
                      tasks.map((task, i) =>
                        i === index ? { ...task, completed: !task.completed } : task
                      )
                    )
                  }}
                > 
                  {n.completed  ? 'Қайта бастау' : 'Аяқталды' }
                </button>
                <button className='btn' onClick={() =>   handelRemoveIndex(index) }>Жою</button>
              
              </div>
            </li>
          ))}
          
        </ul>
        <div className='Filter-box'>
        <button onClick={()=>setFilter('all')}>all</button>
           <button onClick={()=>setFilter('complete')}>complete</button>
              <button onClick={()=>setFilter('incomplete')}>incomplete

              </button></div>
      </div>

    </div>
  );
}

export default Unique_keys;
