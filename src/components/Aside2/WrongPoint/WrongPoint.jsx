import React from 'react';
import style from './../Aside2.module.css';

const WrongPoint = () => {
    return (
        <div className = {style.segment}>
            <button className = {style.unit} type="button"><i className = {style.icon}></i></button>
            <label>
                <input type="number" defaultValue="5" min="1" max="5" onKeyPress="return false" />
            </label>
            <button className = {style.unit} type="button"><i className = {style.icon}></i></button>
        </div>
    );
}

export default WrongPoint;