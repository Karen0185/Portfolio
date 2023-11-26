import { useEffect, useState } from 'react';
import { IoIosSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import '../assets/styles/Burger.scss';

const Burger = ({setIsNightMode, isNightMode}) => {

    const [isActiveBurger, setIsActiveBurger] = useState(false)

    const handleClick = () => {
        setIsActiveBurger(!isActiveBurger)
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const offset = 70;
        const targetOffset = section.offsetTop - offset;
        handleClick()
        if (section) {
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={isActiveBurger ? 'Burger active' : 'Burger'}>
            <div className="burgerIcon" onClick={handleClick}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            <div className="burger-menu">
                <ul>
                    <li onClick={() => scrollToSection('welcomePage')}>Карен Арутюнян</li>
                    <li onClick={() => scrollToSection('about')}>О себе</li>
                    <li onClick={() => scrollToSection('skills')}>Навыки</li>
                    <li onClick={() => scrollToSection('cases')}>Пример работы</li>
                    <li onClick={() => scrollToSection('contacts')}>Контакты</li>
                </ul>
            </div>
        </div>
    );

}
export default Burger;