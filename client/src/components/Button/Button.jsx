import './Button.styles.scss';

const Button = ({ text, handler }) =>
  (
    <button className="button" onClick={handler ?? undefined}>{text}</button>
  );

export default Button;
