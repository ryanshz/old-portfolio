function jsDate(){
    let date = new Date();
    document.getElementById('date-time').innerHTML = date;
}
function greeting(){
    const name = document.getElementById('name');
    const feel = document.getElementById('feel');
    let p = document.getElementById('greeting-return');
    p.innerHTML = 'Shultzcorp welcomes you, '+name+ '! We are glad you are doing '+feel+'!';
}
function number(){
    let number = document.getElementById('number');
    if(Math.sign(number) == -1){
        number = !(number);
    }else if(Number.isInteger(number)){
        number = Math.round(number);
    }
    switch(number){
        case 1:
            p = document.getElementById('shape-return').innerHTML = "circle!";
            break;
        case 2:
            p = document.getElementById('shape-return').innerHTML = "oval? digon? idk!";
            break;
        case 3:
            p = document.getElementById('shape-return').innerHTML = "triangle!";
            break;   
        case 4:
            p = document.getElementById('shape-return').innerHTML = "square! or rectangle!";
            break;
        case 5:
            p = document.getElementById('shape-return').innerHTML = "pentagon!";
            break;
        case 6:
            p = document.getElementById('shape-return').innerHTML = "hexagon!";
            break;
        case 7:
            p = document.getElementById('shape-return').innerHTML = "heptagon!";
            break;
        case 8:
            p = document.getElementById('shape-return').innerHTML = "octagon!";
            break;
        case 9:
            p = document.getElementById('shape-return').innerHTML = "nonagon!";
            break;
        case 10:
            p = document.getElementById('shape-return').innerHTML = "decagon!";
            break;
        default:
            p = document.getElementById('shape-return').innerHTML = "This isn't between 1 and 10! Nice job!";
            break;
    }
}