import "../ModalWithForm/ModalWithForm.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { FormValidation } from "../../utils/FormValidation";

const RegisterModal = ({
  isOpen,
  setActiveModal,
  closeActiveModal,
  handleRegister,
}) => {
  const { values, resetForm, handleChange, errors, isValid } = FormValidation();

  const handleSubmit = () => {
    handleRegister({
      name: values.name,
      email: values.email,
      password: values.password,
      avatar: values.avatar,
    });
  };

  return (
    <ModalWithForm
      titleText="Register"
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      firstBtnText="Sign up"
      secondBtnText=" Log in"
      secondBtnClick={() => setActiveModal("login")}
      formValid={isValid}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="name">
        Name
        <input
          className="modal__input"
          type="text"
          id="name"
          name="name"
          minLength="2"
          maxLength="60"
          placeholder="Enter Name"
          onChange={handleChange}
          value={values.name || ""}
          required
        />
        <span
          className={`modal__input-error ${
            errors.name ? "modal__input-error_visible" : ""
          }`}
          id="name-error"
        ></span>
      </label>

      <label className="modal__label" htmlFor="email">
        Email
        <input
          className="modal__input"
          type="email"
          id="email"
          name="email"
          minLength="2"
          maxLength="60"
          placeholder="Enter email"
          onChange={handleChange}
          value={values.email || ""}
          required
        />
        <span
          className={`modal__input-error ${
            errors.email ? "modal__input-error_visible" : ""
          }`}
          id="email-error"
        >
          Invalid email address
        </span>
      </label>

      <label className="modal__label" htmlFor="password">
        Password
        <input
          className="modal__input"
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          minLength="2"
          onChange={handleChange}
          value={values.password || ""}
          required
        />
        <span
          className={`modal__input-error ${
            errors.password ? "modal__input-error_visible" : ""
          }`}
          id="password-error"
        >
          {errors.password}
        </span>
      </label>

      <label className="modal__label" htmlFor="avatar">
        Avatar
        <input
          className="modal__input"
          type="avatar"
          id="avatar"
          name="avatar"
          placeholder="Enter avatar URL"
          minLength="2"
          onChange={handleChange}
          value={values.avatar || ""}
          required
        />
        <span
          className={`modal__input-error ${
            errors.avatar ? "modal__input-error_visible" : ""
          }`}
          id="avatar-error"
        >
          {errors.avatar}
        </span>
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
