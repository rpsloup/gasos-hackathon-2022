import Button from '../Button';

import './Dialog.styles.scss';

const Dialog = ({ title, shown, children }) =>
  (
    <div className="dialog" display={{
      display: shown ? 'block' : 'none',
    }}>
      <div className="dark-effect" />
      <div className="dialog-content">
        <div className="dialog-header">
          <h3>{title}</h3>
        </div>
        <div className="dialog-text">
          {children}
        </div>
        <div className="dialog-footer">
          <Button text="Zavřít" />
          <Button text="Pokračovat" />
        </div>
      </div>
    </div>
  );

export default Dialog;
