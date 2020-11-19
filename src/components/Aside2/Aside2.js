import React from 'react';
import style from './Aside2.module.css';

const Aside2 = () => {
    return (        
        <aside>
            <div className = {style.aside2}>
                <form action="">
                    <div className = {style.segment}>
                        <h2>НАСТРОЙКИ:</h2>
                    </div>
                    <p>Время урока(мин):</p>
                    <div className = {style.segment}>
                        <button className = {style.unit} type="button"><i className = {style.icon}></i></button>
                        <label>
                            <input type="number" defaultValue="15" min="1" max="30" onKeyPress="return false" />
                        </label>
                        <button className = {style.unit} type="button"><i className = {style.icon}></i></button>
                    </div>
                    <p>Очки за верный ответ:</p>
                    <div className = {style.segment}>
                        <button className = {style.unit} type="button"><i className = {style.icon}></i></button>
                        <label>
                            <input type="number" defaultValue="1" min="1" max="5" onKeyPress="return false" />
                        </label>
                        <button className = {style.unit} type="button"><i className = {style.icon}></i></button>
                    </div>
                    <p>Очки за неверный ответ:</p>
                    <div className = {style.segment}>
                        <button className = {style.unit} type="button"><i className = {style.icon}></i></button>
                        <label>
                            <input type="number" defaultValue="5" min="1" max="5" onKeyPress="return false" />
                        </label>
                        <button className = {style.unit} type="button"><i className = {style.icon}></i></button>
                    </div>

                    <label className = {`${style.segment} ${style.long_input}`}>
                        <input type="text" placeholder="Имя ребенка" />
                        <button className = {style.unit} type="button" id="childrens"></button>
                    </label>

                    <div className = {style.segment}>
                        <input id="girl" type="radio" name="pol" value="w" defaultChecked />
                        <label for="girl" className = {style.short_input}>Дочь</label>
                        <input id="boy" type="radio" name="pol" value="m" />
                        <label for="boy" className = {style.short_input}>Сын</label>
                    </div>

                    <label className = {style.long_input}>
                        <input type="text" placeholder="Имя родителя" />
                        <button className = {style.unit} type="button" id="parents"></button>
                    </label>

                    <div className = {`${style.segment} ${style.last_segment}`}>
                        <input id="mother" type="radio" name="pol2" value="w2" defaultChecked />
                        <label for="mother" className = {style.short_input}>Мама</label>
                        <input id="father" type="radio" name="pol2" value="m2" />
                        <label for="father" className = {style.short_input}>Папа</label>
                    </div>

                    <button className = {style.red} type="button"><i className = {style.icon}></i>СОХРАНИТЬ</button>
                    <button className = {style.red} type="button"><i className = {style.icon}></i>СБРОСИТЬ ВСЕ</button>

                </form>
            </div>
        </aside>        
    );
}

export default Aside2;