import React from 'react';
import style from './Main.module.css';

const Main = () => {
    return (
        <main>
            <div className = {style.container_main1}>

            </div>
            <div className = {style.container_main2}>
                <div className = {style.border_container}>
                    <img src="/../../assets/images/woman.png" alt="parents" />
                </div>

                <button className = {style.main_button}>НАЧАТЬ ОБУЧЕНИЕ</button>

                <div className = {style.border_container}>
                    <img src="/../../assets/images/girl.png" alt="childrens" />
                </div>
            </div>
        </main>
    );
}

export default Main