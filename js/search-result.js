/*let id = queryStringObj.get("id");

let proxy = "https://cors-anywhere.herokuapp.com/";
let endpoint = */


const options = {method: 'GET', headers: {accept: 'application/json', Authorization: 'Bearer 378786c706182646715863ed0e6d66cc'}
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));