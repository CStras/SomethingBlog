import "./PostCard.css";
import stock from "../../assets/istockphoto-1149282247-1024x1024.jpg";
import Nav from "../Nav/Nav";
import HeaderNav from "../HeaderNav/HeaderNav";
import add from "../../assets/add-btn.svg";

function PostCard({
  isLoggedIn,
  handleSignIn,
  handleSignOut,
  handleLoginClick,
  handlePostClick,
}) {
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
            <div className="cards__add-post-btn-container">
              <img
                onClick={handlePostClick}
                className="cards__add-post-btn"
                id="add-post-btn"
                src={add}
              />
            </div>

            <div className="card">
              <div className="card__content">
                <div className="card__title_section">
                  <h2 className="card__title">My favorite fruit</h2>
                  <h3 className="card__author">Colin Strasser</h3>
                </div>
                <p className="card__description">
                  description and contentdescription and contentdescription and
                  contentdescription and contentdescription and
                  contentdescription and contentdescription and
                  contentdescription and contentdescription and
                  contentdescription and contentdescription and
                  contentdescription and contentdescription and
                  contentdescription and contentdescription and
                  contentdescription and contentdescription and
                  contentdescription and contentdescription and
                  contentdescription and contentdescription and content
                </p>
              </div>
              <img className="card__img" src={stock} />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default PostCard;
