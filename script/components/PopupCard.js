import Popup from "./Popup.js";

export default class PopupCard extends Popup {
  constructor(
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
    popupSelector,
  ) {
    super(popupSelector);
    this._nameSelector = perfumeNameSelector;
    this._brandSelector = perfumeBrandSelector;
    this._linkSelector = perfumeImageSelector;
    this._descriptionSelector = perfumeDescriptionSelector;
    this._familySelector = perfumeFamilySelector;
    this._occasionSelector = perfumeOccasionSelector;
    this._climateSelector = perfumeClimateSelector;
    this._intensitySelector = perfumeIntensitySelector;
    this._roleSelector = perfumeRoleSelector;
  }

  cardDataSet(data) {
    this._perfumeData = data;
  }

  setPerfumePopupInfo() {
    this._nameSelector.textContent = this._perfumeData.name;
    this._brandSelector.textContent = this._perfumeData.brand;
    this._linkSelector.src = this._perfumeData.link;
    this._descriptionSelector.textContent = this._perfumeData.description;
    this._familySelector.textContent = this._perfumeData.family;
    this._occasionSelector.textContent = this._perfumeData.occasion;
    this._climateSelector.textContent = this._perfumeData.climate;
    this._intensitySelector.textContent = this._perfumeData.intensity;
    this._roleSelector.textContent = this._perfumeData.role;

  }
}
