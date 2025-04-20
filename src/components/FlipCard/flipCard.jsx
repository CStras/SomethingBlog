import "./flipCard.css";

const FlipCard = () => {
  return (
    <>
      <h1 className="experiments__title">The Flip Card</h1>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              alt="Avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              className="flip-card__image"
            />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
