import './Card.styles.scss';

const Card = ({ icon, text }) =>
  (
    <div className="card">
      {icon}
      <span className="card-text">{text}</span>
    </div>
  );

export default Card;
