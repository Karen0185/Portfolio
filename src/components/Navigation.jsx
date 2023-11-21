import { useEffect, useState } from 'react';
import '../assets/styles/Navigation.scss';

const Navigation = ({ welcomeMask, aboutMask, skillsMask, casesMask, contactsMask }) => {


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const offset = 135;
        const targetOffset = section.offsetTop - offset;
        if (section) {
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="Navigation">
            <div className="navBar">
                <div className="welcomePage" onClick={() => scrollToSection('welcomePage')}>
                    <p>Карен Арутюнян</p>
                    <div className="scrollbar">
                        <svg width="16" height="130" fill="#333" xmlns="http://www.w3.org/2000/svg">
                            <rect className='svgLine' x="7" y="16" width="2" height="114" fill="#333" />
                            <rect width="16" height="16" rx="8" fill="#333" />
                            <mask id="mask0_0_1" x="0" y="0" width="16" height="130">
                                <path d="M8 0C3.58167 0 0 3.58173 0 8C0 12.4183 3.58167 16 8 16H7V130H9V16H8C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0Z" fill="#C9C6C6" />
                            </mask>
                            <g mask="url(#mask0_0_1)">
                                <rect width="16" height={welcomeMask + '%'}fill="#333" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="about" onClick={() => scrollToSection('about')}>
                    <p>О себе</p>
                    <div className="scrollbar">
                        <svg width="16" height="130" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='svgLine' x="7" y="16" width="2" height="114" fill="white" />
                            <rect width="16" height="16" rx="8" fill="white" />
                            <mask id="mask0_0_1" x="0" y="0" width="16" height="50">
                                <path d="M8 0C3.58167 0 0 3.58173 0 8C0 12.4183 3.58167 16 8 16H7V130H9V16H8C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0Z" fill="#C9C6C6" />
                            </mask>
                            <g mask="url(#mask0_0_1)">
                                <rect width="16" height={aboutMask + '%'} fill="#2397EB" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="skills" onClick={() => scrollToSection('skills')}>
                    <p>Навыки</p>
                    <div className="scrollbar">
                        <svg width="16" height="130" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='svgLine' x="7" y="16" width="2" height="114" fill="white" />
                            <rect width="16" height="16" rx="8" fill="white" />
                            <mask id="mask0_0_1" x="0" y="0" width="16" height="130">
                                <path d="M8 0C3.58167 0 0 3.58173 0 8C0 12.4183 3.58167 16 8 16H7V130H9V16H8C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0Z" fill="#C9C6C6" />
                            </mask>
                            <g mask="url(#mask0_0_1)">
                                <rect width="16" height={skillsMask + '%'} fill="#2397EB" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="cases" onClick={() => scrollToSection('cases')}>
                    <p>Пример работы</p>
                    <div className="scrollbar">
                        <svg width="16" height="130" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className='svgLine' x="7" y="16" width="2" height="114" fill="white" />
                            <rect width="16" height="16" rx="8" fill="white" />
                            <mask id="mask0_0_1" x="0" y="0" width="16" height="130">
                                <path d="M8 0C3.58167 0 0 3.58173 0 8C0 12.4183 3.58167 16 8 16H7V130H9V16H8C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0Z" fill="#C9C6C6" />
                            </mask>
                            <g mask="url(#mask0_0_1)">
                                <rect width="16" height={casesMask + '%'} fill="#2397EB" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="contacts" onClick={() => scrollToSection('contacts')}>
                    <p>Контакты</p>
                    <div className="scrollbar">
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="16" height="16" rx="8" fill="red" />
                            <mask id="mask0_0_1" x="0" y="0" width="16" height="16">
                                <path d="M0 8C0 3.58172 3.58172 0 8 0V0C12.4183 0 16 3.58172 16 8V8C16 12.4183 12.4183 16 8 16V16C3.58172 16 0 12.4183 0 8V8Z" fill="#C9C6C6" />
                            </mask>
                            <g mask="url(#mask0_0_1)">
                                <rect width="16" height={contactsMask / 6 + '%'} fill="#2397EB" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Navigation;