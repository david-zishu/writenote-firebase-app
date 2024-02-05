import PageNotFoundImage from "../assets/images/page-not-found.jpg";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <section className="pageNotFound">
      <p>404 | Page Not Found</p>
      <img src={PageNotFoundImage} alt="Page Not Found" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  );
};

export default PageNotFound;
