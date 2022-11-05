import { useState, useEffect, useRef } from 'react';
import Icon from "../components/Icon";

import '../style.css';

const HomePage = () => {
  const [languages, setLanguages] = useState([]);
  const [activeLanguages, setActiveLanguages] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  const [technologies, setTechnologies] = useState([]);
  const [activeTechnologies, setActiveTechnologies] = useState([]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const localityRef = useRef();
  const schoolRef = useRef();
  const endYearRef = useRef();
  const gdprRef = useRef();

  const toggleLanguageActive = (id) => {
    activeLanguages.includes(id)
      ? setActiveLanguages(activeLanguages.filter(language => language !== id))
      : setActiveLanguages([...activeLanguages, id]);
  }

  useEffect(() => {
    fetch('http://192.168.43.201:3001/language')
      .then(res => res.json())
      .then(data => setLanguages(data));
  }, []);

  const toggleTechnologyActive = (id) => {
    activeTechnologies.includes(id)
    ? setActiveTechnologies(activeTechnologies.filter(technology => technology !== id))
    : setActiveTechnologies([...activeTechnologies, id]);
  }

  const nextSlide = () => setSlideIndex(slideIndex + 1);

  const previousSlide = () => setSlideIndex(slideIndex - 1);

  useEffect(() => {
    fetch('http://192.168.43.201:3001/technology')
      .then(res => res.json())
      .then(data => setTechnologies(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('a');
    fetch("http://192.168.43.201:3001/student", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
        email: emailRef.current.value,
        locality: localityRef.current.value,
        school: schoolRef.current.value,
        end_year: endYearRef.current.value,
        languages: activeLanguages.join(','),
        technologies: activeTechnologies.join(','),
        gdpr: gdprRef.current.checked,
      })
    });
  }

  return (
    <div className="App">
      <div className="app-content">
          <section className='sec-1' style={{
            display: slideIndex === 0 ? 'flex' : 'none'
          }}>
            <nav className='navbarMain'>
              <a href='https://www.certicon.cz/'><img className='certiconLogoMain' src='../img/certicon-logo.png' alt='Certicon Logo' /></a>
            </nav>

            <header className='pageHeaderMain'>Nevíš kam po škole?</header>
            <p className='pageInfoMain'>Vyplň tento krátký formulář a zajisti si stabilní pozici, přátelské prostředí a dobrý plat během pár kliknutí. Zapíšeme se ti na seznam uchazečů, a můžeš získávat informace o akcích, projektech nebo pracovní nabídku.</p>
            <button className='submitButtonMain' onClick={nextSlide}><Icon type="fas" name="arrow-right" /></button>
          </section>

          <section className='sec-2' style={{
            display: slideIndex === 1 ? 'flex' : 'none'
          }}>
            <nav className='navbarNext'>
              <button className='backButton' onClick={previousSlide}><Icon type="fas" name="arrow-left" /></button>
              <a href='https://www.certicon.cz/'><img className='certiconLogoNext after' src='../img/certicon-logo.png' alt='Certicon Logo' /></a>
            </nav>

            <header className='pageHeaderNext'>Zadej...</header>
            <form onSubmit={e => e.preventDefault()}>
              <p>Jméno:</p>
                <input type="text" name="fname" ref={firstNameRef} required  />
              <p>Příjmení:</p>
                <input type="text" name="lname" ref={lastNameRef} required />
              <p>Email:</p>
                <input type="text" name="email" ref={emailRef} required /><br />
                <button className='submitButtonNext' onClick={nextSlide}><Icon type="fas" name="arrow-right" /></button>
            </form>

          </section>

          <section className='sec-3'style={{
            display: slideIndex === 2 ? 'flex' : 'none'
          }}>
            <nav className='navbarNext'>
              <button className='backButton' onClick={previousSlide}><Icon type="fas" name="arrow-left" /></button>
              <a href='https://www.certicon.cz/'><img className='certiconLogoNext after' src='../img/certicon-logo.png' alt='Certicon Logo' /></a>
            </nav>

            <header className='pageHeaderNext'>Zadej...</header>
            <form onSubmit={e => e.preventDefault()}>
                <p>Lokalita:</p>
                  <input type="text" name="locality" ref={localityRef} required />
                <p>Škola:</p>
                  <input type="text" name="school" ref={schoolRef} required />
                <p>Rok ukončení:</p>
                  <input type="number" ref={endYearRef} required/><br />
                <button className='submitButtonNext' onClick={nextSlide}><Icon type="fas" name="arrow-right" /></button>
            </form>

          </section>

            <section className='sec-4' style={{
            display: slideIndex === 3 ? 'flex' : 'none'
          }}>
              <nav className='navbarNext'>
                <button className='backButton' onClick={previousSlide}><Icon type="fas" name="arrow-left" /></button>
                <a href='https://www.certicon.cz/'><img className='certiconLogoNext after' src='../img/certicon-logo.png' alt='Certicon Logo' /></a>
              </nav>

              <header className='pageHeaderNext'>Vyber...</header>
              <form onSubmit={e => e.preventDefault()}>
              <p>Jazyky:</p>
              <div className='boxLanguage'>
                {languages.map(language => (
                  <div key={language.language_id}>
                    <input type="checkbox" onChange={() => toggleLanguageActive(language.language_id)} />
                    <label>{language.name}</label>
                    
                  </div>
                ))}
                </div><br />
                  <button className='submitButtonNext' onClick={nextSlide}><Icon type="fas" name="arrow-right" /></button>
              </form>

            </section>
          

              <section className='sec-5' style={{
            display: slideIndex === 4? 'flex' : 'none'
          }}>
                <nav className='navbarNext'>
                  <button className='backButton' onClick={previousSlide}><Icon type="fas" name="arrow-left" /></button>
                  <a href='https://www.certicon.cz/'><img className='certiconLogoNext after' src='../img/certicon-logo.png' alt='Certicon Logo' /></a>
                </nav>

                <header className='pageHeaderNext'>Vyber...</header>
                <form onSubmit={e => e.preventDefault()}>
                <p>Technologie:</p>
                <div className='boxTechnology'>
                  {technologies.map(technology => (
                    <div key={technology.technology_id}>
                      <input type="checkbox" onChange={() => toggleTechnologyActive(technology.technology_id)} />
                      <label>{technology.name}</label>
                    </div>
                  ))}</div><br />
                    <button className='submitButtonNext' onClick={nextSlide}><Icon type="fas" name="arrow-right" /></button>
                </form>

              </section>

              <section className='sec-6' style={{
            display: slideIndex === 5 ? 'flex' : 'none'
          }}>
                <nav className='navbarNext'>
                  <button className='backButton' onClick={previousSlide}><Icon type="fas" name="arrow-left" /></button>
                  <a href='https://www.certicon.cz/'><img className='certiconLogoNext after' src='../img/certicon-logo.png' alt='Certicon Logo' /></a>
                </nav>

                <header className='pageHeaderNext'>Vyber...</header>
                <form onSubmit={handleSubmit}>
                <p>Souhlasím s gdpr: <input className='gdprChceckbox' type="checkbox" name='gdpr' ref={gdprRef}/></p>
                  <br />
                    <button className='submitButtonNext' onClick={nextSlide}><Icon type="fas" name="arrow-right" /></button>
                </form>

              </section>

              <section className='sec-7' style={{
            display: slideIndex === 6 ? 'flex' : 'none'
          }}>
                <nav className='navbarMain'>
                  <a href='https://www.certicon.cz/'><img className='certiconLogoMain' src='../img/certicon-logo.png' alt='Certicon Logo' /></a>
                </nav>

                <header className='pageHeaderNext'>Děkujeme.</header>    
                <p className='pageInfoNext'>O akcích nebo pracovních nabídkách tě budeme kontaktovat emailem.</p>            

              </section>
           
      </div>
    </div>
  );
}

export default HomePage;
