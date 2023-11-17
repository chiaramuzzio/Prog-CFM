let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
let api_key = "378786c706182646715863ed0e6d66cc"
let divFavorite = document.querySelector('.portada');

//////////////////////////////////////////////////////////////////////////////////////

function truncar(titulo) {
  // Ejemplo de cómo limitar la longitud del título a 50 caracteres
      let tituloCorto = titulo.length > 25 ? titulo.substring(0, 25) + "..." : titulo;
  
          return tituloCorto
          
  }
  
///////////////////////////////////////////////////////////////////////////////////////

if (favoritos == null || favoritos.length == 0) {
  divFavorite.innerHTML = '<p> No hay favoritos seleccionados </p>'
} 
else {
  let peliss = ""
  for(let i = 0 ; i < favoritos.length ; i++) {
    let idFavv = favoritos[i]
    let detalleFav = `https://api.themoviedb.org/3/movie/${idFavv}?api_key=${api_key}`
    
    fetch(detalleFav)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data);
        let movie_id = data.id;
        let movie_title = truncar(data.title);
        let fecha = data.release_date;
        let posterPath = data.poster_path
        let poster = "https://image.tmdb.org/t/p/w200" + posterPath
        if (posterPath != null){
        peliss += `
                <div class="pelicula">
                    <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src=${poster} alt="${movie_title}"></a>
                    <div class="titfav">
                    <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${movie_title}</h4></a>
                    </div>
                    <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
                </div>    
            
            `;}
        else{
            peliss += `
                    <div class="pelicula">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src="./img/LOGO/Image_not_available.png" alt="${movie_title}"></a>
                        <div class="titfav">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${movie_title}</h4></a>
                        </div>
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
                    </div>    
                `
        }
        divFavorite.innerHTML = peliss
      })
      .catch(function(error){
        console.log('El error es: ' + error);
      })
  }

} 

let botonDelete = document.querySelector("#deleteAll")

botonDelete.addEventListener("click", function(){
  if (favoritos == null || favoritos.length == 0){
    alert("No hay favoritos por borrar")
  }
  else{
  let decision = confirm("Esta seguro que desea eliminar todos sus favoritos?")
  if (decision){
    localStorage.clear("favoritos")
  }
  else{
    alert("No se han eliminado los favoritos")
  }
  }
})