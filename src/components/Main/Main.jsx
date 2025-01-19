import "./Main.css";
import add from "../../assets/add-btn.svg";
import stock from "../../assets/istockphoto-1149282247-1024x1024.jpg";
import HomeContent from "../HomeContent/HomeContent";
import NavBar from "../NavBar/NavBar";

function Main() {
  return (
    <>
      <NavBar />
      <main class="homeContent">
        <section class="posts page__section">
          <HomeContent />
          <section class="cards">
            <img class="cards__image" id="add-post-btn" src={add} />
            <div class="card">
              <div class="card__content">
                <h2 class="card__title">title</h2>
                <p class="card__description">
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
              <img class="card__img" src={stock} />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Main;
