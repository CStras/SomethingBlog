import "../PostCard/PostCard.css";

function ItemCard({ item, handlePostClick }) {
  function onCardClick() {
    handlePostClick(item);
  }

  return (
    <div className="card" onClick={onCardClick}>
      <div className="card__content">
        <div className="card__title_section">
          <h2 className="card__title">{item.title}</h2>
          <h3 className="card__author">
            {item.author} {item.date || ""}
          </h3>
        </div>
        <p className="card__description">{item.description}</p>
      </div>
      {item.url && <img className="card__img" src={item.url[0]} />}
    </div>
  );
}

export default ItemCard;
