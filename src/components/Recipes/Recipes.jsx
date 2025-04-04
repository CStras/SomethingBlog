import "../PostCard/PostCard.css";
import Nav from "../Nav/Nav";
import HeaderNav from "../HeaderNav/HeaderNav";
import recipes from "../../utils/recipes";
import ItemCard from "../ItemCard/ItemCard";

function Recipes({ isLoggedIn, handleSignIn, handleSignOut }) {
  return (
    <>
      <HeaderNav
        isLoggedIn={isLoggedIn}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
      />
      <Nav />
      <div className="recipes">
        <h1 className="about__title">Recipes</h1>
        <p className="about__description">
          I am an advid cook and baker. One of my favorite past times is to
          combine recipes and tastes that I haven't tried into dishes I love.
        </p>
      </div>
      <main className="content">
        <section className="posts page__section">
          <section className="cards">
            <div className="cards">
              {recipes.map(
                (card) => (console.log(card), (<ItemCard item={card} />))
              )}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Recipes;
