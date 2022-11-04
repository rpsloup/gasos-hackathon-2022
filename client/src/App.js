import { useState, useEffect, useRef } from 'react';

function App() {
  const [languages, setLanguages] = useState([]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const localityRef = useRef();
  const schoolRef = useRef();
  const endYearRef = useRef();

  useEffect(() => {
    fetch('http://192.168.43.201:3001/language')
      .then(res => res.json())
      .then(data => setLanguages(data));
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
        languages: "1,8",
        technologies: "1,3",
        gdpr: true,
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
            <input type="checkbox" />
            <label>{language.name}</label>
          </div>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
