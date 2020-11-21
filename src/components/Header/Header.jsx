import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <img src="./../../assets/images/logo.png" alt="Логотип" />
            <h1>Обучение детей</h1>
            <nav>
                <ul className = {style.main_navigation}>
                    <li><NavLink to="../AboutProject" activeClassName = {style.activeLink}>О проекте</NavLink></li>
                    <li><NavLink to="../Help" activeClassName = {style.activeLink}>Помощь</NavLink></li>
                    <li><NavLink to="../News" activeClassName = {style.activeLink}>Новости</NavLink></li>
                    <li><NavLink to="../Contacts" activeClassName = {style.activeLink}>Контакты</NavLink></li>
                    <li><NavLink to="../Donat" activeClassName = {style.activeLink}>Помощь проекту</NavLink></li>
                </ul>
            </nav>
            <div className = {style.site_legend}>
                <svg viewBox="0 0 100 100">
                    <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" style={{fill: 'none'}}/>
                    <text><textPath xlinkHref="#circle">В ПОМОЩЬ РОДИТЕЛЯМ! TEACHING_CHILDREN.RU</textPath></text>
                </svg>
                <img src="/../../assets/images/header.png" alt="Картика заголовка" />
            </div>
        </header>
    );
}

export default Header;
