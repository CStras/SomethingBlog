import "./Header.css";
import menu from "../../assets/menu-dots-svgrepo-com.svg";

function Header() {
  return (
    <header class="header">
      <h1 class="header__title">THE SOMETHING BLOG</h1>
      <div class="header__drop-menu">
        <img class="header__menu" src={menu} />
        <div class="header__drop header__drop-b4 VisToggle">
          <div class="drop__circle drop__circle-b4"></div>
          <h2 class="first-h">asdfasdf</h2>
          <h2>asdfasdfasdfafsdasdf</h2>
          <h2>asdfasdf</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
