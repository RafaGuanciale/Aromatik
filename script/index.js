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
const loginModal = document.querySelector("#login-popup");
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
const closeLoginBtn = loginModal.querySelector(".login__close");
const loginBtn = loginModal.querySelector("#login-button");
const loginForm = loginModal.querySelector("#login-form");
const editProfileBtn = profileModal.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#editProfile-popup");
const profileNameEdit = editProfileModal.querySelector(".edit__profile-name");
const profileDescriptionEdit = editProfileModal.querySelector(
  ".edit__profile-description",
);
const profileEditForm = editProfileModal.querySelector("#edit-profile-form");
const closeProfileEditBtn = editProfileModal.querySelector(".edit__close");
const exitBtn = profileModal.querySelector(".profile__leave-btn");
let isLoggedIn = false;

profileBtn.addEventListener("click", () => {
  if (isLoggedIn) {
    openModal(profileModal);
  } else {
    openModal(loginModal);
  }
});
editProfileBtn.addEventListener("click", () => {
  openModal(editProfileModal);
  fillEditForm();
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
closeLoginBtn.addEventListener("click", () => {
  closeModal(loginModal);
});
closeCardBtn.addEventListener("click", () => {
  closeModal(cardModal);
});
closeProfileEditBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

cardList.addEventListener("click", (evt) => {
  const card = evt.target.closest(".card");
  if (!card) return;
  openModal(cardModal);
});

function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.body.classList.add("body__no-scroll");
  document.addEventListener("keydown", handleEscBtn);
  modal.addEventListener("click", handleOverlayClick);
  const modalForm = modal.querySelector("form");
  if (modalForm) {
    resetForm(modalForm);
  }
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  const openedModalList = document.querySelectorAll(".popup_is-opened");
  if (openedModalList.length === 0) {
    document.removeEventListener("keydown", handleEscBtn);
    document.body.classList.remove("body__no-scroll");
  }
  modal.removeEventListener("click", handleOverlayClick);
}

function handleOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closeModal(event.currentTarget);
  }
}

function handleEscBtn(event) {
  const openedModalList = document.querySelectorAll(".popup_is-opened");
  const openedModal = openedModalList[openedModalList.length - 1];
  if (event.key === "Escape" && openedModalList.length > 0) {
    closeModal(openedModal);
  }
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

function resetForm(elementForm) {
  elementForm.reset();
  const elementInputs = elementForm.querySelectorAll(".form__input");
  elementInputs.forEach((input) => {
    input.classList.remove("form__input_type__error");
    input.classList.remove("form__input_type__valid");
  });
}

loginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  isLoggedIn = true;
  closeModal(loginModal);
  resetForm(loginForm);
  updateHeaderUI();
});

exitBtn.addEventListener("click", (evt) => {
  const confirmacao = confirm("Tem certeza que deseja sair?");
  if (!confirmacao) {
    return;
  }
  isLoggedIn = false;
  closeModal(profileModal);
  updateHeaderUI();
});

function updateHeaderUI() {
  const profileIcon = document.querySelector("#profile-icon");
  const profileText = document.querySelector(".header__action-text");
  if (isLoggedIn) {
    profileIcon.src = "./images/avatar.jpg";
    profileIcon.classList.add("profile-photo");
    profileText.textContent = "Profile";
  } else {
    profileIcon.src = "./images/circle-user_brown.png";
    profileIcon.classList.remove("profile-photo");
    profileText.textContent = "Login";
  }
}

function fillEditForm() {
  profileNameEdit.value = profileName.textContent;
  profileDescriptionEdit.value = profileDescription.textContent;
}

function handleProfileFormEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameEdit.value;
  profileDescription.textContent = profileDescriptionEdit.value;
  closeModal(editProfileModal);
}

profileEditForm.addEventListener("submit", handleProfileFormEditSubmit);
