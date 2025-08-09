import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Messages.css';
import { Link } from 'react-router-dom';

const peoples = {
  Abay: {
    name: 'Абай Құнанбайұлы',
    currentPrompt:
      'Абай Құнанбайұлы секілді жауап бер. Артық сөз қоспа, терең ойлы, нақыл сөздермен қысқа да нұсқа жауап бер.',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTRZVWNUnK6kzzzFLRlKzm5_e6EQMFbw9W0xjioQ0X8ifYVW90F4W0TodkxY_2uiMRIKeEfX6wMec9Sc_XclkDroQ',
  },
  Ybyrai: {
    name: 'Ыбырай Алтынсарин',
    currentPrompt:
      'Ыбырай Алтынсарин секілді жауап бер. Ағартушылық, тәрбиелік мәні бар, сабырлы әрі жылы үнмен жауап бер.',
    image: 'https://cbs-osakarovka.kz/files/userfiles/news/db/pisateli/8600513a7ee96bd030d510f677a6271c136da866223f8a9c44_pimgpsh_fullsize_distr.jpg',
  },
  Shokan: {
    name: 'Шоқан Уәлиханов',
    currentPrompt:
      'Шоқан Уәлиханов сияқты жауап бер. Ғылыми, дерекке сүйенген, зерттеуші көзқараспен жауап бер.',
    image: 'https://adebiportal.kz/storage/tmp/resize/news/1200_0_916241c071ad95caaf9b7d316a60f4b0.jpeg',
  },
  Alikhan: {
    name: 'Әлихан Бөкейхан',
    currentPrompt:
      'Әлихан Бөкейхан стилінде жауап бер. Зияткер, ұлтшыл көзқараста, саяси әрі нақты пікір білдір.',
    image: 'https://upload.wikimedia.org/wikipedia/kk/b/b8/%D3%98%D0%BB%D0%B8%D1%85%D0%B0%D0%BD_%D0%91%D3%A9%D0%BA%D0%B5%D0%B9%D1%85%D0%B0%D0%BD_%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%D1%96.jpg',
  },
  Magzhan: {
    name: 'Мағжан Жұмабаев',
    currentPrompt:
      'Мағжан Жұмабаев секілді жауап бер. Поэтикалық, романтикалық әрі ұлттық рухта жауап бер.',
    image: 'https://inkaraganda.kz/wp-content/uploads/2023/06/skrinshot-20-06-2023-104634-e1687853148807.jpg',
  },
  AlFarabi:{
    name: 'Әл-Фараби',
    currentPrompt:
    'Әл-Фараби секілді жауап бер. Ғылым мен философияға негізделген, даналықпен жауап бер.Және артык ештене айтпай Аль Фарби сиакты бол',
    image:'https://iie.kz/wp-content/uploads/2023/04/image-34.png',

  },
};

function Messages() {
  const [question, setQuestion] = useState('');
  const [selectedPersonKey, setSelectedPersonKey] = useState(null);
  const [answersByPerson, setAnswersByPerson] = useState({});

  const selectedPerson = selectedPersonKey ? peoples[selectedPersonKey] : null;

  function ask() {
    if (!selectedPersonKey || !selectedPerson || !question.trim()) return;

    const prompt = `${selectedPerson.currentPrompt}\nСұрақ: ${question}`;

    axios
      .post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then((response) => {
        const responseText =
          response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'Жауап табылмады';

        setAnswersByPerson((prev) => {
          const updated = [...(prev[selectedPersonKey] || []), { question, answer: responseText }];
          return { ...prev, [selectedPersonKey]: updated };
        });

        setQuestion('');
      });
  }

  return (
    <div className="containerp">
      <Link to="/Chatpage" >
       <img src="https://cdn-icons-png.freepik.com/512/3114/3114883.png" alt="" width={40} height={40} />
      </Link>
     
      {/* Сол жақтағы sidebar (тұлғалар) */}
      <div className="sidebars">
        {Object.keys(peoples).map((key) => {
          const person = peoples[key];
          return (
            <div
              key={key}
              className="chat-itemw"
              onClick={() => setSelectedPersonKey(key)}
            >
              <img src={person.image} alt={person.name} />
              <span>{person.name}</span>
            </div>
          );
        })}
      </div>

      {/* Оң жақтағы чат */}
      <div className="chat-main2">
        {selectedPerson && (
          <>
            <div className="chat-header2">{selectedPerson.name}</div>
            <div className="chat-messages2">
              {(answersByPerson[selectedPersonKey] || []).map((a, index) => (
                <React.Fragment key={index}>
                  <div className="message user">{a.question}</div>
                  <div className="message bot">{a.answer}</div>
                </React.Fragment>
              ))}
            </div>
            <div className="chat-input2">
              <input
                type="text"
                placeholder="Хабарлама..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && ask()}
              />
              <button onClick={ask}>Жіберу</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Messages;
