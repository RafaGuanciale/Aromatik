import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import HeaderUi from "../components/HeaderUi.js";
import {
  cardConfig,
  validatorConfig,
  cardData,
  loginForm,
  profileEditForm,
  newCardForm,
  headerProfileBtn,
  profileEditBtn,
  newCardBtn,
  inspiredBtn,
  categoriesCardsBtn,
  cardList,
  exitBtn,
  defaultImageLink,
  profileNameInput,
  profileDescriptionInput,
} from "../utils/consts.js";
let isLoggedIn = false;

//// Validação de formulários ////
const loginFormValidator = new FormValidator(validatorConfig, loginForm);
const profileEditFormValidator = new FormValidator(
  validatorConfig,
  profileEditForm,
);
const newCardFormValidator = new FormValidator(validatorConfig, newCardForm);

//// initial Cards ////
const collectionCards = new Section(
  {
    data: cardData,
    renderer: (item) => {
      const card = new Card(item, cardConfig);
      const cardElement = card.generateCard();
      collectionCards.addItem(cardElement);
    },
  },
  ".cards",
);

//// popups ////
const loginPopup = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      const loginUser = data.loginUser;
      const loginPassword = data.loginPassword;
      isLoggedIn = true;
      loginPopup.close();
      headerUi.loggedIn();
    },
  },
  "#login-popup",
);
const profileEditPopup = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      userInfo.setUserInfo({
        profileName: data.profileName,
        profileDescription: data.profileDescription,
      });
      profileEditPopup.close();
    },
  },
  "#profile-edit-popup",
);
const newCardPopup = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      const name = data.cardName;
      const brand = data.cardBrand;
      const link = defaultImageLink;
      const card = new Card({ name, brand, link }, cardConfig);
      const cardElement = card.generateCard();
      collectionCards.addItem(cardElement);
      newCardPopup.close();
    },
  },
  "#newCard-popup",
);

const inspiredPopup = new Popup("#inspired-popup");
const profilePopup = new Popup("#profile-popup");
const cardPopup = new Popup("#card-popup");
const categoriesPopup = new Popup("#categories-popup");

//// Instancias ////
const userInfo = new UserInfo({
  profileName: document.querySelector(".profile__name"),
  profileDescription: document.querySelector(".profile__description"),
});

const headerUi = new HeaderUi({
  profileIcon: "#profile-icon",
  profileText: ".header__action-text",
});

//// Botóes de open Popup////
headerProfileBtn.addEventListener("click", () => {
  if (isLoggedIn) {
    profilePopup.open();
  } else {
    loginPopup.open();
    loginFormValidator.resetValidation();
  }
});
profileEditBtn.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  profileNameInput.value = data.profileName;
  profileDescriptionInput.value = data.profileDescription;
  profileEditPopup.open();
});
newCardBtn.addEventListener("click", () => {
  newCardPopup.open();
});
inspiredBtn.addEventListener("click", () => {
  inspiredPopup.open();
})
cardList.addEventListener("click", (evt) => {
  const card = evt.target.closest(".card");
  if (!card) return;
  cardPopup.open();
});
exitBtn.addEventListener("click", () => {
  const confirmacao = confirm("Tem certeza que deseja sair?");
  if (!confirmacao) {
    return;
  }
  isLoggedIn = false;
  profilePopup.close();
  headerUi.loggedOut();
});
categoriesCardsBtn.addEventListener("click", () => {
  console.log("clicado");
  categoriesPopup.open();
})

loginFormValidator.setEventListeners();
profileEditFormValidator.setEventListeners();
newCardFormValidator.setEventListeners();
collectionCards.renderItems();
loginPopup.setEventListeners();
profileEditPopup.setEventListeners();
newCardPopup.setEventListeners();
inspiredPopup.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();
categoriesPopup.setEventListeners();
