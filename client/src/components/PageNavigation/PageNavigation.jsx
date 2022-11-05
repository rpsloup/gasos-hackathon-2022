import { Link } from 'react-router-dom';

const PageNavigation = () =>
  (
    <nav>
      <h2>Page Navigation</h2>
      <ul>
        <li><Link to="/admin">Home</Link></li>
      </ul>
    </nav>
  );

export default PageNavigation;
