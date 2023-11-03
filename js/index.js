let cora = document.querySelectorAll(".fa-heart");
let arrayFavs = []

for(let i=0; i<cora.length; i++)(
    cora[i].addEventListener("click", function(){
        if(cora[i].classList.contains("fa-regular")) {
            cora[i].classList.remove("fa-regular");
            cora[i].classList.add("fa-solid");
            arrayFavs.push(cora[i])
        }
        else{
            cora[i].classList.add("fa-regular");
            cora[i].classList.remove("fa-solid");}
    })
)
