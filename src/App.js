import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ExplosiveSelection from './components/ExplosiveSelection';
import './App.css';

export const tg = window.Telegram.WebApp;

function App() {
  const [step, setStep] = useState(0);

  const getHeaderText = () => {
    switch (step) {
      case 1:
        return "Выберите тип взрывчатки";
      case 2:
        return "Выберите материал постройки";
      case 3:
        return "Выберите тип постройки и количество";
      case 4:
        return "Результат";
      default:
        return "";
    }
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="App">
      {step === 0 ? (
        <WelcomeScreen onNext={handleNextStep} />
      ) : (
        <>
          <header className="App-header">
            <h1>{getHeaderText()}</h1>
          </header>
          <div className="App-content">
            <ExplosiveSelection setStep={setStep} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;