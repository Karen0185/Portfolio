import { useEffect, useRef, useState } from 'react';
import '../assets/styles/WelcomePage.scss';

const WelcomePage = ({ welcomePageRef }) => {

    return (
        <div className="WelcomePage" id='welcomePage' ref={welcomePageRef}>
            <div className="left">
                <h1>FRONT-END ВЕБ-РАЗРАБОТЧИК</h1>
                <h2>Карен Арутюнян </h2>
                <p>Всем привет! <br />Я Карен, Front-end разработчик. Главная характеристика моей работы, которую я мог бы дать, была проста: Выполняйте. Быстро Я ищу интересные проекты, и это мое портфолио.</p>
            </div>
            <div className="right">
                <div className="avatar"></div>
            </div>
        </div>
    );

}
export default WelcomePage;