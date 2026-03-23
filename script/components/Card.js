export default class Card {
  constructor(cardData, cardConfig, handleDelete) {
    this._cardData = cardData;
    this._cardConfig = cardConfig;
    this._handleDelete = handleDelete;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardConfig.cardTemplateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__name").textContent = this._cardData.name;
    this._element.querySelector(".card__brand").textContent = this._cardData.brand;
    this._element.querySelector(".card__image").src = this._cardData.link;
    this._element.querySelector(".card__image").alt = this._cardData.name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(this._cardConfig.deleteButton)
      .addEventListener("click", (evt) => {
        evt.stopPropagation();
        this._handleDelete(evt);
      });
  }

  removeCard() {
    if (confirm("Tem certeza que deseja excluir este card?")) {
      this._element.remove();
      this._element = null;
    }
  }
}