let oldBody = document.querySelector("body");

let newHead = document.createElement('head');
oldBody.appendChild(newHead);

let icons = document.createElement('link');
icons.innerHTML="<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' />";
newHead.appendChild(icons);

const con = document.createElement('div');
con.classList.add('con');
oldBody.appendChild(con);

let inp = document.createElement('input');
inp.classList.add('todoInput');
function saveTodo(){
  if(inp.value){
    localStorage.setItem("todo",inp.value)
    alert("done")
  }
}
con.appendChild(inp);

let saveBtn = document.createElement('button');
saveBtn.innerText="Save";
saveBtn.classList.add('saveBtn');
con.appendChild(saveBtn);

saveBtn.addEventListener('click',()=>{
  saveTodo();
})

var listD = document.createElement("div");
listD.classList.add("listD");

setTimeout(() => {
  var todos = JSON.parse(localStorage.getItem("todo")); // Retrieve todos from localStorage

  if (todos && todos.length > 0) {
    todos.forEach(function(todo) {
      var p = document.createElement("p");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.checked; // Assuming each todo has a 'checked' property indicating its state

      var text = document.createTextNode(todo.text); // Assuming each todo has a 'text' property containing its content
      p.appendChild(checkbox);
      p.appendChild(text);
      listD.appendChild(p);
    });
    con.appendChild(listD);
  } else {
    console.log("No todos found.");
  }
}, 5000);

