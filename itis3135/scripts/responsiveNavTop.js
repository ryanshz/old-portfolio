function displayNavITIS(){
    let navigationElement = document.getElementById("navIndexITIS");
    if(navigationElement.className === "navlist navlist-right"){
        navigationElement.className += " responsive";
    }else{
        navigationElement.className = "navlist navlist-right";
    }
}