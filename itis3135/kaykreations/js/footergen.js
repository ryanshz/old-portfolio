const footer = document.createElement('footer');
const nav1 = document.createElement('nav');
const nav2 = document.createElement('nav');
const nav3 = document.createElement('nav');
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');

a1.setAttribute('href','#');
a1.innerHTML = 'Home';
a2.setAttribute('href','#');
a2.innerHTML = 'Socials';
a3.setAttribute('href','../shultzcorp.com');
a3.setAttribute('target','_blank')
a3.innerHTML = '&copy;shultzcorp';

nav1.appendChild(a1);
nav2.appendChild(a2);
nav3.appendChild(a3);
footer.appendChild(nav1);
footer.appendChild(nav2);
footer.appendChild(nav3);
document.body.appendChild(footer);