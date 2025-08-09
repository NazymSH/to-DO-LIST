import React, { useState } from "react";
import './Reels.css';

const reelsData = [
  {
    id: 1,
    name: "Абай Құнанбаев",
    video: "https://www.youtube.com/embed/8O0rq3UZbVI",
    type: "youtube",
    caption: "Ғылым таппай мақтанба...",
    likes: 45,
    comments: [],
  },
  {
    id: 2,
    name: "Әл-Фараби",
    video: "/videos/farabi.mp4",
    type: "mp4",
    caption: "Адамға ең бірінші білім керек.",
    likes: 28,
    comments: [],
  },
  {
    id: 3,
    name: "Әлия Молдағұлова",
    video: "/videos/aliya.mp4",
    type: "mp4",
    caption: "Мен халқым үшін жанымды берем!",
    likes: 70,
    comments: [],
  },
];

function Reels() {
  const [data, setData] = useState(reelsData);

  const likeReel = (id) => {
    setData((prev) =>
      prev.map((reel) =>
        reel.id === id ? { ...reel, likes: reel.likes + 1 } : reel
      )
    );
  };

  return (
    <div className="reels-container">
      {data.map((reel) => (
        <div className="reel" key={reel.id}>
          {reel.type === "youtube" ? (
            <div className="iframe-wrapper">
              <iframe
                src={reel.video}
                title={reel.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <video src={reel.video} controls autoPlay muted loop />
          )}

          <div className="reel-info">
            <h3>{reel.name}</h3>
            <p className="caption">📖 {reel.caption}</p>
            <div className="actions">
              <button onClick={() => likeReel(reel.id)}>❤️ {reel.likes}</button>
              <button>💬 {reel.comments.length} пікір</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reels;
