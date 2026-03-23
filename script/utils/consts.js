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
export const loginPasswordInput = document.getElementById("password");
export const loginUserInput = document.getElementById("username");
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
/// Submit Buttons ///
export const editProfileSubmitBtn =
  profileEditForm.querySelector(".form__button");
export const loginSubmitBtn = loginForm.querySelector(".form__button");
export const createCardSubmitBtn = newCardForm.querySelector(".form__button");
/// collection initial cards ///
export const initialCards = [
  {
    id: "5",
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    link: "https://http2.mlstatic.com/D_NQ_NP_914124-MLA85253135136_062025-O.webp",
    description:
      "Cítrico fresco com toques de zimbro e alecrim. Evoca o verão mediterrâneo com leveza e descontração, ideal para o calor.",
    tags: ["Cítrico", "Fresco", "Verão", "Dia"],
  },
  {
    id: "10",
    name: "Dior Homme Intense",
    brand: "Dior",
    link: "https://http2.mlstatic.com/D_NQ_NP_754743-MLA80116075781_102024-O.webp",
    description:
      "Íris empoado e aveludado com lavanda, âmbar e cedro. Sofisticado e sensual, com presença elegante e envolvente para ocasiões especiais.",
    tags: ["Floral", "Amadeirado", "Inverno", "Noite"],
  },
];
