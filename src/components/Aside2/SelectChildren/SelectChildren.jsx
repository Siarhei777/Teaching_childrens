import React from 'react';
import style from './../Aside2.module.css';

const SelectChildren = () => {
    return (
        <div className = {style.segment}>
            <input id="girl" type="radio" name="pol" value="w" defaultChecked />
            <label for="girl" className = {style.short_input}>Дочь</label>
            <input id="boy" type="radio" name="pol" value="m" />
            <label for="boy" className = {style.short_input}>Сын</label>
        </div>
    );
}

export default SelectChildren;