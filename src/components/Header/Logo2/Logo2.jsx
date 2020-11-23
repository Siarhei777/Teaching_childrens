import React from 'react';
import style from './../Header.module.css';

const Logo2 = () => {
    return (
        <div className = {style.site_legend}>
            <svg viewBox="0 0 100 100">
                <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" style={{fill: 'none'}}/>
                <text><textPath xlinkHref="#circle">В ПОМОЩЬ РОДИТЕЛЯМ! TEACHING_CHILDREN.RU</textPath></text>
            </svg>
            <img src="/../../assets/images/header.png" alt="Картика заголовка" />
        </div>
    );
}

export default Logo2;