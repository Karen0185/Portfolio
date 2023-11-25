import { useEffect, useRef, useState } from 'react';
import Navigation from './components/Navigation';
import WelcomePage from './components/WelcomePage';
import About from './components/About';
import Skills from './components/Skills';
import Cases from './components/Cases';
import Contacts from './components/Contacts';
import Burger from './components/Burger';
import './assets/styles/App.scss';
import './assets/styles/Adaptive.scss';
import './assets/styles/NightMode.scss';


function App() {

  const [welcomeMask, setWelcomeMask] = useState(100);
  const [aboutMask, setAboutMask] = useState(0);
  const [skillsMask, setSkillsMask] = useState(0);
  const [casesMask, setCasesMask] = useState(0);
  const [contactsMask, setContactMask] = useState(0);
  const [isNightMode, setIsNightMode] = useState(false)

  const welcomePageRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const casesRef = useRef(null);
  const contactsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.floor(window.scrollY);
      const aboutPositionTop = Math.floor(aboutRef.current.getBoundingClientRect().top - 135);
      const remainingDistance = aboutPositionTop > 0 ? aboutPositionTop : 0;
      const totalDistance = aboutRef.current.clientHeight;
      const percentageRemaining = 100 - (remainingDistance / totalDistance) * 100;
      const clampedPercentage = Math.max(0, Math.min(percentageRemaining, 100));

      setAboutMask(clampedPercentage)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [aboutRef]);

  useEffect(() => {
    const handleScroll = () => {
      const positionTop = Math.floor(skillsRef.current.getBoundingClientRect().top - 135);
      const remainingDistance = positionTop > 0 ? positionTop : 0;
      const totalDistance = skillsRef.current.clientHeight;
      const percentageRemaining = 100 - (remainingDistance / totalDistance) * 100;
      const clampedPercentage = Math.max(0, Math.min(percentageRemaining, 100));

      setSkillsMask(clampedPercentage)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [skillsRef]);

  useEffect(() => {
    const handleScroll = () => {
      const positionTop = Math.floor(casesRef.current.getBoundingClientRect().top + casesRef.current.getBoundingClientRect().height / 2);
      const remainingDistance = positionTop > 0 ? positionTop : 0;
      const totalDistance = casesRef.current.clientHeight;
      const percentageRemaining = 100 - (remainingDistance / totalDistance) * 100;
      const clampedPercentage = Math.max(0, Math.min(percentageRemaining, 100));

      setCasesMask(clampedPercentage)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [casesRef]);

  useEffect(() => {
    const handleScroll = () => {
      const positionTop = Math.floor(contactsRef.current.getBoundingClientRect().top - 135);
      const remainingDistance = positionTop > 0 ? positionTop : 0;
      const totalDistance = contactsRef.current.clientHeight;
      const percentageRemaining = 100 - (remainingDistance / totalDistance) * 100;
      const clampedPercentage = Math.max(0, Math.min(percentageRemaining, 100));
      setContactMask(clampedPercentage)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [contactsRef]);

  return (
    <div className={isNightMode ? "App NightMode" : "App"}>
      <div className="wrapper">
        <Navigation welcomeMask={welcomeMask} aboutMask={aboutMask} skillsMask={skillsMask} casesMask={casesMask} contactsMask={contactsMask} setIsNightMode={setIsNightMode} isNightMode={isNightMode}/>
        <Burger  setIsNightMode={setIsNightMode} isNightMode={isNightMode}/>
      </div>
        <div className="container">
          <WelcomePage welcomePageRef={welcomePageRef} />
          <About aboutRef={aboutRef} />
          <Skills skillsRef={skillsRef} />
          <Cases casesRef={casesRef} />
          <Contacts contactsRef={contactsRef} />
        </div>
    </div>
  );
}

export default App;
