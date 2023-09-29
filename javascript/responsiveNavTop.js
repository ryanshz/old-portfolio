function displayNav(){
    let navigationElement = document.getElementById("navIndex");
    if(navigationElement.className === "navlist navlist-right"){
        navigationElement.className += " responsive";
    }else{
        navigationElement.className = "navlist navlist-right";
    }
}