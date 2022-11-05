import './Button.styles.scss';

const Button = ({ text, variant, handler }) =>
  (
    <button className={`button ${variant ? `button--${variant}` : ''}`} onClick={handler ?? undefined}>{text}</button>
  );

export default Button;
