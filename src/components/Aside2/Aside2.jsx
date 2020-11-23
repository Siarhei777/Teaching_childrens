import React from 'react';
import style from './Aside2.module.css';
import LessonTime from './LessonTime/LessonTime';
import CorrectPoint from './CorrectPoint/CorrectPoint';
import WrongPoint from './WrongPoint/WrongPoint';
import Childrens from './Childrens/Childrens';
import SelectChildren from './SelectChildren/SelectChildren';
import Parents from './Parents/Parents';
import SelectParents from './SelectParents/SelectParents';
import SaveButton from './SaveButton/SaveButton';
import ResetButton from './ResetButton/ResetButton';

const Aside2 = () => {
    return (        
        <aside>
            <div className = {style.aside2}>
                <form action="">
                    <div className = {style.segment}>
                        <h2>НАСТРОЙКИ:</h2>
                    </div>
                    <p>Время урока(мин):</p>
                    <LessonTime />
                    <p>Очки за верный ответ:</p>
                    <CorrectPoint />
                    <p>Очки за неверный ответ:</p>
                    <WrongPoint />
                    <Childrens />
                    <SelectChildren />
                    <Parents />
                    <SelectParents />
                    <SaveButton />
                    <ResetButton />
                </form>
            </div>
        </aside>        
    );
}

export default Aside2;