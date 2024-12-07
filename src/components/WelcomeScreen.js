import React, { useEffect } from 'react';
import { tg } from '../App'; // Импортируйте tg из App.js
import './WelcomeScreen.css';

const WelcomeScreen = ({ onNext }) => {
  useEffect(() => {
    tg.MainButton.text = "Далее";
    tg.MainButton.show();
    tg.MainButton.onClick(onNext);

    return () => {
      tg.MainButton.offClick(onNext);
      tg.MainButton.hide();
    };
  }, [onNext]);

  return (
    <div className="welcome-screen">
      <img src={`${process.env.PUBLIC_URL}/images/welcomepng.png`} alt="Логотип" className="logo" />
      <h1>by LEGOTM</h1>
    </div>
  );
};

export default WelcomeScreen;