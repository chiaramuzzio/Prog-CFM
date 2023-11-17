let api_key = "378786c706182646715863ed0e6d66cc"


let urlMejoresCalificadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
let urlPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
let urlSeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function truncar(titulo) {
// Ejemplo de cómo limitar la longitud del título a 50 caracteres
    let tituloCorto = titulo.length > 25 ? titulo.substring(0, 25) + "..." : titulo;

        return tituloCorto
        
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


fetch(urlMejoresCalificadas)
    .then(function(response) {
        return response.json();
    })


    .then(function(data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#divMejorClasificacion");
        nros = []


        while (nros.length < 6) {
            let nro = Math.floor(Math.random() * (results.length-1));
            if (!nros.includes(nro)) {
                nros.push(nro);
            };
        }


        for (let i = 0; i < 6; i++) {
            let nro = nros[i];
            let movie_id = results[nro].id;
            let titulo = truncar(results[nro].title);
            let fecha = results[nro].release_date;
            let posterPath = results[nro].poster_path

            if (posterPath != null){

            let poster = "https://image.tmdb.org/t/p/w200" + posterPath
                fotos += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src=${poster} alt="${titulo}"></a>
                        <div class="titfav">
                            <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${titulo}</h4></a>
                        </div>
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
                    </div>    
                </div>
                `;
            }

            else{
                fotos += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src="./img/LOGO/Image_not_available.png" alt="${titulo}"></a>
                        <div class="titfav">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${titulo}</h4></a>
                        </div>
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
                    </div>    
                </div>
                `
            }
                div.innerHTML = fotos;

            }


    })


    .catch(function(error) {
        console.log("Error al obtener datos de películas: " + error);
    });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


fetch(urlPopulares)
    .then(function(response) {
        return response.json();
    })


    .then(function(data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#divPopulares");
        let nros = [];
       
        while (nros.length < 6) {
            let nro = Math.floor(Math.random() * (results.length - 1));
            if (!nros.includes(nro)) {
                nros.push(nro);
            }
        }
       
        for (let i = 0; i < 6; i++) {
            let nro = nros[i];
            let movie_id = results[nro].id;
            let titulo = results[nro].title;
            let fecha = results[nro].release_date;
            let posterPath = results[nro].poster_path;
            if (posterPath != null){
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath;
           
            fotos += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src=${poster} alt="${titulo}"></a>
                        <div class="titfav">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${titulo}</h4></a>
                        </div>
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
                    </div>    
                </div>
                `;
            }
            else{
                fotos += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src="./img/LOGO/Image_not_available.png" alt="${titulo}"></a>
                        <div class="titfav">
                            <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${titulo}</h4></a>
                        </div>
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
                    </div>    
                </div>
                `
            }
        }
       
        div.innerHTML = fotos;



    })
   
    .catch(function(error) {
        console.log("Error al obtener datos de películas: " + error);
    });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


fetch(urlSeriesPopulares)
    .then(function(response) {
        return response.json();
    })


    .then(function(data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#divSeriesPopulares");
        nros = []


        while (nros.length < 6) {
            let nro = Math.floor(Math.random() * (results.length-1));
            if (!nros.includes(nro)) {
                nros.push(nro);
            };
        }


        for (let i = 0; i < 6; i++) {
            let nro = nros[i];
            let serie_id = results[nro].id;
            let serie_title = results[nro].name;
            let fecha = results[nro].first_air_date;            
            let posterPath = results[nro].poster_path;
            if (posterPath != null){
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath
                fotos += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-serie.html?serie_id=${serie_id}" class="addPic"><img class="fotos" src=${poster} alt="${serie_title}"></a>
                        <div class="titfav">
                        <a href="./detail-serie.html?serie_id=${serie_id}" class="addPic"><h4 id="${serie_id}" class="capturarId">${serie_title}</h4></a>
                        </div>
                        <a href="./detail-serie.html?serie_id=${serie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
                    </div>    
                </div>
                `;
            }
            else{
                fotos += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-serie.html?serie_id=${serie_id}" class="addPic"><img class="fotos" src="./img/LOGO/Image_not_available.png" alt="${serie_title}"></a>
                        <div class="titfav">
                        <a href="./detail-serie.html?serie_id=${serie_id}" class="addPic"><h4 id="${serie_id}" class="capturarId">${serie_title}</h4></a>
                        </div>
                        <a href="./detail-serie.html?serie_id=${serie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
                    </div>    
                </div>
                `;
            }
            }
            div.innerHTML = fotos;
    })
    .catch(function(error) {
        console.log("Error al obtener datos de películas: " + error);
    });