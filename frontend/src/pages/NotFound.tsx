import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <Link to="/">Go back to the main page</Link>
    </div>
  );
};
