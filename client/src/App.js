import { useState, useEffect, useRef } from 'react';

function App() {
  const [languages, setLanguages] = useState([]);
  const [activeLanguages, setActiveLanguages] = useState([]);

  const [technologies, setTechnologies] = useState([]);
  const [activeTechnologies, setActiveTechnologies] = useState([]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
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
        name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
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
      <form onSubmit={handleSubmit}>
        <p>Jméno</p>
        <input type="text" name="fname" ref={firstNameRef} required  />
        <p>Příjmení</p>
        <input type="text" name="lname" ref={lastNameRef} required />
        <p>Lokalita</p>
        <input type="text" name="locality" ref={localityRef} required />
        <p>Škola</p>
        <input type="text" name="school" ref={schoolRef} required />
        <p>Rok ukončení</p>
        <input type="number" ref={endYearRef} required/>
        <p>Jazyky:</p>
        {languages.map(language => (
          <div key={language.language_id}>
            <input type="checkbox" onChange={() => toggleLanguageActive(language.language_id)} />
            <label>{language.name}</label>
          </div>
        ))}
        <p>Technologie:</p>
        {technologies.map(technology => (
          <div key={technology.technology_id}>
            <input type="checkbox" onChange={() => toggleTechnologyActive(technology.technology_id)} />
            <label>{technology.name}</label>
          </div>
        ))}
        <p>Souhlasím s gdpr: <input type="checkbox" name='gdpr' ref={gdprRef}/></p>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );

}


export default App;
