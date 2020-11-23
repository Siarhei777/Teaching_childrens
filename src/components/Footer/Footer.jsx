import React from 'react';
import style from './Footer.module.css';
import Facebook from './Facebook/Facebook';
import Twitter from './Twitter/Twitter';
import Linkedin from './Linkedin/Linkedin';
import Youtube from './Youtube/Youtube';
import Telegram from './Telegram/Telegram';

const Footer = () => {
    return (
        <footer>
            <div className = {style.container1}>
                <span>Copyright © 2020 teaching_children.ru Все права защищены.</span><br />
                <span>Разработчик и владелец сайта: Жоров Сергей</span>
            </div>
            <div className = {style.container2}>
                <Facebook />
                <Twitter />
                <Linkedin />
                <Youtube />
                <Telegram />
            </div>
        </footer>
    );
}

export default Footer;