import { Link } from 'react-router-dom';

import ContentWrapper from '../ContentWrapper';

import './PageNavigation.styles.scss';

const PageNavigation = () =>
  (
    <nav className="page-navigation">
      <ContentWrapper>
        <Link to="/admin">
          <img src="/img/certicon-logo.png" alt="Certicon Logo" className="nav-logo" />
        </Link>
        <div className="nav-hider">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav-items">
          <li className="nav-item"><Link to="/admin">Domů</Link></li>
          <li className="nav-item"><Link to="/admin/email">Emailing</Link></li>
          <li className="nav-item"><Link to="/admin/import">Import</Link></li>
          <li className="nav-item"><Link to="/admin/export">Export</Link></li>
          <li className="nav-item"><Link to="/admin/export">Odhlásit se</Link></li>
        </ul>
      </ContentWrapper>
    </nav>
  );

export default PageNavigation;
