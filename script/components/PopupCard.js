import Popup from "./Popup.js";

export default class PopupCard extends Popup {
  constructor({perfumeNameSelector, perfumeBrandSelector, perfumeImageSelector, perfumeDescriptionSelector}, popupSelector){
    super(popupSelector);
    this._nameSelector = perfumeNameSelector;
    this._brandSelector = perfumeBrandSelector;
    this._linkSelector = perfumeImageSelector;
    this._descriptionSelector = perfumeDescriptionSelector;
  }

  cardDataSet(data){
    this._perfumeData = data;
    console.log(this._nameSelector)
  }

  setPerfumePopupInfo(){
    this._nameSelector.textContent = this._perfumeData.name;
    this._brandSelector.textContent = this._perfumeData.brand;
    this._linkSelector.src = this._perfumeData.link;
    this._descriptionSelector.textContent = this._perfumeData.description;
  }
}
