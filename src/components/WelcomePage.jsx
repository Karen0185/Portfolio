import { useEffect, useRef, useState } from 'react';
import '../assets/styles/WelcomePage.scss';

const WelcomePage = ({ welcomePageRef }) => {

    return (
        <div className="WelcomePage" id='welcomePage' ref={welcomePageRef}>
            <div className="left">
                <h1>FRONT-END ВЕБ-РАЗРАБОТЧИК</h1>
                <h2>Карен Арутюнян </h2>
                <p>Привет, меня зовут Карен. Я опытный фронтенд-разработчик с 1-2 годами интенсивной практики в создании пользовательских интерфейсов с использованием современных технологий.</p>
            </div>
            <div className="right">
                <div className="avatar">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );

}
export default WelcomePage;