let urlFavs = "https://api.themoviedb.org/3/trending/all/week?api_key=378786c706182646715863ed0e6d66cc";

fetch(urlFavs)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let results = data.results;
    let fotos = ``;
    let div = document.querySelector("#divPrueba");
    for (let i = 0; i < 5; i++) {
      let nro = Math.floor(Math.random() * results.length) -1
      let movie_id = results[nro].id;
      let movie_title = results[nro].original_title;
      let fecha = results[nro].release_date;

      let urlImgs = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=378786c706182646715863ed0e6d66cc`;

      fetch(urlImgs)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          let posterPath = data.poster_path;
          if (posterPath) {
            fotos += `
            <div class ="portada"> 
                <div class="pelicula">
                    <a href="./detail-movie.html" class="addPic"><img class="fotos" src="https://image.tmdb.org/t/p/original${posterPath}" alt="${movie_title}"></a>
                    <div class="titfav">
                        <h4 class="addTitle">${movie_title}</h4>
                        <i class="fa-regular fa-heart" style="color: #ffffff;"></i>
                    </div>
                    <p class="addDate">Fecha de estreno: ${fecha}</p>
                </div>    
            </div>
            `;
          }

          div.innerHTML = fotos;
        })
        .catch(function(error) {
          console.log("Error al obtener imagen de película: " + error);
        });
    }
  })
  .catch(function(error) {
    console.log("Error al obtener datos de películas: " + error);
  });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*let cora = document.querySelectorAll(".fa-heart");
let arrayFavs = []
let arrayFavsJSON = JSON.stringify(arrayFavs)
sessionStorage.setItem("favoritos", arrayFavsJSON);

for(let i=0; i<cora.length; i++)(
    cora[i].addEventListener("click", function(){
        if(cora[i].classList.contains("fa-regular")) {
            cora[i].classList.remove("fa-regular");
            cora[i].classList.add("fa-solid");
            cora[i].style.color = "#ff0000";
            let recuperoFavs = sessionStorage.getItem("favoritos");
            let favsRecuperado = JSON.parse(recuperoFavs);
            favsRecuperado.push(cora[i]);
            console.log(favsRecuperado)
        }
        else{
            cora[i].classList.add("fa-regular");
            cora[i].classList.remove("fa-solid");
            cora[i].style.color = "#ffffff";
        }
    })
)*/

let cora = document.querySelectorAll(".fa-heart");
let favsRecuperados = JSON.parse(sessionStorage.getItem("favoritos")) || [];

for (let i = 0; i < cora.length; i++) {
  cora[i].addEventListener("click", function () {
    if (cora[i].classList.contains("fa-regular")) {
      cora[i].classList.remove("fa-regular");
      cora[i].classList.add("fa-solid");
      cora[i].style.color = "#ff0000";
      favsRecuperados.push(i);
      sessionStorage.setItem("favoritos", JSON.stringify(favsRecuperados));
    } 
    
    else {
      cora[i].classList.add("fa-regular");
      cora[i].classList.remove("fa-solid");
      cora[i].style.color = "#ffffff";

      let indexToRemove = -1;
      for (let j = 0; j < favsRecuperados.length; j++) {
        if (favsRecuperados[j] === i) {
          indexToRemove = j;
          break;
        }
      }

      if (indexToRemove !== -1) {
        for (let j = indexToRemove; j < favsRecuperados.length - 1; j++) {
          favsRecuperados[j] = favsRecuperados[j + 1];
        }
        favsRecuperados.pop();
        sessionStorage.setItem("favoritos", JSON.stringify(favsRecuperados));
      }
    }
  });

  if (favsRecuperados.includes(i)) {
    cora[i].classList.remove("fa-regular");
    cora[i].classList.add("fa-solid");
    cora[i].style.color = "#ff0000";
  }
}