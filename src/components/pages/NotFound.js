import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      404 Not Found
      <Link to="/movies">movies</Link>
    </div>
  );
};

export default NotFound;
