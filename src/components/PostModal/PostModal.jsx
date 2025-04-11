import "../ModalWithForm/ModalWithForm.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { FormValidation } from "../../utils/FormValidation";
import { Link } from "react-router-dom";
import "./PostModal.css";

const PostModal = ({
  card,
  isOpen,
  setActiveModal,
  closeActiveModal,
  handleLogin,
}) => {
  const { values, resetForm, handleChange, errors, isValid } = FormValidation();

  return (
    <ModalWithForm
      titleText={card.title}
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
    >
      <div className="card-modal__author">
        {card.author} {card.date || ""}
      </div>
      {card.url &&
        card.url.map((item) => {
          return <img className="card-modal__img" src={item} />;
        })}
      <p className="card-modal__description">{card.description}</p>

      {card.ingredients && (
        <div className="card-modal__ingredients">
          <ul>
            {(card.ingredients &&
              card.ingredients.map((item) => {
                return <li>{item}</li>;
              })) ||
              ""}
          </ul>
          {(card.directions &&
            card.directions.map((item) => {
              return <p>{item}</p>;
            })) ||
            ""}
        </div>
      )}
      <div className="card__btns">
        {(card.repoLink && (
          <Link target="_blank" className="card__btn-link" to={card.repoLink}>
            {" "}
            Repo
          </Link>
        )) ||
          ""}
        {(card.siteLink && (
          <Link target="_blank" className="card__btn-link" to={card.siteLink}>
            {" "}
            Website
          </Link>
        )) ||
          ""}
      </div>
    </ModalWithForm>
  );
};

export default PostModal;
