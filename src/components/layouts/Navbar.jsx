import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  let navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleClick = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">
          Start Bootstrap
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">
                Sample Post
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">
                Contact
              </a>
            </li>
            {user ? (
              <li className="nav-item">
                <button className="btn btn-danger " onClick={handleClick}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
