function required(){
    document.getElementById('fname').required = true;
    document.getElementById('lname').required = true;
    document.getElementById('mascot').required = true;
    document.getElementById('img').required = true;
    document.getElementById('imgcap').required = true;
    document.getElementById('personalbg').required = true;
    document.getElementById('probg').required = true;
    document.getElementById('schoolbg').required = true;
    document.getElementById('webbg').required = true;
    document.getElementById('os').required = true;
    document.getElementById('agreement').required = true;
}
function reset(){
    document.getElementbyID('byo-form').reset();
}
function addCourse(){
    let coursegen = document.getElementById('course-gen');
    let breakL = document.createElement('br');
    let title = document.createTextNode('Course Title: ')
    let courseTitle = document.createElement('input');
    let course = document.createTextNode('Course Description: ');
    let coursetext = document.createElement('textarea');
    coursegen.before(breakL,title,courseTitle,course,coursetext);
}
function rmCourse(){
    alert('rmcourse work');
}
function genIntro(){
    let introElement = document.getElementById("form-list");
    if(introElement.className === "text-format color hidden"){
        introElement.className = "text-format color";
    }

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let mascot = document.getElementById('mascot').value;
    document.getElementById('form-insert').textContent = fname+' '+lname+': '+mascot;

    let image = document.getElementById('image').files[0];
    const imgURL = URL.createObjectURL(image);
    let imgtext = '<img src="'+imgURL+'">';
    document.getElementById('image').textContent = imgtext;

    let imgcaption = document.getElementById('imgcap').value;
    document.getElementById('form-insert0').textContent = imgcaption;

    let personalbg = document.getElementById('personalbg').value;
    let probg = document.getElementById('probg').value;
    let schoolbg = document.getElementById('schoolbg').value;
    let webbg = document.getElementById('webbg').value;
    let os = document.getElementById('os').value;
    document.getElementById('form-insert1').textContent = 'Personal Background: '+personalbg;
    document.getElementById('form-insert2').textContent = 'Professional Background: '+probg;
    document.getElementById('form-insert3').textContent = 'Academic Background: '+schoolbg;
    document.getElementById('form-insert4').textContent = 'Web Dev Background: '+webbg;
    document.getElementById('form-insert5').textContent = 'Primary Computer Platform: '+os;

    let courses = document.getElementsByClassName('coursetexts').value;
    document.getElementById('courselist').textContent = courses;

    let funny = document.getElementById('funny').value;
    let anything = document.getElementById('anything').value;
    document.getElementById('form-insert6').textContent = 'Funny/Interesting Thing to Remember me by: '+funny;
    document.getElementById('form-insert7').textContent = 'Anything Else: '+anything;
}