import "./flipCard.css";

const FlipCard = () => {
  return (
    <>
      <h1 className="experiments__title">The Flip Card</h1>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              alt="Avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              className="flip-card__image"
            />
          </div>
          <div class="flip-card-back">
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
