import Icon from '../Icon';
import Button from '../Button';

import './StudentBox.styles.scss';

const StudentBox = ({ student }) => {
  const handleDelete = (student) => {
    if (window.confirm(`Are you sure you want to delete student ${student.name} (ID: ${student.student_id})?`)) {
      fetch('http://192.168.43.201:3001/student', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: student.student_id,
        }),
      });
    }
  }

  return (
    <div className="student-box">
      <h3>{student.name}</h3>
      <div>
        <Icon name="envelope" type="fas" />
        <span>{student.email}</span>
      </div>
      <div>
        <Icon name="location-dot" type="fas" />
        <span>{student.locality}</span>
      </div>
      <div>
        <Icon name="chalkboard" type="fas" />
        <span>{student.school}</span>
      </div>
      <div>
        <Icon name="graduation-cap" type="fas" />
        <span>{student.end_year}</span>
      </div>
      <div className="buttons">
        <Button text="Upravit" />
        <Button text="Odebrat" handler={() => handleDelete(student)} />
        <Button text="Zaslat email" />
      </div>
    </div>
  );
}

export default StudentBox;
