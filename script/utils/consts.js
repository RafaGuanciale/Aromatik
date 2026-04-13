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
export const categoriesCardsBtn = document.querySelector(".categories__card-overlay-button");
export const showPasswordBtn = document.querySelector(".login__password-toggle");
export const homeLoginBtn = document.getElementById("home__loginBtn");
export const githubBtn = document.getElementById("githubBtn");
export const linkedinBtn = document.getElementById("linkedinBtn");

///// seletores /////
export const profileName = profileModal.querySelector(".profile__name");
export const profileDescription = profileModal.querySelector(
  ".profile__description",
);
export const cardList = document.querySelector(".cards");
export const card = cardList.querySelector(".card");
export const categoriesListBtn = document.querySelector(".categories__list");
export const perfumeNameSelector = document.querySelector(".cardModal__name");
export const perfumeBrandSelector = document.querySelector(".cardModal__brand");
export const perfumeImageSelector = document.querySelector(".cardModal__image");
export const perfumeDescriptionSelector = document.querySelector(".cardModal__description");
export const perfumeFamilySelector = document.querySelector(".cardModal__family");
export const perfumeOccasionSelector = document.querySelector(".cardModal__occasion");
export const perfumeClimateSelector = document.querySelector(".cardModal__climate");
export const perfumeIntensitySelector = document.querySelector(".cardModal__intensity");
export const perfumeRoleSelector = document.querySelector(".cardModal__role-text");
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
  {
    id: "1",
    name: "Terre d'Hermès",
    brand: "Hermes",
    link: "https://leloynparfums.com.br/cdn/shop/files/70798_1.png?v=1769599428&width=1024",
    description:
      "Amadeirado seco e terroso, com sensação mineral e elegante. Presença madura, firme e discreta, mais racional do que expansiva.",
    tags: ["Amadeirado", "Seco", "Mineral", "Dia"],
  },
  {
    id: "4",
    name: "Bleu de Chanel",
    brand: "Chanel",
    link: "https://www.chanel.com/puls-img/1750768790390-onepdpeditopushdm974x1298px052xjpg_2596x1948.jpg",
    description:
      "Cítrico, aromático e amadeirado com fundo de incenso. Um clássico moderno de elegância discreta, equilibrado e extremamente versátil.",
    tags: ["Cítrico", "Amadeirado", "Clássico", "Versátil"],
  },
  {
      id: "3",
      name: "Bleu Noir",
      brand: "Narciso Rodriguez",
      link: "https://www.giraofertas.com.br/wp-content/uploads/2024/11/Narciso-Rodriguez-For-Him-Bleu-Noir-Parfum-Masculino-05.jpg",
      description: "Almiscarado e amadeirado com especiarias frias. Vetiver e cardamomo criam uma presença intensa e sedutora, densa e misteriosa.",
      tags: [
        "Almiscarado",
        "Amadeirado",
        "Noite",
        "Outono"
      ]
    },
];
