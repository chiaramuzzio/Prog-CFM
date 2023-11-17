let api_key = "378786c706182646715863ed0e6d66cc"
let generoPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
let generoSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}`


function nombreGenero() {
  let botones = document.querySelectorAll(".button");
  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {
      let nomGenero = botones[i].id;
      localStorage.setItem("name", JSON.stringify(nomGenero));
    });
  }
}


fetch(generoPeliculas)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    let genre = data.genres
    console.log(data);
    let contenido = ''
    let divPeliculas = document.querySelector("#genero-peli")
   
    for(let i=0; i<genre.length; i++){
        let id = genre[i].id
        let name = genre[i].name
        contenido += `<button class="button" type="submit" name="boton-pelicula" value="${id}" id="${name}">${name}</button>`
    }
    divPeliculas.innerHTML = contenido
    nombreGenero()
})
.catch(function(error) {
  console.log("Error: " + error);
})


/////////////////////////////////////////////////////


fetch(generoSeries)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    let genre = data.genres
    let contenido = ''
    let divPeliculas = document.querySelector("#genero-serie")
   
    for(let i=0; i<genre.length; i++){
        let id = genre[i].id
        let name = genre[i].name
        contenido += `<button class="button" type="submit" name="boton-serie" value="${id}" id="${name}">${name}</button>`
    }
    divPeliculas.innerHTML = contenido
    nombreGenero()


})


.catch(function(error) {
  console.log("Error: " + error);
})