var oldBody = document.querySelector("body");

var newHead = document.createElement('head');
oldBody.appendChild(newHead);

var icons = document.createElement('link');
icons.innerHTML="<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' />";
newHead.appendChild(icons);

const con = document.createElement('div');
con.classList.add('con');
oldBody.appendChild(con);




