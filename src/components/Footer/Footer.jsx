import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className = {style.container1}>
                <span>Copyright © 2020 teaching_children.ru Все права защищены.</span><br />
                <span>Разработчик и владелец сайта: Жоров Сергей</span>
            </div>
            <div className = {style.container2}>
                <img src="/assets/images/soc1.png" alt="Фэйсбук" className = {style.img} />
                <img src="/assets/images/soc2.png" alt="Твиттер" className = {style.img} />
                <img src="/assets/images/soc3.png" alt="Linkedin" className = {style.img} />
                <img src="/assets/images/soc4.png" alt="Ютуб" className = {style.img} />
                <img src="/assets/images/soc5.png" alt="Телеграм" className = {style.img} />
            </div>
        </footer>
    );
}

export default Footer;