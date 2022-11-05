import Button from '../Button';

import './Dialog.styles.scss';

const Dialog = ({ title, shown, closeHandler, children }) =>
  (
    <div className="dialog" style={{
      display: shown ? 'flex' : 'none',
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
          <Button handler={closeHandler ?? undefined} text="Pokračovat" variant="primary" />
        </div>
      </div>
    </div>
  );

export default Dialog;
