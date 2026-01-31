const profileModal = document.querySelector("#profile-popup");
const profileBtn = document.querySelector(".profile__button");
const settingsBtn = document.querySelector(".settings__button");
const profileName = profileModal.querySelector(".profile__name");
const profileDescription = profileModal.querySelector(".profile__description");
const closeProfileBtn = profileModal.querySelector(".profile__close");

profileBtn.addEventListener("click", ()=>{
    openModal(profileModal);
});
settingsBtn.addEventListener("click", ()=>{
    openModal(settingsModal);
});

closeProfileBtn.addEventListener("click", () =>{
    closeModal(profileModal);
});

function openModal(modal){
    modal.classList.add("popup_is-opened")
}

function closeModal(modal){
    modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}