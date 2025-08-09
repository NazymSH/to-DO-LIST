
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './MapPage.css';

const figures = [
  {
    name: "Абай Құнанбаев",
    birthPlace: "Семей, Шығыс Қазақстан",
    lifespan: "1845–1904",
    works: "Қара сөздер, Өлеңдер",
    mentions: 120,
  },
  {
    name: "Ыбырай Алтынсарин",
    birthPlace: "Қостанай өңірі",
    lifespan: "1841–1889",
    works: "Кел, балалар, оқылық!",
    mentions: 95,
  },
  {
    name: "Шоқан Уәлиханов",
    birthPlace: "Құсмұрын, Қостанай",
    lifespan: "1835–1865",
    works: "Қырғыздар туралы жазбалар",
    mentions: 85,
  },
];

function MapPage() {
  const [selectedFigure, setSelectedFigure] = useState(figures[0]);

  return (
    <div className="history-container">
  <Link to="/Chatpage" >
       <img src="https://cdn-icons-png.freepik.com/512/3114/3114883.png" alt="" width={40} height={40} />
      </Link>

      <h1 className="main-title">📍 Қазақ тұлғалары – Тарихпен сырлас</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>📚 {figures.length}</h2>
          <p>Тұлғалар дерегі</p>
        </div>
        <div className="stat-card">
          <h2>+15%</h2>
          <p>Қызығушылық өсімі</p>
        </div>
        <div className="stat-card">
          <h2>🔎 300+</h2>
          <p>AI талдаулар</p>
        </div>
        <div className="stat-card">
          <h2>🧭 1800+</h2>
          <p>Тарихи дерек</p>
        </div>
      </div>

      <div className="selector-block">
        <label htmlFor="figures">📖 Тұлғаны таңдаңыз:</label>
        <select
          id="figures"
          onChange={(e) =>
            setSelectedFigure(figures.find(f => f.name === e.target.value))
          }
          value={selectedFigure.name}
        >
          {figures.map((f) => (
            <option key={f.name} value={f.name}>{f.name}</option>
          ))}
        </select>
      </div>

      <div className="profile-card">
        <h2>{selectedFigure.name}</h2>
        <p><strong>📍 Туған жері:</strong> {selectedFigure.birthPlace}</p>
        <p><strong>🕰 Өмір сүрген жылдары:</strong> {selectedFigure.lifespan}</p>
        <p><strong>✍️ Еңбектері:</strong> {selectedFigure.works}</p>
        <p><strong>🗣 Атаулар саны:</strong> {selectedFigure.mentions} рет</p>
        <button className="explore-btn">🔍 Зерттеуді бастау</button>
      </div>

      <div className="map-frame">
        <iframe className="map" src="https://www.google.com/maps/d/embed?mid=1MidOXeUq8btwMOu_3j1iErOsEo7-9pg&ehbc=2E312F"></iframe>
      </div>
    </div>
  );
}

export default MapPage;
