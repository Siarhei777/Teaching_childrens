import React from 'react';
import style from './../Aside2.module.css';

const ResetButton = () => {
    return (
        <div>
            <button className = {style.red} type="button"><i className = {style.icon}></i>СБРОСИТЬ ВСЕ</button>
        </div>
    );
}

export default ResetButton;