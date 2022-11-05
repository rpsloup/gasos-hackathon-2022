import './ContentWrapper.styles.scss';

const ContentWrapper = ({ children }) =>
  (
    <div className="content-wrapper">
      {children}      
    </div>
  );

export default ContentWrapper;
