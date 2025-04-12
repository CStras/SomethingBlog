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

  const handleReset = () => {
    resetForm({ email: "", password: "" });
  };

  const handleSubmit = () => {
    handleRegister(values, handleReset);
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
    </ModalWithForm>
  );
};

export default RegisterModal;
