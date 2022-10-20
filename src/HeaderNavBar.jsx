import { NavLink } from "react-router-dom";

export default function HeaderNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Logo
      </NavLink>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/pricing">
              Pricing
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
