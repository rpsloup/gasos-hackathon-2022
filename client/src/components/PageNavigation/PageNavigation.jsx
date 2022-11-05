import { Link } from 'react-router-dom';

import ContentWrapper from '../ContentWrapper';

import './PageNavigation.styles.scss';

const PageNavigation = () =>
  (
    <nav className="page-navigation">
      <ContentWrapper>
        <div className="nav-logo" />
        <ul className="nav-items">
          <li className="nav-item"><Link to="/admin">Home</Link></li>
          <li className="nav-item"><Link to="/admin/email">Emailing</Link></li>
          <li className="nav-item"><Link to="/admin">Link</Link></li>
          <li className="nav-item"><Link to="/admin">Link</Link></li>
          <li className="nav-item"><Link to="/admin">Link</Link></li>
        </ul>
      </ContentWrapper>
    </nav>
  );

export default PageNavigation;
