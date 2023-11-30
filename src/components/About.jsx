import { useEffect } from 'react';
import '../assets/styles/About.scss';

const About = ({ aboutRef, }) => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById('contacts');
        const offset = 125;
        const targetOffset = section.offsetTop - offset;
        if (section) {
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth',
            });
        }
    };
   
    return (
        <div className="About" id='about' ref={aboutRef}>
            <h1>О себе</h1>
            <div className="top">
                <p>Я Карен — творческий и всесторонне развитый фронтенд-разработчик с более чем 3-летним опытом в создании уникальных веб-приложений и сайтов. Мои навыки охватывают различные технологии, что позволяет мне подходить к проектам с разнообразными требованиями.</p>
                <p>Моя философия — сочетание обширного опыта с сильными техническими навыками. В роли Front-End разработчика я стремлюсь к постоянному профессиональному росту, готов учиться у более опытных коллег и делиться своими знаниями.</p>
            </div>
            <div className="bottom">
                <p>Мое внимание к деталям отражается в создании чистого, эффективного и элегантного кода.</p>
                <p>Для меня важно не только достигнуть целей проекта, но и создать продукт, который вдохновляет и улучшает пользовательский опыт. Добро пожаловать в мой мир веб-разработки, где каждая строка кода — это шаг к совершенству!</p>
                <button className="getInTouch" onClick={scrollToSection}>Cвязаться</button>
            </div>
        </div>
    );
}
export default About;