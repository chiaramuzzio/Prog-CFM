let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idsRecuperado = queryStringObj.get("movie_id");


///////////////////////////////////////////////////////////////////////////////////////


let api_key = "378786c706182646715863ed0e6d66cc"
let detallePelicula = `https://api.themoviedb.org/3/movie/${idsRecuperado}?api_key=${api_key}`
let botonRecomend = `https://api.themoviedb.org/3/movie/${idsRecuperado}/recommendations?api_key=${api_key}`
let botonReviews = `https://api.themoviedb.org/3/movie/${idsRecuperado}/reviews?api_key=${api_key}`


console.log(idsRecuperado);


/////////////////////////////////////////////////////////////////////////////////


let botonrecom = document.querySelector(".botonrecom")
let peliculas_recomendacion = document.querySelector(".peliculas_recomendacion")




peliculas_recomendacion.style.display = 'none';
botonrecom.addEventListener('click', function(){
    if (peli_reviews.style.display == "inline"){
        alert("Si desea ver las recomendaciones, cierre antes la pestaña de reviews")
    }
    else{  
        if(peliculas_recomendacion.style.display == "none"){
            peliculas_recomendacion.style.display = 'flex';
        }  
        else{
            peliculas_recomendacion.style.display = "none"
        }
}    
})


////////////////////////////////////////////////////////////////////////


let botonreview = document.querySelector(".botonreview")
let peli_reviews = document.querySelector(".peli_reviews")


peli_reviews.style.display = 'none';
botonreview.addEventListener('click', function(){    
    if (peliculas_recomendacion.style.display == "flex"){
        alert("Si desea ver las reviews, cierre antes la pestaña de recomendaciones")
    }
    else{
        if(peli_reviews.style.display == "none"){
            peli_reviews.style.display = 'inline';
        }  
        else{
            peli_reviews.style.display = "none"
        }
    }
})


///////////////////////////////////////////////////////////////////////////


function nombreGenero() {
    let botones = document.querySelectorAll(".link");
    for (let i = 0; i < botones.length; i++) {
      botones[i].addEventListener("click", function() {
        let nomGenero = botones[i].id;
        localStorage.setItem("name", JSON.stringify(nomGenero));
      });
    }
  }


///////////////////////////////////////////////////////////////////////////


fetch(detallePelicula)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let results = data;
        let div = document.querySelector(".dtl_pelicula");
            let movie_id = results.id;
            let movie_title = results.title;
            let fecha = results.release_date;
            let posterPath = results.poster_path;
            let generos = results.genres
            let generosAgregar = "";
            for (let i = 0; i < generos.length; i++){
                let gen = generos[i].name
                let genId = generos[i].id
                generosAgregar += `<a class="link" id="gen" href="./detail-genre.html?boton-pelicula=${genId}">${gen} </a>`
            }
            let duracion = results.runtime
            let sinopsis = results.overview
            let calificacion = results.vote_average
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath;
            let urlVideo = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${api_key}`
            fetch(urlVideo)
                .then(function(response) {
                return response.json()
                })
                .then(function(data) {
                console.log(data);
                let results = data.results
                let fotos = ""
                if (results.length != 0){
                    let videoKey = results[0].key
                    let trailerUrl = `https://www.youtube.com/embed/${videoKey}`
                    fotos += `
                    <div id="nomandfav">
                        <a name=${movie_title}><h3>${movie_title}</h3></a>
                            <i id="${movie_id}" class="coraVacio fa-regular fa-heart" style="color: #ffffff;"></i>
                            <i id="${movie_id}" class="coraLleno fa-solid fa-heart" style="color: #ffffff;"></i>
                       
                    </div>
                    <p>Calificacion: ${calificacion} | ${duracion} mins | ${generosAgregar} | ${fecha}</p>
                    <div class="info">
                        <img class="fotos" src="${poster}">
                        <iframe src="${trailerUrl}" class="trailer" frameborder="0" allowfullscreen></iframe>
                        <p class="sinopsis">"${sinopsis}"</p>
                    </div>
                `;
                div.innerHTML = fotos;
                }
                else{
                    fotos += `
                    <a name=${movie_title}><h3>${movie_title}</h3></a>
                    <p>Calificacion: ${calificacion} | ${duracion} mins | ${generosAgregar} | ${fecha}</p>
                    <div class="info">
                        <img class="fotos" src="${poster}">
                        <p class="sinopsis">"${sinopsis}"</p>
                    </div>
                    <p>No hay trailer disponible para este titulo.</p>
                `
                div.innerHTML = fotos;
                }
                })
                .catch(function(error) {
                console.log("Error: " + error);
                })




///////////////////////////////////////




                fetch(botonRecomend)
                .then(function(response){
                return response.json();
            })
                .then(function(data){
                console.log(data);
                let results = data.results;
                let div_peli_recom = document.querySelector(".peliculas_recomendacion")
                let peliss = ""
                if (results.length != 0) {
                    for (let i = 0; i < 5; i++) {
                        let movie_id = results[i].id;
                        let movie_title = results[i].title;
                        let fecha = results[i].release_date;
                        let posterPath = results[i].poster_path
                        let poster = "https://image.tmdb.org/t/p/w200" + posterPath
                        peliss += `
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
                }
                else {
                    let div_peli_recom = document.querySelector(".peliculas_recomendacion");
                    peliss += `<p>No hay recomendaciones disponibles para este titulo.</p>`
                }
                div_peli_recom.innerHTML = peliss
               
            })
                .catch(function(error){
                console.log('El error es: ' + error);
            })




            ////////////
            fetch(botonReviews)
                .then(function(response){
                return response.json();
            })
                .then(function(data){
                console.log(data);
                let results = data.results;
                let div_peli_review = document.querySelector(".peli_reviews")
                let reviewss = ""
                if (results.length != 0) {
                    for (let i = 0; i < results.length ; i++) {
                        let movie_author = results[i].author;
                        let content_i = results[i].content;
                        reviewss += `
                            <div class="div_reviews_css">
                                <p>${content_i}</p>
                                <h3 class="author_css">— ${movie_author}</h3>
                            </div>
                            `
                            if(i == 2) {
                                break
                            }
                    }
                }
                else {
                    let div_peli_review = document.querySelector(".peli_reviews");
                    reviewss += `<p>No hay reviews disponibles para este titulo.</p>`
                }
           
                div_peli_review.innerHTML= reviewss
            })
                .catch(function(error){
                console.log('El error es: ' + error);
            })
    })  
    .catch(function (error) {
        console.log("Error al obtener datos de películas: " + error);
    });




////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(){


    let favoritos = [];


    let recuperoStorage = localStorage.getItem('favoritos');


    if (recuperoStorage != null) {
        favoritos = JSON.parse(recuperoStorage);
    }


    let coraLleno = document.querySelector(".coraLleno");
    let coraVacio = document.querySelector(".coraVacio");


    if (favoritos.includes(favId)) {
        coraVacio.style.display = 'none';
        coraLleno.style.display = 'block';
    }


    let boton = document.querySelector('.fa-heart');


    let idPeli = boton.id


    boton.addEventListener('click', function() {
        alert()


        // if (favoritos.includes(idPeli)) {
        //     let indice = favoritos.indexOf(idPeli)
        //     favoritos.splice(indice, 1);
        //     coraVacio.style.display = 'block';
        //     coraLleno.style.display = 'none';
        // } else {
        //     favoritos.push(idPeli);
        //     coraVacio.style.display = 'none';
        //     coraLleno.style.display = 'block';
        // }
   
        // let favoritosToString = JSON.stringify(favoritos);
        // localStorage.setItem('favoritos', favoritosToString )
    } )


})
