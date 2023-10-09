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
    alert('addcourse work');
}
function rmCourse(){
    alert('rmcourse work');
}
function genIntro(){
    let first_name = document.createElement('h2');
    first_name.attribute = "center color";
    const content = document.getElementById('fname').value;
    first_name.appendChild(content);
    const ipt = document.getElementById('form-insertion-point');
    document.body.insertBefore(ipt,first_name);
}