import React from 'react';
import style from './../Aside2.module.css';

const Parents = () => {
    return (
        <label className = {style.long_input}>
            <input type="text" placeholder="Имя родителя" />
            <button className = {style.unit} type="button" id = {style.parents}></button>
        </label>
    );
}

export default Parents;