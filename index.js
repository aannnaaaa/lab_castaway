let ic =document.getElementById("change__button");
ic.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        ic.src= "./img/moon.png";
    }else{
        ic.src= "./img/sun.png";
    }
}
