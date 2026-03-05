///// Cards Iniciais /////
export const cardData = [
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

///// Modais /////
export const loginModal = document.querySelector("#login-popup");
export const profileModal = document.querySelector("#profile-popup");
export const editProfileModal = document.querySelector("#profile-edit-popup");
export const newCardModal = document.querySelector("#newCard-popup");
export const inspiredModal = document.querySelector("inspired-popup");
export const cardModal = document.querySelector("#card-popup");
export const categoriesModal = document.querySelector("#categories-popup");

/////  Formulários /////
export const loginForm = loginModal.querySelector("#login-form");
export const profileEditForm =
  editProfileModal.querySelector("#profile-edit-form");
export const newCardForm = newCardModal.querySelector("#newCard-form");

///// Botões /////
export const headerProfileBtn = document.querySelector("#header-user-btn");
export const profileEditBtn = profileModal.querySelector("#profile-edit-btn");
export const settingsBtn = document.querySelector("#profile-edit-settings-btn");
export const exitBtn = profileModal.querySelector("#profile-edit-leave-btn");
export const newCardBtn = document.querySelector("#new-card-btn");
export const inspiredBtn = document.querySelector("#inspired-btn");
export const categoriesCardsBtn = document.querySelector("#categories-cards");

///// seletores /////
export const profileName = profileModal.querySelector(".profile__name");
export const profileDescription = profileModal.querySelector(
  ".profile__description",
);
export const cardList = document.querySelector(".cards");
export const card = cardList.querySelector(".card");

////// Variáveis /////
export const defaultImageLink =
  "images/muhammad-sulyman-MDMrNFnyFQk-unsplash.jpg";

///// inputs /////
export const profileNameInput = document.querySelector(
  ".form__profile-edit-name",
);
export const profileDescriptionInput = document.querySelector(
  ".form__profile-edit-description",
);

////// Configs /////
export const cardConfig = {
  cardTemplateSelector: "#card-template",
  deleteButton: ".card__delete-button",
  cardImage: ".card__image",
};
export const validatorConfig = {
  formInputsSelector: ".form__input",
  formButtonSelector: ".form__button",
  inputErrorClass: "form__input_type__error",
  inputValidClass: "form__input_type__valid",
  errorElementSelector: "",
  errorActiveClass: "",
};

///// User Infos /////
export const userData = {
  profileName: document.querySelector(".profile__name"),
  profileDescription: document.querySelector(".profile__description"),
  loginUser: document.querySelector(".login__form-input-username"),
  loginPassword: document.querySelector(".login__form-input-passwordkey"),
};
