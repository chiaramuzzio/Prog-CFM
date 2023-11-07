let api_key = "378786c706182646715863ed0e6d66cc"
let generoPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
let generoSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}`

fetch(generoPeliculas)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    let genre = data.genres
    let contenido = ''
    let divPeliculas = document.querySelector("#genero-peli")
    
    for(let i=0; i<genre.length; i++){
        let id = genre[i].id
        let name = genre[i].name
        contenido += `<button class="button" type="submit" name="${name}" id="${id}">${name}</button>`
    }
    divPeliculas.innerHTML = contenido
  console.log(data);
})
.catch(function(error) {
  console.log("Error: " + error);
})


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
        contenido += `<button class="button" type="submit" name="${name}" id="${id}">${name}</button>`
    }
    divPeliculas.innerHTML = contenido
  console.log(data);
})
.catch(function(error) {
  console.log("Error: " + error);
})


