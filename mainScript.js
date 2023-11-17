let oldBody = document.querySelector("body");

let newHead = document.createElement('head');
oldBody.appendChild(newHead);

let icons = document.createElement('link');
icons.innerHTML="<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' />";
newHead.appendChild(icons);

const con = document.createElement('div');
con.classList.add('con');
oldBody.appendChild(con);

let wallBtn = document.createElement('button');
wallBtn.innerText="Wallpaper";
wallBtn.classList.add('wallBtn');
con.appendChild(wallBtn);

let colorTheme = document.createElement("button");
colorTheme.innerText="Theme"
colorTheme.classList.add("colorTheme")
con.appendChild(colorTheme);
