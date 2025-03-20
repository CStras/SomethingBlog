import "./HeaderNav.css";
import profile from "../../assets/default-profile.png";

function HeaderNav({ isLoggedIn }) {
  function onclick() {
    console.log("clicked");
  }

  return (
    <header className="header">
      <h1 className="header__title">THE SOMETHING BLOG</h1>
      {!isLoggedIn && (
        <div className="header__profile-login">
          <button onClick={onclick} className="header__profile-signup-btn">
            Sign in
          </button>
        </div>
      )}
      {isLoggedIn && (
        <div className="header__profile">
          <img className="header__profile-img" src={profile}></img>
          <div className="header__profile-logout">
            <button onClick={onclick} className="header__profile-signout-btn">
              Sign out
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderNav;
