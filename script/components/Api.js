class Api {
  constructor(url) {
    this._url = url;
  }
  _handleResponse(response) {
    return response.ok
      ? response.json()
      : Promise.reject(`Error: ${response.status}`);
  }
  searchPerfume(name) {
    return fetch(`${this._url}perfumes?name=${name}`)
      .then((response) => this._handleResponse(response))
      .catch((error) => console.log(error));
  }
  addToCollection(data) {
    return fetch(`${this._url}collection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        perfumeId: data.id,
        role: "Papel na coleção ainda não definido. Em breve a inteligência do Aromatik vai analisar sua coleção e revelar o papel deste perfume.",
      }),
    })
      .then((response) => this._handleResponse(response))
      .catch((error) => console.log(error));
  }
  getCollection() {
    return fetch(`${this._url}collection`)
      .then((response) => this._handleResponse(response))
      .catch((error) => console.log(error));
  }
  getPerfumeById(id) {
    return fetch(`${this._url}perfumes/${id}`)
      .then((response) => this._handleResponse(response))
      .catch((error) => console.log(error));
  }
  removeFromCollection(id) {
    return fetch(`${this._url}collection/${id}`, {
      method: "DELETE",
    })
      .then((response) => this._handleResponse(response))
      .catch((error) => console.log(error));
  }
  getUserLogin(username) {
    return fetch(`${this._url}users?username=${username}`)
      .then((response) => this._handleResponse(response))
      .catch((error) => console.log(error));
  }
  checkApi() {
    return fetch(`${this._url}`)
      .then((res) => res.ok)
      .catch(() => {
        return false;
      });
  }
}

const api = new Api("http://localhost:3000/");
export default api;
