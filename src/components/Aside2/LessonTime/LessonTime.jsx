import React from 'react';
import style from './../Aside2.module.css';

const LessonTime = () => {
    return (
        <div className = {style.segment}>
            <button className = {style.unit} type="button"><i className = {style.icon}></i></button>
            <label>
                <input type="number" defaultValue="15" min="1" max="30" onKeyPress="return false" />
            </label>
            <button className = {style.unit} type="button"><i className = {style.icon}></i></button>
        </div>
    );
}

export default LessonTime;