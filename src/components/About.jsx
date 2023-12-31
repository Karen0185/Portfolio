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
            <h1>О себе:</h1>
            <div className="top">
                <p>Я творческий и всестороннее развитый фронтенд-разработчик, с более чем 2-летним опытом в создании уникальных веб-приложений и сайтов. Благодаря моим навыкам и знаниям различных технологий,я работаю в проектах с разнообразными и сложными требованиями.</p>
                <p>В роли Front-End разработчика я стремлюсь к постоянному профессиональному росту, готов учиться у более опытных коллег и делиться своими знаниями.</p>
            </div>
            <div className="bottom">
                <p>Коммерческий опыт работы в сфере front-end разработки, где успешно применял навыки HTML, CSS и JavaScript для создания интуитивных и стильных пользовательских интерфейсов.</p>
                <p>Мое внимание к деталям отражается в создании чистого, эффективного и элегантного кода.</p>
                <p>Для меня важно не только достигнуть целей проекта, но и создать продукт, который вдохновляет и улучшает пользовательский опыт. Добро пожаловать в мой мир веб-разработки, где каждая строка кода — это шаг к совершенству!</p>
                <button className="getInTouch" onClick={scrollToSection}>Cвязаться</button>
            </div>
        </div>
    );
}
export default About;