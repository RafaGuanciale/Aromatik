import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupCard from "../components/PopupCard.js";
import UserInfo from "../components/UserInfo.js";
import Ui from "../components/Ui.js";
import {
  cardConfig,
  validatorConfig,
  loginForm,
  profileEditForm,
  newCardForm,
  headerProfileBtn,
  profileEditBtn,
  newCardBtn,
  inspiredBtn,
  categoriesListBtn,
  cardList,
  exitBtn,
  profileNameInput,
  profileDescriptionInput,
  createCardSubmitBtn,
  loginPasswordInput,
  loginUserInput,
  initialCards,
  showPasswordBtn,
  homeLoginBtn,
  githubBtn,
  linkedinBtn,
  perfumeNameSelector,
  perfumeBrandSelector,
  perfumeDescriptionSelector,
  perfumeImageSelector,
  perfumeFamilySelector,
  perfumeOccasionSelector,
  perfumeClimateSelector,
  perfumeIntensitySelector,
  perfumeRoleSelector,
  categories,
} from "../utils/consts.js";
import api from "../components/Api.js";
/// Login validation ///
let isLoggedIn = false;
let isApiAvailable = false;
const loginVerification = localStorage.getItem("isLoggedIn");
//// Validação de formulários ////
const loginFormValidator = new FormValidator(validatorConfig, loginForm);
const profileEditFormValidator = new FormValidator(
  validatorConfig,
  profileEditForm,
);
const newCardFormValidator = new FormValidator(validatorConfig, newCardForm);
//// popups ////
const loginPopup = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      const loginUser = data.loginUser;
      const loginPassword = data.loginPassword;
      if (isApiAvailable) {
        // Fluxo da API //
        api
          .getUserLogin(loginUser)
          .then((res) => {
            if (!res[0]) {
              alert("Usuário não existe!");
              loginUserInput.value = "";
              loginPasswordInput.value = "";
              return;
            } else if (res[0].password !== loginPassword) {
              alert("senha inválida!");
              loginPasswordInput.value = "";
              return;
            } else {
              loginSuccess();
            }
          })
          .finally(() => {
            loginFormValidator.resetValidation();
          });
      } else {
        // Fluxo sem API //
        fakeLogin(loginUser, loginPassword)
          .then(() => {
            loginSuccess();
          })
          .catch(() => {
            alert("Erro no login");
          })
          .finally(() => {
            loginFormValidator.resetValidation();
          });
      }
    },
  },
  "#login-popup",
  () => {
    loginPasswordInput.type = "password";
  },
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
  () => {},
);
const newCardPopup = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      createCardSubmitBtn.textContent = "Adicionando...";
      // Fluxo API
      if (isApiAvailable) {
        api
          .searchPerfume(data.name)
          .then((res) => {
            const perfume = res[0];
            if (!perfume) {
              alert("Perfume não encontrado!");
              newCardForm.reset();
              return;
            }
            return api.addToCollection(perfume).then((collectionItem) => {
              return {
                collectionRole: collectionItem.role,
                collectionItem,
                perfume,
              };
            });
          })
          .then((result) => {
            if (!result) return;
            const { collectionRole, collectionItem, perfume } = result;
            const card = new Card(collectionRole, perfume, cardConfig, () => {
              api.removeFromCollection(collectionItem.id).then(() => {
                card.removeCard();
              });
            });
            const cardElement = card.generateCard();
            document.querySelector(".cards").prepend(cardElement);
            newCardForm.reset();
            newCardPopup.close();
          })
          .catch((error) => console.log(error))
          .finally(() => {
            createCardSubmitBtn.textContent = "Adicionar";
          });
      } else {
        // Fluxo sem API ///
        const fakeCardData = {
          name: data.name,
          brand: "Custom",
          link: "./images/muhammad-sulyman-MDMrNFnyFQk-unsplash.jpg",
        };
        const card = new Card(fakeCardData, cardConfig, () => {
          card.removeCard();
        });
        const cardElement = card.generateCard();
        document.querySelector(".cards").prepend(cardElement);
        newCardForm.reset();
        newCardPopup.close();
        createCardSubmitBtn.textContent = "Adicionar";
      }
    },
  },
  "#newCard-popup",
  () => {},
);
const profilePopup = new Popup("#profile-popup");
const cardPopup = new PopupCard(
  {
    perfumeNameSelector,
    perfumeBrandSelector,
    perfumeImageSelector,
    perfumeDescriptionSelector,
    perfumeFamilySelector,
    perfumeOccasionSelector,
    perfumeClimateSelector,
    perfumeIntensitySelector,
    perfumeRoleSelector,
  },
  "#card-popup",
);
const categoriesPopup = new Popup("#categories-popup");
//// Instancias ////
const userInfo = new UserInfo({
  profileName: document.querySelector(".profile__name"),
  profileDescription: document.querySelector(".profile__description"),
});
const headerUi = new Ui({
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
cardList.addEventListener("click", (evt) => {
  const card = evt.target.closest(".card");
  if (!card) return;
  cardPopup.cardDataSet(card.dataset);
  cardPopup.setPerfumePopupInfo();
  cardPopup.open();
});
exitBtn.addEventListener("click", () => {
  const confirmacao = confirm("Tem certeza que deseja sair?");
  if (!confirmacao) {
    return;
  }
  isLoggedIn = false;
  localStorage.setItem("isLoggedIn", "false");
  profilePopup.close();
  headerUi.loggedOut();
});
categoriesListBtn.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("categories__card-overlay-button")) {
    const btnId = evt.target.id;
    categoriesPopup.open();
  }
});
showPasswordBtn.addEventListener("click", () => {
  if (loginPasswordInput.type === "password") {
    loginPasswordInput.type = "text";
  } else {
    loginPasswordInput.type = "password";
  }
});
githubBtn.addEventListener("click", () => {
  window.open("https://github.com/RafaGuanciale", "_blank");
});
linkedinBtn.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/rafaelguanciale", "_blank");
});
homeLoginBtn.addEventListener("click", () => {
  loginPopup.open();
  loginFormValidator.resetValidation();
});
loginFormValidator.setEventListeners();
profileEditFormValidator.setEventListeners();
newCardFormValidator.setEventListeners();
loginPopup.setEventListeners();
profileEditPopup.setEventListeners();
newCardPopup.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();
categoriesPopup.setEventListeners();
/// API check ///
api.checkApi().then((res) => {
  isApiAvailable = res;
  console.log(`API online: ${isApiAvailable}`);
  if (isApiAvailable) {
    loadCardsFromApi();
  } else {
    initialCardsSection.renderItems();
  }
});
/// Renderização de cards da API collection ///
function loadCardsFromApi() {
  api
    .getCollection()
    .then((collection) => {
      const requests = collection.map((item) =>
        api.getPerfumeById(item.perfumeId).then((perfume) => {
          return { collectionRole: item.role, collectionItem: item, perfume };
        }),
      );
      return Promise.all(requests);
    })
    .then((results) => {
      const collectionCards = new Section(
        {
          data: results,
          renderer: (item) => {
            const { collectionRole, collectionItem, perfume } = item;
            const card = new Card(collectionRole, perfume, cardConfig, () => {
              api.removeFromCollection(collectionItem.id).then(() => {
                card.removeCard();
              });
            });
            const cardElement = card.generateCard();
            collectionCards.addItem(cardElement);
          },
        },
        ".cards",
      );
      collectionCards.renderItems();
    })
    .catch((error) => console.log(error));
}
/// Renderização de cards locais ///
const initialCardsSection = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item.role, item, cardConfig, () => {
        card.removeCard();
      });
      const cardElement = card.generateCard();
      initialCardsSection.addItem(cardElement);
    },
  },
  ".cards",
);
(function loginUiUpdate() {
  if (loginVerification === "true") {
    isLoggedIn = true;
    headerUi.loggedIn();
  } else {
    isLoggedIn = false;
  }
})();
/// fake Login && login sucess///
function fakeLogin(username, password) {
  return new Promise((resolve, reject) => {
    if (username && password) {
      resolve();
    } else {
      reject();
    }
  });
}
function loginSuccess() {
  isLoggedIn = true;
  localStorage.setItem("isLoggedIn", "true");
  headerUi.loggedIn();
  console.log("senha correta!");

  loginPopup.close();
}

/// Função de toggle para os cards recomendados ///
categories.forEach((cat) => {
  cat.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.name;
    const arrowBtn = e.currentTarget.querySelector(
      ".complement__categories_header-button",
    );
    const container = document.querySelector(
      `.complement__${category}-container`,
    );
    const isHidden = container.classList.contains(
      "complement__category-active",
    );
    container.classList.toggle("complement__category-active");
    arrowBtn.src = isHidden
      ? "./images/icons/arrow-down.png"
      : "./images/icons/arrow-up.png";

  });
});

//new update///
// npx json-server db.json //
