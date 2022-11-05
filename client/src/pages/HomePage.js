import { useState, useEffect } from 'react';
import Icon from "../components/Icon";

import '../style.css';

const HomePage = () => {
  const [languages, setLanguages] = useState([]);
  const [activeLanguages, setActiveLanguages] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  const [technologies, setTechnologies] = useState([]);
  const [activeTechnologies, setActiveTechnologies] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [locality, setLocality] = useState('');
  const [school, setSchool] = useState('');
  const [endYear, setEndYear] = useState('');
  const [gdpr, setGdpr] = useState(false);

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
    fetch("http://192.168.43.201:3001/student", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email,
        locality,
        school,
        end_year: endYear,
        languages: activeLanguages.join(','),
        technologies: activeTechnologies.join(','),
        gdpr,
      })
    });
  }

  return (
    <div className="App">
      <div className="app-content">
        <section className='sec-1' style={{
          visibility: slideIndex === 0 ? 'visible' : 'hidden',
          zIndex: 1,
        }}>
          <nav className='navbarMain'>
            <a href='https://www.certicon.cz/'><img className='certiconLogoMain' src='../img/certicon-logo.png' /></a>
          </nav>

          <header className='pageHeaderMain'>Nevíš kam po škole?</header>
          <p className='pageInfoMain'>Vyplň tento krátký formulář a zajisti si stabilní pozici, přátelské prostředí a dobrý plat během pár kliknutí. Zapíšeme se ti na seznam uchazečů, a můžeš získávat informace o akcích, projektech nebo pracovní nabídku.</p>
          <button className='submitButtonMain' onClick={nextSlide}><Icon type="fas" name="arrow-right" /></button>
        </section>

        <section className='sec-2' style={{
          visibility: slideIndex === 1 ? 'visible' : 'hidden',
          zIndex: 2,
        }}>
          <nav className='navbarNext'>
            <button className='backButton' onClick={previousSlide}><Icon type="fas" name="arrow-left" /></button>
            <a href='https://www.certicon.cz/'><img className='certiconLogoNext after' src='../img/certicon-logo.png' /></a>
          </nav>

          <header className='pageHeaderNext'>Zadej...</header>
          <form onSubmit={e => {
            e.preventDefault();
            nextSlide();
          }}>
            <p>Jméno:</p>
              <input
                type="text"
                name="fname"
                onChange={e => setFirstName(e.target.value)}
                required 
              />
              <p>Příjmení:</p>
                <input
                  type="text"
                  name="lname"
                  onChange={e => setLastName(e.target.value)}
                  required
                />
              <p>Email:</p>
                <input
                  type="email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  required
                /><br />
              <button className='submitButtonNext'><Icon type="fas" name="arrow-right" /></button>
          </form>

        </section>

        <section className='sec-3' style={{
          visibility: slideIndex === 2 ? 'visible' : 'hidden',
          zIndex: 3,
        }}>
          <nav className='navbarNext'>
            <button className='backButton' onClick={previousSlide}><Icon type="fas" name="arrow-left" /></button>
            <a href='https://www.certicon.cz/'><img className='certiconLogoNext after' src='../img/certicon-logo.png' /></a>
          </nav>

          <header className='pageHeaderNext'>Zadej...</header>
          <form onSubmit={e => {
            e.preventDefault();
            nextSlide();
          }}>
              <p>Lokalita:</p>
                <input
                  type="text"
                  name="locality"
                  onChange={e => setLocality(e.target.value)}
                  required 
                />
              <p>Škola:</p>
                <input
                  type="text"
                  name="school"
                  onChange={e => setSchool(e.target.value)}
                  required 
                />
              <p>Rok ukončení:</p>
                <input
                  type="number"
                  onChange={e => setEndYear(e.target.value)}
                  required
                /><br />
              <button className='submitButtonNext'><Icon type="fas" name="arrow-right" /></button>
          </form>

        </section>

        <section className='sec-4' style={{
          visibility: slideIndex === 3 ? 'visible' : 'hidden',
          zIndex: 4,
        }}>
            <nav className='navbarNext'>
              <button className='backButton' onClick={previousSlide}><Icon type="fas" name="arrow-left" /></button>
              <a href='https://www.certicon.cz/'><img className='certiconLogoNext after' src='../img/certicon-logo.png' /></a>
            </nav>

            <header className='pageHeaderNext'>Vyber...</header>
            <form onSubmit={e => {
              e.preventDefault();
              nextSlide();
            }}>
            <p>Jazyky:</p>
            <div className='boxLanguage'>
              {languages.map(language => (
                <div key={language.language_id}>
                  <input type="checkbox" onChange={() => toggleLanguageActive(language.language_id)} />
                  <label>{language.name}</label>
                  
                </div>
              ))}
              </div><br />
                <button className='submitButtonNext'><Icon type="fas" name="arrow-right" /></button>
            </form>

          </section>
        

          <section className='sec-5' style={{
            visibility: slideIndex === 4 ? 'visible' : 'hidden',
            zIndex: 5,
          }}>
              <nav className='navbarNext'>
                <button className='backButton' onClick={previousSlide}><Icon type="fas" name="arrow-left" /></button>
                <a href='https://www.certicon.cz/'><img className='certiconLogoNext after' src='../img/certicon-logo.png' /></a>
              </nav>

              <header className='pageHeaderNext'>Vyber...</header>
              <form onSubmit={e => {
                e.preventDefault();
                nextSlide();
              }}>
              <p>Technologie:</p>
              <div className='boxTechnology'>
                {technologies.map(technology => (
                  <div key={technology.technology_id}>
                    <input type="checkbox" onChange={() => toggleTechnologyActive(technology.technology_id)} />
                    <label>{technology.name}</label>
                  </div>
                ))}</div><br />
                  <button className='submitButtonNext'><Icon type="fas" name="arrow-right" /></button>
              </form>

            </section>

            <section className='sec-6' style={{
              visibility: slideIndex === 5 ? 'visible' : 'hidden',
              zIndex: 6,
            }}>
              <nav className='navbarNext'>
                <button className='backButton' onClick={previousSlide}><Icon type="fas" name="arrow-left" /></button>
                <a href='https://www.certicon.cz/'><img className='certiconLogoNext after' src='../img/certicon-logo.png' /></a>
              </nav>

              <header className='pageHeaderNext'>Vyber...</header>
              <form onSubmit={e => {
                e.preventDefault();
                nextSlide();
              }}>
                <span>Souhlasím s gdpr:</span>
                <input
                  className='gdprChceckbox'
                  type="checkbox"
                  name='gdpr'
                  onChange={e => setGdpr(e.target.checked)}
                />
                <br />
                  <button className='submitButtonNext'><Icon type="fas" name="arrow-right" /></button>
              </form>

            </section>

            <section className='sec-7' style={{
              visibility: slideIndex === 6 ? 'visible' : 'hidden',
              zIndex: 7,
            }}>
              <nav className='navbarMain'>
                <a href='https://www.certicon.cz/'><img className='certiconLogoMain' src='../img/certicon-logo.png' /></a>
              </nav>

              <header className='pageHeaderNext'>Děkujeme.</header>    
              <p className='pageInfoNext'>O akcích nebo pracovních nabídkách tě budeme kontaktovat emailem.</p>            

            </section>
           
      </div>
    </div>
  );
}

export default HomePage;
