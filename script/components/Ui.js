export default class Ui {
  constructor({ profileIcon, profileText }) {
    this._profileIcon = document.querySelector(profileIcon);
    this._profileText = document.querySelector(profileText);
    this._collectionSection = document.getElementById("collection");
    this._identitySection = document.getElementById("identity");
    this._categoriesSection = document.getElementById("categories");
    this._complementSection = document.getElementById("complement");
    this._blogSection = document.getElementById("blog");
    this._homeSection = document.getElementById("home");
    this._aboutSection = document.getElementById("about-aromatik");
    this._authorSection = document.getElementById("author");
    this._navLandpage = document.getElementById("header__nav-landpage");
    this._navLoggedIn = document.getElementById("header__nav-loggedIn");
  }
  loggedOut() {
    this._profileIcon.src = "./images/circle-user-champagne.png";
    this._profileIcon.classList.remove("profile-photo");
    this._profileText.textContent = "Entrar";
    /// Login sections ///
    this._collectionSection.classList.remove("collection__logged-in");
    this._categoriesSection.classList.remove("categories__logged-in");
    this._identitySection.classList.remove("identity__logged-in");
    this._complementSection.classList.remove("complement__logged-in");
    this._blogSection.classList.remove("blog__logged-in");
    ///landpage Sections ///
    this._homeSection.classList.remove("home__logged-in");
    this._aboutSection.classList.remove("about__logged-in");
    this._authorSection.classList.remove("author__logged-in");
    /// NavBar ///
    this._navLoggedIn.classList.add("header__nav-disabled");
    this._navLandpage.classList.remove("header__nav-disabled");
  }
  loggedIn() {
    this._profileIcon.src = "./images/avatar.jpg";
    this._profileIcon.classList.add("profile-photo");
    this._profileText.textContent = "Perfil";
    /// Login Sections ///
    this._collectionSection.classList.add("collection__logged-in");
    this._identitySection.classList.add("identity__logged-in");
    this._categoriesSection.classList.add("categories__logged-in");
    this._complementSection.classList.add("complement__logged-in");
    this._blogSection.classList.add("blog__logged-in");
    /// Landpage sections ///
    this._homeSection.classList.add("home__logged-in");
    this._aboutSection.classList.add("about__logged-in");
    this._authorSection.classList.add("author__logged-in");
    /// NavBar ///
    this._navLandpage.classList.add("header__nav-disabled");
    this._navLoggedIn.classList.remove("header__nav-disabled");
  }
}
