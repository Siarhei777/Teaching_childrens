import React from 'react';
import style from './Main.module.css';
import ParentsPhoto from './ParentsPhoto/ParentsPhoto';
import ChildrenPhoto from './ChildrenPhoto/ChildrenPhoto';
import StartButton from './StartButton/StartButton';

const Main = () => {
    return (
        <main>
            <div className = {style.container_main1}>

            </div>
            <div className = {style.container_main2}>
                <ParentsPhoto />
                <StartButton />
                <ChildrenPhoto />
            </div>
        </main>
    );
}

export default Main