import React, {useState } from 'react';

const FunctionalComponent = ({ couleur }) => {
    const [color, setColor] = useState(couleur);

    const changeColor =() => {
        setColor(randomColor());
    };

    function randomColor() {
        const letters = '0123456789ABCDEF';
        let newColor = '#';
        for (let i = 0; i < 6; i++) {
          newColor += letters[Math.floor(Math.random() * 16)];
        }
        return newColor;
      }

    return (
        <div>
            <div style={{ color }}>
                <p onMouseOver={changeColor}> Je suis un composant </p>
            </div>
            
        </div>
    )
};

export default FunctionalComponent;