import notesImg from '../assets/images/notes.png'
import weatherImg from '../assets/images/weather.png'
import kinomaniaImg from '../assets/images/kinomania.png'
import '../assets/styles/Cases.scss'

const Cases = ({casesRef}) => {

    const cases = [
        {
            title: 'Заметки',
            img: notesImg,
            descrition: 'NotesApp - это надежный спутник для всех, кто ищет удобное и эффективное решение для управления своими заметками и задачами. Он помогает организовать информацию, повысить продуктивность и держать все важные записи под контролем.',
            link: 'https://karen0185.github.io/notes-app/',
            github: 'https://github.com/Karen0185/notes-app'
        },
        {
            title: 'Погода',
            img: weatherImg,
            descrition: 'WeatherApp - это надежный помощник для тех, кто ищет удобный и точный способ отслеживать погодные условия. Наше приложение предоставляет актуальную информацию о погоде, помогая вам быть в курсе прогнозов и принимать осознанные решения в зависимости от погодных условий. С WeatherApp вы всегда будете готовы к изменениям в атмосфере и сможете планировать свой день с уверенностью.',
            link: 'https://karen0185.github.io/weather-app/',
            github: 'https://github.com/Karen0185/weather-app'
        },
        {
            title: 'Кино Сайт',
            img: kinomaniaImg,
            descrition: 'Вы найдете огромный выбор фильмов для всех вкусов. Смотрите любимые киноленты, следите за новинками. Простой интерфейс и удобство использования делают просмотр фильмов легким и приятным',
            link: 'https://karen0185.github.io/kino-site/',
            github: 'https://github.com/Karen0185/kino-site'
        }
    ]

    return (
        <div className="Cases" id='cases' ref={casesRef}>
            <h1>Пример работы</h1>
            <p>В этом разделе каждая строчка кода — это шаг к улучшению и хорошему пользовательскому опыту. Внизу вы найдете несколько моих "пет-проектов":</p>
            <div className="cases-box">
                {
                    cases.map((item) =>
                        <div className="case" >
                            <div className={item.order != undefined ? "left order-2" : "left"} >
                                <div className="case-img">
                                    <img src={item.img} alt="Case image" />
                                </div>
                            </div>
                            <div className="right" >
                                <div className="case-title">{item.title}</div>
                                <div className="case-description">{item.descrition}</div>
                                <div className="case-links">
                                    <a href={item.link} target='blank'>Link</a>
                                    <a href={item.github} target='blank'>Github</a>
                                </div>
                            </div>
                            <div className="line"></div>
                        </div>
                    )
                }
            </div>
        </div>
    );

}
export default Cases;