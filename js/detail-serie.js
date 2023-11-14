let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idsRecuperado = queryStringObj.get("serie_id");


//////////////////////////////////////////////////////////////////////


let api_key = "378786c706182646715863ed0e6d66cc"
let detallePelicula = `https://api.themoviedb.org/3/tv/${idsRecuperado}?api_key=${api_key}`
let botonRecomend = `https://api.themoviedb.org/3/tv/${idsRecuperado}/recommendations?api_key=${api_key}`
let botonReviews = `https://api.themoviedb.org/3/tv/${idsRecuperado}/reviews?api_key=${api_key}`


let botonrecom = document.querySelector(".botonrecom")
let peliculas_recomendacion = document.querySelector(".peliculas_recomendacion")


//////////////////////////////////////////////////////////////////////////////////


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


///////////////////////////////////////////////////////////////


fetch(detallePelicula)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let results = data;
        let div = document.querySelector(".dtl_pelicula");
            let movie_id = results.id;
            let movie_title = results.name;
            let fecha = results.first_air_date;
            let posterPath = results.poster_path;
            let sinopsis = results.overview
            let calificacion = results.vote_average
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath;
            let generos = results.genres
            let generosAgregar = "";
            for (let i = 0; i < generos.length; i++){
                let gen = generos[i].name
                let genId = generos[i].id
                generosAgregar += `<a class="link" id="gen" href="./detail-genre.html?boton-serie=${genId}">${gen} </a>`
            }
           
            let urlVideo = `https://api.themoviedb.org/3/tv/${movie_id}/videos?api_key=${api_key}`
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
                        <button class="favorite-button">
                            <i class="fa-regular fa-heart" style="color: #ffffff;"></i>
                        </button>
                    </div>
                    <p>Calificacion: ${calificacion} | ${generosAgregar} | ${fecha}</p>
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
                    <div id="nomandfav">
                        <a name=${movie_title}><h3>${movie_title}</h3></a>
                        <button class="favorite-button">
                            <i class="fa-regular fa-heart" style="color: #ffffff;"></i>
                        </button>
                    </div>
                    <p>Calificacion: ${calificacion} | ${generosAgregar} | ${fecha}</p>
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




                ////////////////////////////////////////////////////////////////////////
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
                        let movie_title = results[i].name;
                        let fecha = results[i].first_air_date;
                        let posterPath = results[i].poster_path
                       
                        let poster = "https://image.tmdb.org/t/p/w200" + posterPath;


                        peliss += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-serie.html?serie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src=${poster} alt="${movie_title}"></a>
                        <div class="titfav">
                        <a href="./detail-serie.html?serie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${movie_title}</h4></a>
                        </div>
                        <a href="./detail-serie.html?serie_id=${movie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
                    </div>    
                </div>
                `;
                        }
                }
                else {
                    let div_peli_recom = document.querySelector(".peliculas_recomendacion");
                    peliss += `<p>No hay recomendaciones disponibles para este titulo.</p>`
   
                }


                div_peli_recom.innerHTML=peliss              
            })
                .catch(function(error){
                console.log('El error es: ' + error);
            })


/////////////////////////////////////////////////////////


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
                }}
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
