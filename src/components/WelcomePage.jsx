import { useEffect, useRef, useState } from 'react';
import '../assets/styles/WelcomePage.scss';

const WelcomePage = ({ welcomePageRef }) => {

    const [avatar, setAvatar] = useState()

    return (
        <div className="WelcomePage" id='welcomePage' ref={welcomePageRef}>
            <div className="left">
                <h1>FRONT-END ВЕБ-РАЗРАБОТЧИК</h1>
                <h2>Карен Арутюнян </h2>
                <p>Привет, меня зовут Карен. Я опытный фронтенд-разработчик, практикующий в создании пользовательских интерфейсов с использованием современных технологий.</p>
            </div>
            <div className="right">
                <div className="avatar">
                   {
                    avatar ?  <img src="" alt="" /> : <p>Здесь должно было быть моя фотография, но что то пошло не так {"))"}.</p>
                   }
                </div>
            </div>
        </div>
    );

}
export default WelcomePage;