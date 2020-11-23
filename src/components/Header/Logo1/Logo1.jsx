import React from 'react';
import style from './../Header.module.css';

const Logo1 = () => {
    return (
       <div className={style.container_image}>
           <img src="./../../../assets/images/logo.png" alt="Логотип" />
       </div>
    );
}

export default Logo1