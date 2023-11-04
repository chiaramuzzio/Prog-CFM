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