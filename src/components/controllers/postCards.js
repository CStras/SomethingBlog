import Card from "../models/postCardsModel.js";
import { SERVER_ERROR_STATUS } from "../utils/errors.js";

const getAllCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch((err) => {
      console.error(err);
      res.status(SERVER_ERROR_STATUS).send(`Error: ${err}`);
    });
};

const createCard = (req, res) => {
  const { title, content, imageUrl, author } = req.body; // this is when the card is submitted
  const owner = req.user._id;
  Item.create({ title, content, imageUrl, owner, author })
    .then((item) => {
      res.status(REQUEST_CREATED).send(item);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(BAD_REQUEST_STATUS).send({ message: "Invalid data" });
      }
      return res
        .status(SERVER_ERROR_STATUS)
        .send({ message: "An error has occurred on the server" });
    });
};

module.exports = { createCard, getAllCards };
