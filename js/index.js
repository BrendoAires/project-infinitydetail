const element = document.getElementById("mySidenav");

    const linkMenu = document.getElementById("checkbox-menu");
    linkMenu.addEventListener('click', ()=>{
    
    if (element.style.width === "200px"){
        document.getElementById("mySidenav").style.width = "0"
    }else{
    document.getElementById("mySidenav").style.width = "200px";
  }
    })





const divs = document.getElementById("container");
const div = querySelectorAll("#div div");

let idx = 0;

function carrossel(){
    idx ++;

    if (idx > div.length - 1){
        idx = 0;
    }

    divs.style.transform = `tranlateX($-idx * 300)px`;

}
setInterval(carrossel, 1800);