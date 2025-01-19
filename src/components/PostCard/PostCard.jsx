import "./PostCard.css";
import stock from "../../assets/istockphoto-1149282247-1024x1024.jpg";

function PostCard() {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__title_section">
          <h2 className="card__title">My favorite fruit</h2>
          <h3 className="card__author">Colin Strasser</h3>
        </div>
        <p className="card__description">
          description and contentdescription and contentdescription and
          contentdescription and contentdescription and contentdescription and
          contentdescription and contentdescription and contentdescription and
          contentdescription and contentdescription and contentdescription and
          contentdescription and contentdescription and contentdescription and
          contentdescription and contentdescription and contentdescription and
          contentdescription and contentdescription and contentdescription and
          content
        </p>
      </div>
      <img className="card__img" src={stock} />
    </div>
  );
}

export default PostCard;
