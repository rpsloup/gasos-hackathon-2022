import './StudentBox.styles.scss';

const StudentBox = ({ student }) =>
  (
    <div className="student-box">
      <p>{student.name}</p>
      <p>{student.locality}</p>
      <p>{student.school}</p>
      <p>{student.end_year}</p>
    </div>
  );

export default StudentBox;
