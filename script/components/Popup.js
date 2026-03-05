export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._closeBtn = this._popup.querySelector(".popup__close");
    this._handleEsc = (evt) => this._handleEscBtn(evt);
    this._handleOverlay = (evt) => this._handleOverlayClick(evt);
  }
  setEventListeners() {
    this._closeBtn.addEventListener("click", () => this.close());
  }
  open() {
    this._popup.classList.add("popup_is-opened");
    document.body.classList.add("body__no-scroll");
    document.addEventListener("keydown", this._handleEsc);
    this._popup.addEventListener("click", this._handleOverlay);
  }
  close() {
    this._popup.classList.remove("popup_is-opened");
    this._popup.removeEventListener("click", this._handleOverlay);
    const openedModalList = document.querySelectorAll(".popup_is-opened");
    if (openedModalList.length === 0) {
      document.removeEventListener("keydown", this._handleEsc);
      document.body.classList.remove("body__no-scroll");
    }
  }
  _handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  _handleEscBtn(event) {
    const openedModalList = document.querySelectorAll(".popup_is-opened");
    const openedModal = openedModalList[openedModalList.length - 1];
    if (openedModal === this._popup && event.key === "Escape") {
      this.close();
    }
  }
}
