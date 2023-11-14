var oldBody = document.querySelector("body");

var newHead = document.createElement('head');
oldBody.appendChild(newHead);

var icons = document.createElement('link');
icons.innerHTML="<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' />";
newHead.appendChild(icons);

const con = document.createElement('div');
con.classList.add('con');
oldBody.appendChild(con);

const title = document.createElement('h2');
title.innerText="Word find";
title.classList.add('title')
con.appendChild(title);

const searchInput = document.createElement('input');
searchInput.classList.add('searchInput');
con.appendChild(searchInput);

const closeBtn = document.createElement('span');
closeBtn.classList.add("material-symbols-outlined","closeBtn")
closeBtn.innerHTML="arrow_upward";
con.appendChild(closeBtn);

const searchBtn = document.createElement('button');
searchBtn.innerText="Search";
searchBtn.classList.add('searchBtn');
con.appendChild(searchBtn);

closeBtn.addEventListener('click',()=>{
  con.classList.toggle('conUp');
  closeBtn.classList.toggle('openBtn');
})
var elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');

searchBtn.addEventListener('click', () => {
  var searchInputV = searchInput.value;
  if (searchInputV !== "") {
    // Remove previous highlights
    elements.forEach((element) => {
      element.innerHTML = element.innerHTML.replace(/<mark>(.*?)<\/mark>/g, '$1');
    });

    let regExp = new RegExp(searchInputV, "gi");
    elements.forEach((element) => {
      // Store the previous color and add highlight
      if (element.innerHTML.match(regExp)) {
        previousColor = element.innerHTML;
        element.innerHTML = element.innerHTML.replace(regExp, '<mark>$&</mark>');

        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
});
