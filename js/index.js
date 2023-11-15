let api_key = "378786c706182646715863ed0e6d66cc"


let urlMejoresCalificadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
let urlPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
let urlSeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function truncar(titulo) {
        document.querySelector("#valor").style.width = '220px';

        let contenedorElement = document.querySelector("#valor")
    
        if (titulo.scrollWidth > contenedorElement.clientWidth) {
            while (titulo.scrollWidth > contenedorElement.clientWidth && titulo.length > 0) {
                titulo = titulo.slice(0, -1);
                titulo = titulo + '...';
            }
        }

        return titulo
        
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


        for (let i = 0; i < 5; i++) {
            let nro = nros[i];
            let movie_id = results[nro].id;
            let movie_title = truncar(results[nro].title);
            let fecha = results[nro].release_date;
            let posterPath = results[nro].poster_path

            if (posterPath != null){

            let poster = "https://image.tmdb.org/t/p/w200" + posterPath
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

            else{
                fotos += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src="./img/LOGO/Image_not_available.png" alt="${movie_title}"></a>
                        <div class="titfav">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${movie_title}</h4></a>
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
       
        for (let i = 0; i < 5; i++) {
            let nro = nros[i];
            let movie_id = results[nro].id;
            let movie_title = results[nro].title;
            let fecha = results[nro].release_date;
            let posterPath = results[nro].poster_path;
            if (posterPath != null){
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
            else{
                fotos += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src="./img/LOGO/Image_not_available.png" alt="${movie_title}"></a>
                        <div class="titfav">
                            <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${movie_title}</h4></a>
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


        for (let i = 0; i < 5; i++) {
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