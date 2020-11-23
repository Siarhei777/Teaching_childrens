import React from 'react';
import style from './../Aside2.module.css';

const SelectParents = () => {
    return (
        <div className = {`${style.segment} ${style.last_segment}`}>
            <input id="mother" type="radio" name="pol2" value="w2" defaultChecked />
            <label for="mother" className = {style.short_input}>Мама</label>
            <input id="father" type="radio" name="pol2" value="m2" />
            <label for="father" className = {style.short_input}>Папа</label>
        </div>
    );
}

export default SelectParents;