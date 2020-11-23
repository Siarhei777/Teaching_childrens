import React from 'react';
import style from './../Aside2.module.css';

const SaveButton = () => {
    return (
        <div>
            <button className = {style.red} type="button"><i className = {style.icon}></i>СОХРАНИТЬ</button>
        </div>
    );
}

export default SaveButton;