export default class HeaderUi {
  constructor({ profileIcon, profileText }) {
    this._profileIcon = document.querySelector(profileIcon);
    this._profileText = document.querySelector(profileText);
  }
  loggedOut() {
    this._profileIcon.src = "./images/circle-user_brown.png";
    this._profileIcon.classList.remove("profile-photo");
    this._profileText.textContent = "Login";
  }

  loggedIn() {
    this._profileIcon.src = "./images/avatar.jpg";
    this._profileIcon.classList.add("profile-photo");
    this._profileText.textContent = "Profile";
  }
}
