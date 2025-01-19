import "./Main.css";
import add from "../../assets/add-btn.svg";
import stock from "../../assets/istockphoto-1149282247-1024x1024.jpg";
import HomeContent from "../HomeContent/HomeContent";
import NavBar from "../NavBar/NavBar";

function Main() {
  return (
    <>
      <NavBar />
      <main className="homeContent">
        <section className="posts page__section">
          <HomeContent />
          <section className="cards">
            <img className="cards__image" id="add-post-btn" src={add} />
            <div className="card">
              <div className="card__content">
                <h2 className="card__title">title</h2>
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

export default Main;
