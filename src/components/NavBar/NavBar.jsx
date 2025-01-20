import "./NavBar.css";
import menu from "../../assets/menu-dots-svgrepo-com.svg";

function NavBar() {
  return (
    <header className="header">
      <h1 className="header__title">THE SOMETHING BLOG</h1>
      <div className="header__drop-menu">
        <img className="header__menu" src={menu} />
        <div className="header__drop header__drop-b4 VisToggle">
          <div className="drop__circle drop__circle-b4"></div>
          <h2 className="first-h">asdfasdf</h2>
          <h2>asdfasdfasdfafsdasdf</h2>
          <h2>asdfasdf</h2>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
