import Button from '../Button';

import './Dialog.styles.scss';

const Dialog = ({ title, shown, closeHandler, confirmHandler, children }) =>
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
          <Button handler={closeHandler ? () => closeHandler() : undefined} text="Zavřít" />
          <Button handler={confirmHandler ? () => confirmHandler() : undefined} text="Pokračovat" variant="primary" />
        </div>
      </div>
    </div>
  );

export default Dialog;
