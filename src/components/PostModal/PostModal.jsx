import "../ModalWithForm/ModalWithForm.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { FormValidation } from "../../utils/FormValidation";

const PostModal = ({
  isOpen,
  setActiveModal,
  closeActiveModal,
  handleLogin,
}) => {
  const { values, resetForm, handleChange, errors, isValid } = FormValidation();

  const handleReset = () => {
    resetForm({ email: "", password: "" });
  };

  const handleSubmit = () => {
    handleLogin(values, handleReset);
  };

  return (
    <ModalWithForm
      titleText="Log in"
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      firstBtnText="Log in"
      secondBtnText=" Sign up"
      secondBtnClick={() => setActiveModal("register")}
      formValid={isValid}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="title">
        Title:
        <input
          className="modal__input"
          type="text"
          id="title"
          name="title"
          minLength="2"
          maxLength="60"
          placeholder="Enter title"
          onChange={handleChange}
          value={values.title || ""}
          required
        />
        <span
          className={`modal__input-error ${
            errors.title ? "modal__input-error_visible" : ""
          }`}
          id="title-error"
        >
          {errors.title}
        </span>
      </label>

      <label className="modal__label" htmlFor="content">
        Content:
        <textarea
          className="modal__input  modal__input-content"
          type="text"
          id="content"
          name="content"
          placeholder="Enter content"
          minLength="2"
          onChange={handleChange}
          value={values.content || ""}
          required
        />
        <span
          className={`modal__input-error ${
            errors.content ? "modal__input-error_visible" : ""
          }`}
          id="content-error"
        >
          {errors.content}
        </span>
      </label>

      <label className="modal__label" htmlFor="image">
        Add an image:
        <input
          className="modal__input"
          type="url"
          id="image"
          name="image"
          placeholder="Enter image url"
          minLength="2"
          onChange={handleChange}
          value={values.image || ""}
        />
        <span
          className={`modal__input-error ${
            errors.content ? "modal__input-error_visible" : ""
          }`}
          id="content-error"
        >
          {errors.content}
        </span>
      </label>
    </ModalWithForm>
  );
};

export default PostModal;
