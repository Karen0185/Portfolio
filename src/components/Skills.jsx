import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { 
    BiLogoJavascript, 
    BiLogoReact, 
    BiLogoSass,
    BiLogoFigma } from 'react-icons/bi';
import { 
    SiMui,
    SiTailwindcss,
    SiAdobephotoshop,
    SiAdobexd,
    SiRedux } from 'react-icons/si';
import { FaBootstrap, FaGitAlt } from 'react-icons/fa'
import '../assets/styles/Skills.scss';

const Skills = ({skillsRef}) => {

    const mySkills = [
        {
            name: 'HTML 5',
            icon: <AiFillHtml5 />
        },
        {
            name: 'CSS 3',
            icon: <DiCss3 />
        },
        {
            name: 'SASS',
            icon: <BiLogoSass />
        },
        {
            name: 'Material UI',
            icon: <SiMui />
        },
        {
            name: 'Bootstrap',
            icon: <FaBootstrap />
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss />
        },
        {
            name: 'JavaScript',
            icon: <BiLogoJavascript />
        },
        {
            name: 'React Js',
            icon: <BiLogoReact />
        },
        {
            name: 'Redux',
            icon: <SiRedux />
        },
        {
            name: 'Git',
            icon: <FaGitAlt />
        }
    ]

    const mySkillsForLayot = [
        {
            name: 'Photoshop',
            icon: <SiAdobephotoshop />
        },
        {
            name: 'Adobe XD',
            icon: <SiAdobexd />
        },
        {
            name: 'Figma',
            icon: <BiLogoFigma />
        }
    ]
    return (
        <div className="Skills" id='skills' ref={skillsRef}>
            <h1>Навыки</h1>
            <p>Я разработчик с опытом работы на разных языках, в различных работах и технологиях. Я всегда ищу новые задачи, которые можно было бы решить</p>
            <div className="skills">
                <div className="my-skills">
                    {
                        mySkills.map((item) =>
                            <div className="skills-item">
                                <div className="item-icon">{item.icon ? item.icon : ''}</div>
                                <p className="item-name">{item.name}</p>
                            </div>

                        )
                    }
                </div>
                <div className="line"></div>
                <div className="my-skills-forLayot">
                    {
                        mySkillsForLayot.map((item) =>
                            <div className="skills-item">
                                <div className="item-icon">{item.icon ? item.icon : ''}</div>
                                <p className="item-name">{item.name}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );

}
export default Skills;