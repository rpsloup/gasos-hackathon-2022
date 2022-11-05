import Icon from '../Icon';

import './StudentBox.styles.scss';

const StudentBox = ({ student }) =>
  (
    <div className="student-box">
      <div>
        <Icon name="user" type="fas" />
        <span>{student.name}</span>
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
      <button>Edit</button>
      <button>Remove</button>
    </div>
  );

export default StudentBox;
