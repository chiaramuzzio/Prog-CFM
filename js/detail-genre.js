let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let nombregeneropelicula = queryStringObj.get("boton-pelicula"); //id peli
let nombregeneroserie = queryStringObj.get("boton-serie"); //id serie




let api_key = "378786c706182646715863ed0e6d66cc"




let titulogenero = document.querySelector("#nombre-genero")




let nombre = JSON.parse(localStorage.getItem("name")) || [];




if (nombregeneropelicula != null){
    titulogenero.innerHTML = nombre
    let detalleGenero = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${nombregeneropelicula}`;




    fetch(detalleGenero)
    .then(function(response) {
    return response.json()
    })
    .then(function(data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#inner-genero");








        for (let i = 0; i<5; i++){
            let movie_id = results[i].id;
            let movie_title = results[i].title;
            let fecha = results[i].release_date;
            let posterPath = results[i].poster_path;
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath;
           
            fotos += `
            <div class ="portada">
            <div class="pelicula">
                <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src=${poster} alt="${movie_title}"></a>
                <div class="titfav">
                <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${movie_title}</h4></a>
                </div>
                <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
            </div>    
        </div>
                `;
            }




            div.innerHTML = fotos;




    })
    .catch(function(error) {
    console.log("Error: " + error);
    })
}








else{
    titulogenero.innerHTML = nombre
    let detalleGenero = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_genres=${nombregeneroserie}`;




    fetch(detalleGenero)
    .then(function(response) {
    return response.json()
    })
    .then(function(data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#inner-genero");


        for (let i = 0; i<5; i++){
            let serie_id = results[i].id;
            let serie_title = results[i].name;
            let fecha = results[i].first_air_date;
            let posterPath = results[i].poster_path;
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath;
           
            fotos += `
            <div class="portada">
            <div class="pelicula">
            <a href="./detail-serie.html?serie_id=${serie_id}" class="addPic"><img class="fotos" src=${poster} alt="${serie_title}"></a>
                <div class="titfav">
                <a href="./detail-serie.html?serie_id=${serie_id}" class="addPic"><h4 class="capturarId" id="${serie_id}">${serie_title}</h4></a>
                </div>
                <a href="./detail-serie.html?serie_id=${serie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
                </div>    
            </div>
                `;
            }
            div.innerHTML = fotos;
    })




    .catch(function(error) {
    console.log("Error: " + error);
    })
}


