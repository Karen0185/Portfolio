import notesImg from '../assets/images/notes.png'
import weatherImg from '../assets/images/weather.png'
import kinomaniaImg from '../assets/images/kinomania.png'
import '../assets/styles/Cases.scss'

const Cases = ({casesRef}) => {

    const cases = [
        {
            title: 'Заметки',
            img: notesImg,
            descrition: 'NotesApp - это надежный спутник для всех, кто ищет удобное и эффективное решение для управления своими заметками и задачами. Он помогает организовать информацию, повысить продуктивность и держать все важные записи под контролем.'
        },
        {
            title: 'Погода',
            img: weatherImg,
            descrition: 'веб-проиложения для просмота погоды',
            order: 2
        },
        {
            title: 'Кино Сайт',
            img: kinomaniaImg,
            descrition: 'веб-приложения для просмотра фильмов'
        }
    ]

    return (
        <div className="Cases" id='cases' ref={casesRef}>
            <h1>Пример работы</h1>
            <p>Небольшая галерея последних проектов, выбранных мной</p>
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
                                    <a href="">Link</a>
                                    <a href="">Github</a>
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