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
        <ul className="nav-items">
          <li className="nav-item"><Link to="/admin">Home</Link></li>
          <li className="nav-item"><Link to="/admin/email">Emailing</Link></li>
          <li className="nav-item"><Link to="/admin/import">Import</Link></li>
          <li className="nav-item"><Link to="/admin/export">Export</Link></li>
        </ul>
      </ContentWrapper>
    </nav>
  );

export default PageNavigation;
