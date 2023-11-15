let oldBody = document.querySelector("body");

let newHead = document.createElement('head');
oldBody.appendChild(newHead);

let icons = document.createElement('link');
icons.innerHTML="<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' />";
newHead.appendChild(icons);

const con = document.createElement('div');
con.classList.add('con');
oldBody.appendChild(con);

let saveBtn = document.createElement('button');
saveBtn.innerText="Save";
saveBtn.classList.add('saveBtn');
con.appendChild(saveBtn);

let inp = document.createElement('input');
inp.classList.add('todoInput');
function saveTodo(){
  if(inp.value){
    localStorage.setItem("todo",inp.value)
    alert("done")
  }
}
con.appendChild(inp);
saveBtn.addEventListener('click',()=>{
  saveTodo();
})

setTimeout(()=>{
  alert(localStorage.getItem("todo"));
},5000)


