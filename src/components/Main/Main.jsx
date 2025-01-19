import "./Main.css";
import add from "../../assets/add-btn.svg";
import HomeContent from "../HomeContent/HomeContent";
import NavBar from "../NavBar/NavBar";
import PostCard from "../PostCard/PostCard";

function Main() {
  return (
    <>
      <NavBar />
      <main className="content">
        <section className="posts page__section">
          <HomeContent />
          <section className="cards">
            <img className="cards__add-post-btn" id="add-post-btn" src={add} />
            <PostCard />
          </section>
        </section>
      </main>
    </>
  );
}

export default Main;
