const linkMenu = document.getElementById("checkbox-menu");
linkMenu.addEventListener('click', ()=>{
    
	const element = document.getElementById("dropdown-menu");
    if (element.style.display === 'block') {
        element.style.display = 'none';
        document.getElementById("dropdown-menu").style.width = "0";
        
        

    } else {
        element.style.display = 'block'; 
        document.getElementById("dropdown-menu").style.width = "200px";
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