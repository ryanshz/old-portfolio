function jsDate() {
    document.getElementById('date-time').innerHTML = new Date();
}
function greeting() {
    document.getElementById('greeting-return').innerText = 'Shultzcorp welcomes you, ' + document.getElementById('name').value + '! We are glad you are doing ' + document.getElementById('feel').value + '!';
}
function shape() {
    let number = document.getElementById('numberIn').value;
    switch (number) {
        case '1':
            p = document.getElementById('shape-return').innerHTML = 'henagon!';
            break;
        case '2':
            p = document.getElementById('shape-return').innerHTML = 'digon!';
            break;
        case '3':
            p = document.getElementById('shape-return').innerHTML = 'triangle!';
            break;
        case '4':
            p = document.getElementById('shape-return').innerHTML = 'tetragon!';
            break;
        case '5':
            p = document.getElementById('shape-return').innerHTML = 'pentagon!';
            break;
        case '6':
            p = document.getElementById('shape-return').innerHTML = 'hexagon!';
            break;
        case '7':
            p = document.getElementById('shape-return').innerHTML = 'heptagon!';
            break;
        case '8':
            p = document.getElementById('shape-return').innerHTML = 'octagon!';
            break;
        case '9':
            p = document.getElementById('shape-return').innerHTML = 'nonagon!';
            break;
        case '10':
            p = document.getElementById('shape-return').innerHTML = 'decagon!';
            break;
        default:
            p = document.getElementById('shape-return').innerHTML = 'This isn\'t between 1 and 10!';
            break;
    }
}
function snake() {
    document.getElementById('snake-return').innerHTML = '@°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸';
}
function taxes() {
    document.getElementById('taxes-return').innerHTML = 'Calculating...';
    document.getElementById('taxes-return-2').innerHTML = 'Calculating taxes from $' + document.getElementById('taxValue').value + '...';
    document.getElementById('taxes-return-3').innerHTML = '<a href="https://turbotax.intuit.com/" target="_blank">Results Here!</a>';
}
function lol() {
    document.getElementById('taxes-return-4').innerHTML = 'You think I know how to do taxes???? lol!'
}
function onthebeachsippingapinkdrink() {
    document.getElementById('beach').innerHTML = '<img id="beachImage" onClick="backToWork();" src="images/beach.jpg" alt="on the beach sipping a pink drink"><p class="color center">click image to end vacation</p>'
}
function backToWork() {
    document.getElementById('beach').innerHTML = '<p class="color center">ok vacation over go back to work</p>';
}
function ravening() {
    document.getElementById('main').innerHTML = '<p class="color center">firstscripts.html looked tasty, my bad</p>';
}