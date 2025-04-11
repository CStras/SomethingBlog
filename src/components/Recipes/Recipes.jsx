import "./Recipes.css";
import Nav from "../Nav/Nav";
import HeaderNav from "../HeaderNav/HeaderNav";
import recipes from "../../utils/recipes";
import ItemCard from "../ItemCard/ItemCard";

function Recipes({ isLoggedIn, handleSignIn, handleSignOut, handlePostClick }) {
  return (
    <>
      <HeaderNav
        isLoggedIn={isLoggedIn}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
      />
      <Nav />
      <div className="recipes">
        <div className="recipes__header-content">
          <h1 className="header__title">Recipes</h1>
          <p className="header__description">
            I am an advid cook and baker. One of my favorite past times is to
            combine recipes and tastes that I haven't tried into the dishes I
            love.
          </p>
        </div>
      </div>
      <main className="content">
        <section className="posts page__section">
          <section className="card-list">
            <div className="cards">
              {recipes.map((item) => (
                <ItemCard
                  item={item}
                  key={item.id}
                  handlePostClick={handlePostClick}
                />
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Recipes;
