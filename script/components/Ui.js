export default class Ui {
  constructor({ profileIcon, profileText }) {
    this._profileIcon = document.querySelector(profileIcon);
    this._profileText = document.querySelector(profileText);
  }
  loggedOut() {
    this._profileIcon.src = "./images/circle-user_brown.png";
    this._profileIcon.classList.remove("profile-photo");
    this._profileText.textContent = "Login";
    const collectionSection = document.getElementById("collection");
    const categoriesSection = document.getElementById("categories");
    collectionSection.classList.remove("collection__logged-in");
    categoriesSection.classList.remove("collection__logged-in");
  }

  loggedIn() {
    this._profileIcon.src = "./images/avatar.jpg";
    this._profileIcon.classList.add("profile-photo");
    this._profileText.textContent = "Profile";
    const collectionSection = document.getElementById("collection");
    const categoriesSection = document.getElementById("categories");
    collectionSection.classList.add("collection__logged-in");
    categoriesSection.classList.add("collection__logged-in");
  }
}
