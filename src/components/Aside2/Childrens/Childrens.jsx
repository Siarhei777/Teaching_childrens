import React from 'react';
import style from './../Aside2.module.css';

const Childrens = () => {
    return (
        <label className = {`${style.segment} ${style.long_input}`}>
            <input type="text" placeholder="Имя ребенка" />
            <button className = {style.unit} type="button" id = {style.childrens}></button>
        </label>
    );
}

export default Childrens;