export default class Card {
  constructor(cardRole, cardData, cardConfig, handleDelete) {
    this._cardData = cardData;
    this._cardConfig = cardConfig;
    this._handleDelete = handleDelete;
    this._cardRole = cardRole
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardConfig.cardTemplateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    //cards da colection//
    this._element = this._getTemplate();
    this._element.querySelector(".card__name").textContent = this._cardData.name;
    this._element.querySelector(".card__brand").textContent = this._cardData.brand;
    this._element.querySelector(".card__image").src = this._cardData.link;
    this._element.querySelector(".card__image").alt = this._cardData.name;

    //Dataset para popups dos cards//
    this._element.dataset.name = this._cardData.name;
    this._element.dataset.brand = this._cardData.brand;
    this._element.dataset.link = this._cardData.link;
    this._element.dataset.description = this._cardData.description;
    this._element.dataset.family = this._cardData.family;
    this._element.dataset.occasion = this._cardData.occasion;
    this._element.dataset.climate = this._cardData.climate;
    this._element.dataset.intensity = this._cardData.intensity;
    this._element.dataset.role = this._cardRole;

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