const initialCards = [
  {
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    link: "images/dolcegabbana_lightblue.jpg",
  },
  {
    name: "Bleu de Chanel",
    brand: "Chanel",
    link: "images/Bleu.jpg",
  },
  {
    name: "Bleu Noir",
    brand: "Narciso Rodriguez",
    link: "images/narcisorodriguez_bleu_noir_parfum-redimensionado-para-420x420.jpeg",
  },
  {
    name: "Acqua di Gio parfum",
    brand: "Giorgio Armani",
    link: "images/acqua_di_gio_parfum-redimensionado-para-420x420.jpeg",
  },
  {
    name: "Terre d'Hermès",
    brand: "Hermes",
    link: "images/Hermes-Terre-Eau-Givree_vs1-redimensionado-para-420x420.jpeg",
  },
];

const profileModal = document.querySelector("#profile-popup");
const addCardModal = document.querySelector("#newCard-popup");
const profileBtn = document.querySelector(".header__action--profile");
const addCardBtn = document.querySelector(".collection__add-btn");
const addCardForm = addCardModal.querySelector("#popup__newCard-form");
const addCardNameInput = addCardForm.querySelector(".form__newCard-name");
const addCardBrandInput = addCardForm.querySelector(".form__newCard-brand");
const settingsBtn = document.querySelector(".settings__button");
const profileName = profileModal.querySelector(".profile__name");
const profileDescription = profileModal.querySelector(".profile__description");
const closeProfileBtn = profileModal.querySelector(".profile__close");
const closeAddBtn = addCardModal.querySelector(".popup__close-addCard");
const cardList = document.querySelector(".cards");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardModal = document.querySelector("#card-popup");
const card = cardList.querySelector(".card");
const closeCardBtn = cardModal.querySelector(".popup__close-card");

profileBtn.addEventListener("click", () => {
  openModal(profileModal);
});

addCardBtn.addEventListener("click", () => {
  openModal(addCardModal);
});

closeProfileBtn.addEventListener("click", () => {
  closeModal(profileModal);
});
closeAddBtn.addEventListener("click", () => {
  closeModal(addCardModal);
});

closeCardBtn.addEventListener("click", () => {
  closeModal(cardModal);
});

cardList.addEventListener("click", (evt) => {
  const card = evt.target.closest(".card");
  if (!card) return;
  openModal(cardModal);
});

function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.body.classList.add("body__no-scroll");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.body.classList.remove("body__no-scroll");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function getCardElement(name, brand, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector(".card__name");
  const cardBrand = cardElement.querySelector(".card__brand");
  const cardImage = cardElement.querySelector(".card__image");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardName.textContent = name;
  cardBrand.textContent = brand;
  cardImage.src = link;
  cardImage.alt = name;

  cardDeleteBtn.addEventListener("click", (evt) => {
    evt.stopPropagation();
    cardElement.remove();
  });

  return cardElement;
}

function renderCard(name, brand, link, box) {
  const cardCreated = getCardElement(name, brand, link);
  box.prepend(cardCreated);
}

initialCards.forEach((card) => {
  renderCard(card.name, card.brand, card.link, cardList);
});

addCardForm.addEventListener("submit", handleCardFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const name = addCardNameInput.value;
  const brand = addCardBrandInput.value;
  const link = "images/muhammad-sulyman-MDMrNFnyFQk-unsplash.jpg";
  renderCard(name, brand, link, cardList);
  closeModal(addCardModal);
  evt.target.reset();
}
