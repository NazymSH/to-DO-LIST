
import React, { useEffect, useRef } from 'react';
import './InterestingPage.css';

// ✅ Жаңартылған AudioPlayer
const AudioPlayer = ({ src, title }) => {
  const audioRef = useRef(null);

  
  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      {title && <p><strong>{title}</strong></p>}
      <audio ref={audioRef} controls>
        <source src={src} type="audio/mpeg" />
        Сіздің браузер бұл аудионы қолдамайды.
      </audio>
    </div>
  );
};

// 🔽 Барлық тарихи тұлғалар тізімі
const people = [
  {
    id: 'abai',
    name: "Абай Құнанбаев",
    fact: "Абай Ибраһим деген шын атымен емес, ел арасында Абай — яғни сақ, байыпты деген лақап атымен танымал болған.🧾 Ол өз заманында философиялық трактаттар жазып, өлеңдерін араб әрпімен жазған.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPM2WFVhvP4ArWIcoiqx9DqFi6B2uV2mQ5w&s",
    audio: "/abai.mp3",
    iframe: "https://www.youtube.com/embed/w6jeu5kfW4A",
    post: "Ғылым таппай мақтанба, орын таппай баптанба..."
  },
  {
    id: 'farabi',
    name: "Әл-Фараби",
    fact: "🧪 Ол музыкалық аспап — «Қанун» жасаған делінеді.🌍 Ол Бағдадта тұрған кезінде араб тілінде философиялық еңбектер жазған және өзінің туған тілінде жазба қалдырмаған",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkArrMllPoIQCdXkOlvVDt68w6lMQXlPa3A&s",
    audio: "/farabi.mp3",
    iframe :'https://www.youtube.com/embed/QXzwVkuGIzk',
    post: "Адамға ең бірінші білім емес, тәрбие берілуі керек."
  },
  {
    id: 'aliya',
    name: "Әлия Молдағұлова",
    fact: "Әлия – 78 фашисті жойған батыр қазақ мергені.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbS60IZ-GaqhvnVX7KNmdjDbGg9GmJa3bUA&s",
    audio: "/Alia.mp3",
    iframe:'https://www.youtube.com/embed/XuFV0yVMkOo',
    post: "Отан үшін жан пида!"
  },
  {
    id: 'bauyrzhan',
    name: "Бауыржан Момышұлы",
    fact: "Бауыржан – аңызға айналған батыр, жазушы әрі әскери стратег.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxAmzGbANIqddp0b_KAt7qCIOQZa3lmbOQw&s",
    audio: "/bauyrzhan.mp3",
    iframe:"https://www.youtube.com/embed/TAA6rf-hGY0" ,
    post: "Тәртіпке бағынған ел құл болмайды."
  },
  {
    id: 'kenesary',
    name: "Кенесары хан",
    fact: "Кенесары – қазақтың соңғы ханы, Ресей отарына қарсы күрескен.",
    img: "/images/kenesary.jpg",
    audio: "/kenesary.mp3",
    iframe:"https://www.youtube.com/embed/X-s1cW7HFlg",
    post: "Тәуелсіздік жолында жан аямай күрестік."
  },
  {
    id: 'napoleon',
    name: "Наполеон Бонапарт",
    fact: "Наполеон — Франция императоры, Еуропаға реформа енгізген қолбасшы.",
    img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-544266826.jpg?crop=1xw:0.5625xh;0,0.0994xh",
    audio: "/Napoleon.mp3",
    post: "Мүмкін емес — ақымақтың сөздігіне ғана тән сөз."
  },
  {
    id: 'anna',
    name: "Анна Франк",
    fact: "Анна Франк — Холокост кезінде күнделік жазған еврей қыз.",
    img: "/images/anna.jpg",
    audio: "/audio/anna.mp3",
    post: "Адам табиғатынан жақсы, мен соған сенемін."
  },
  {
    id: 'shokan',
    name: "Шоқан Уәлиханов",
    fact: "Шоқан – қазақтың тұңғыш ағартушысы, ғалым және саяхатшы.",
    img: "/images/shokan.jpg",
    audio: "/audio/shokan.mp3",
    post: "Ғылым – адамзаттың шамшырағы."
  },
  {
    id: 'ybyrai',
    name: "Ыбырай Алтынсарин",
    fact: "Ыбырай – қазақ даласына алғашқы мектеп ашқан ұстаз.",
    img: "/images/ybyrai.jpg",
    audio: "/audio/ybyrai.mp3",
    post: "Кел, балалар, оқылық!"
  },
  {
    id: 'almaz',
    name: "Алмас батыр (ойдан шығарылған мысал)",
    fact: "Алмас – жас өрендерге үлгі болатын ойдан шығарылған тарихи батыр.",
    img: "/images/almas.jpg",
    audio: "/audio/almas.mp3",
    post: "Елің үшін қызмет ету – ең үлкен ерлік."
  },
];

export default function InterestingPage() {
  return (

   
    <div className="interesting-container">
      




      
      {people.map((person) => (
        
        
        <div className='interesperson'
         key={person.id}> 
          <div className={`card person-${person.id}`}>
            <h2>{person.name}</h2>
            <p><strong>📘 Қызықты факт:</strong> {person.fact}</p>

            <div className="media-block">
              <AudioPlayer src={person.audio} title={person.name} />

              {person.iframe && (
                <iframe
                  src={person.iframe}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={person.name}
                ></iframe>
              )}

              <div className="insta-post">
                <img src={person.img} alt={person.name} />
                <p><strong>@{person.id}_official</strong> {person.post}</p>
              </div>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  
  );
}
