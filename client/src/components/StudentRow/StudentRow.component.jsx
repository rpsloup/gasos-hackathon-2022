import './StudentRow.styles.scss';

const StudentRow = ({ student }) =>
  (
    <div className="student-row">
      <p>{student.name}</p>
      <p>{student.locality}</p>
      <p>{student.school}</p>
      <p>{student.end_year}</p>
    </div>
  );

export default StudentRow;
