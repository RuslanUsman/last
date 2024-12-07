import React, { useState, useEffect } from 'react';
import './WoodenBuildSelection.css';

const woodenBuildTypes = [
  { name: "Дверь", imagePath: "/images/doorwood.png" },
  { name: "Стена", imagePath: "/images/wood.jpg" },
  { name: "Фундамент", imagePath: "/images/basewood.png" }
];

const WoodenBuildSelection = ({ onSelectBuildType }) => {
  const [selectedBuild, setSelectedBuild] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (selectedBuild) {
      onSelectBuildType(selectedBuild, quantity);
    }
  }, [selectedBuild, quantity, onSelectBuildType]);

  const handleSelectBuild = (name) => {
    setSelectedBuild(name);
    setQuantity(1); // Сбросить количество при выборе нового типа
  };

  const handleIncrease = (name) => {
    if (selectedBuild === name) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleDecrease = (name) => {
    if (selectedBuild === name) {
      setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    }
  };

  return (
    <div className="wooden-build-selection">
      <div className="wooden-build-grid-wrapper">
        <div className="wooden-build-grid">
          {woodenBuildTypes.map(({ name, imagePath }) => (
            <div
              key={name}
              className={`wooden-build-card ${selectedBuild === name ? 'selected' : ''}`}
              onClick={() => handleSelectBuild(name)}
            >
              <img src={`${process.env.PUBLIC_URL}${imagePath}`} alt={name} className="wooden-build-image" />
              <h3>{name}</h3>
              {selectedBuild === name && (
                <div className="quantity-controls">
                  <button onClick={(e) => {e.stopPropagation(); handleDecrease(name);}}>-</button>
                  <span>{quantity}</span>
                  <button onClick={(e) => {e.stopPropagation(); handleIncrease(name);}}>+</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WoodenBuildSelection;