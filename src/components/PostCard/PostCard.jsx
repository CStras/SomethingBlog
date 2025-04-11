import "./PostCard.css";
import stock from "../../assets/istockphoto-1149282247-1024x1024.jpg";
import Nav from "../Nav/Nav";
import HeaderNav from "../HeaderNav/HeaderNav";
import add from "../../assets/add-btn.svg";
import ItemCard from "../ItemCard/ItemCard";
import cards from "../../utils/constants";

function PostCard({
  isLoggedIn,
  handleSignIn,
  handleSignOut,
  handleLoginClick,
  handlePostClick,
}) {
  /*              <div className="card">
  <div className="card__content">
  <div className="card__title_section">
    <h2 className="card__title">
      My fav ori asdfasd fasd fas dfa asdf asdf as dfas df
      asdfas df asd f ste fruit
    </h2>
    <h3 className="card__author">Colin Strasser</h3>
  </div>
  <p className="card__description">
    description and cont entde scripti on and con tentdesc ipti
    on and cont entdescr iption and contentde scripti on and
    conte ntdesc ripti on and co ntent descr iption and c onten
    td esc ri ption and con tentd es cri ption and con ten tde
    scrip ti on and con tentd es rip ti on and c onte ntdes
    cription and c onte ntd es cripti on and cont e ntd es cript
    ion and c ont en des rip tion and cont e ntde script ion and
    con t entd e scri ption and con te ntdescr ipti on and cont
    ent d escr ip tion and con te ntdescr ipti on and con t entd
    esc ri ption and c ontent
  </p>
</div>
<img className="card__img" src={stock} />
</div> */
  return (
    <>
      <HeaderNav
        isLoggedIn={isLoggedIn}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
        handleLoginClick={handleLoginClick}
      />
      <Nav />
      <main className="content">
        <section className="posts page__section">
          <section className="cards">
            {isLoggedIn && (
              <div className="cards__add-post-btn-container">
                <img
                  onClick={handlePostClick}
                  className="cards__add-post-btn"
                  id="add-post-btn"
                  src={add}
                />
              </div>
            )}

            <div className="cards">
              <p>
                DISCLAIMER: This site is this in production and is being
                activately worked on. See About tab for link to the current
                progress
              </p>
              {cards.map((item) => (
                <ItemCard
                  handlePostClick={handlePostClick}
                  item={item}
                  key={item.id}
                />
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default PostCard;
