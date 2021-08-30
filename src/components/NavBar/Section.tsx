import { Link } from 'react-router-dom';

const Section = ({ component, path }: any): any => (
  <Link to={path}>
    <div
      className="section-card"
    >
      {component}
    </div>
  </Link>
);

export { Section };
