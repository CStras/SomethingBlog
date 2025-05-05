import "./AddPostModal.css";
import { FormValidation } from "../../utils/FormValidation";
import { useState, useEffect } from "react";

const AddPostModal = ({ isOpen, closeActiveModal, onAddPost }) => {
  const { values, resetForm, handleChange, errors, isValid } = FormValidation();

  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const [author, setAuthor] = useState("");
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const [date, setDate] = useState("");
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const [description, setDescription] = useState("");
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const [url, setUrl] = useState([]);
  const [urlArray, setUrlArray] = useState([]);
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  // this ^^ may all be bloat as the form doesn't need to be validated at
  // this moment.

  const [urlList, setUrlList] = useState([{ url: "" }]);

  const AddURL = () => {
    if (urlList.length < 5) {
      setUrlList((prevURLs) => [...prevURLs, { url: "" }]);
    }
  };

  const handleSubmit = () => {
    setUrlArray((prevURLs) => [...prevURLs, url]);

    onAddPost({
      title: title,
      author: author,
      date: date,
      description: description,
      url: [...urlArray, url],
    });
  };

  return (
    <div className={`modal ${isOpen && "modal_open"}`}>
      <div className="modal__PostContainer">
        <h2 className="modal__PostTitle">Add a new post</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        />
        <form className="modal__PostForm" noValidate>
          <label htmlFor="title" className="modal__PostLabel">
            Title
            <input
              className="modal__PostInput"
              type="text"
              name="title"
              required
              value={title}
              onChange={handleTitleChange}
            />
            <span className="modal__error">{errors.title}</span>
          </label>
          <label htmlFor="author" className="modal__PostLabel">
            Author
            <input
              className="modal__PostInput"
              type="text"
              name="author"
              required
              value={author}
              onChange={handleAuthorChange}
            />
            <span className="modal__error">{errors.author}</span>
          </label>
          <label htmlFor="date" className="modal__PostLabel">
            Date
            <input
              className="modal__PostInput"
              type="text"
              name="date"
              required
              value={date}
              onChange={handleDateChange}
            />
            <span className="modal__error">{errors.author}</span>
          </label>
          <label htmlFor="description" className="modal__PostLabel">
            Description
            <textarea
              className="modal__PostInput"
              type="text"
              name="description"
              required
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            <span className="modal__error">{errors.description}</span>
          </label>
          {urlList.map((singleUrl, index) => {
            return (
              <label key={index} htmlFor="url" className="modal__PostLabel">
                URL
                <input
                  className="modal__PostInput"
                  type="url"
                  name="url"
                  value={url}
                  onChange={handleUrlChange}
                />
                <span className="modal__error">{errors.url}</span>
              </label>
            );
          })}
        </form>

        <button className="modal__add-btn" onClick={AddURL}>
          Add URL
        </button>

        <button
          type="submit"
          className="modal__PostSubmit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddPostModal;
