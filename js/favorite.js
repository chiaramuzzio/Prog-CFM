let favoritos = JSON.parse(sessionStorage.getItem("favoritos")) || [];
let api_key = "378786c706182646715863ed0e6d66cc"
let divFavorite = document.querySelector('.portada');

if (favoritos == null || favoritos.length == 0) {
  divFavorite.innerHTML = '<p> No hay favoritos seleccionados </p>'} 
  else {
  for( let i = 0 ; i < favoritos.length ; i++) {
    let idFavv = favoritos[i]
    let detalleFav = `https://api.themoviedb.org/3/movie/${idFavv}?api_key=${api_key}`
    
    fetch(detalleFav)
                .then(function(response){
                return response.json();
            })
                .then(function(data){
                console.log(data);
  })
                .catch(function(error){
                console.log('El error es: ' + error);
            })
}} 