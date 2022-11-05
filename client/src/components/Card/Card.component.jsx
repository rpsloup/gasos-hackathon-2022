import './Card.styles.scss';

const Card = ({ icon, text, handler }) =>
  (
    <div className="card" onClick={handler ?? undefined}>
      {icon}
      <span className="card-text">{text}</span>
    </div>
  );

export default Card;
