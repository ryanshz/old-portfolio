let home = document.getElementById('home');
let about = document.getElementById('about');
let process = document.getElementById('process');
let schedule = document.getElementById('schedule');
let contact = document.getElementById('contact');
let faq = document.getElementById('faq');

function homeNav(){
    home.style.display = 'flex';
    about.style.display = 'none';
    process.style.display = 'none';
    schedule.style.display = 'none';
    contact.style.display = 'none';
    faq.style.display = 'none';
}

function aboutNav(){
    home.style.display = 'none';
    about.style.display = 'flex';
    process.style.display = 'none';
    schedule.style.display = 'none';
    contact.style.display = 'none';
    faq.style.display = 'none';
}

function processNav(){
    home.style.display = 'none';
    about.style.display = 'none';
    process.style.display = 'flex';
    schedule.style.display = 'none';
    contact.style.display = 'none';
    faq.style.display = 'none';
}

function scheduleNav(){
    home.style.display = 'none';
    about.style.display = 'none';
    process.style.display = 'none';
    schedule.style.display = 'flex';
    contact.style.display = 'none';
    faq.style.display = 'none';
}

function contactNav(){
    home.style.display = 'none';
    about.style.display = 'none';
    process.style.display = 'none';
    schedule.style.display = 'none';
    contact.style.display = 'flex';
    faq.style.display = 'none';
}

function faqNav(){
    home.style.display = 'none';
    about.style.display = 'none';
    process.style.display = 'none';
    schedule.style.display = 'none';
    contact.style.display = 'none';
    faq.style.display = 'flex';
}

function displayNav(){
    let navigationElement = document.getElementById('navIndex');
    if(navigationElement.className === ""){
        navigationElement.className += "responsive";
    }else{
        navigationElement.className = "";
    }
}