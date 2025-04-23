import "./HeaderNav.css";
import profile from "../../assets/default-profile.png";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

function HeaderNav({ isLoggedIn, handleLoginClick, handleSignOut }) {
  const { avatar } = useContext(AppContext);

  return (
    <header className="header">
      <Link to="/" className="header__title-link">
        <h1 className="header__title">THE SOMETHING BLOG</h1>
      </Link>
      {!isLoggedIn && (
        <div className="header__profile-login" onClick={handleLoginClick}>
          <button
            onClick={handleLoginClick}
            className="header__profile-signup-btn"
          >
            Sign in
          </button>
        </div>
      )}
      {isLoggedIn && (
        <div className="header__profile">
          <img className="header__profile-img" src={avatar || profile}></img>
          <div className="header__profile-logout" onClick={handleSignOut}>
            <button
              className="header__profile-signout-btn"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderNav;
