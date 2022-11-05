import { Link } from 'react-router-dom';

import ContentWrapper from '../ContentWrapper';

const PageNavigation = () =>
  (
    <nav>
      <ContentWrapper>
        <h2>Page Navigation</h2>
        <ul>
          <li><Link to="/admin">Home</Link></li>
        </ul>
      </ContentWrapper>
    </nav>
  );

export default PageNavigation;
