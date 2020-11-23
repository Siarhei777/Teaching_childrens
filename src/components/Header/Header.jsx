import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Logo1 from './Logo1/Logo1';
import Logo2 from './Logo2/Logo2';

const Header = () => {
    return (
        <header>
            <Logo1 />
            <h1>Обучение детей</h1>
            <nav>
                <ul className = {style.main_navigation}>
                    <li><NavLink to="/AboutProject" activeClassName = {style.activeLink}>О проекте</NavLink></li>
                    <li><NavLink to="/Help" activeClassName = {style.activeLink}>Помощь</NavLink></li>
                    <li><NavLink to="/News" activeClassName = {style.activeLink}>Новости</NavLink></li>
                    <li><NavLink to="/Contacts" activeClassName = {style.activeLink}>Контакты</NavLink></li>
                    <li><NavLink to="/Donat" activeClassName = {style.activeLink}>Помощь проекту</NavLink></li>
                </ul>
            </nav>
            <Logo2 />
        </header>
    );
}

export default Header;
