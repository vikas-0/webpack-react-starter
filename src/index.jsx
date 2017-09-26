import ReactDOM from 'react-dom';
import React from 'react';
import './css/style.css';
import emoji from './images/Smiling-Face-with-Sunglasses-Cool-Emoji-PNG.png';

ReactDOM.render(
    <div>
        <img src={emoji}/>
        <h1>Congrats!</h1>
        <p>Now go to &apos;src&apos; folder and add/edit codes</p>
    </div>, 
    document.getElementById('root')
);