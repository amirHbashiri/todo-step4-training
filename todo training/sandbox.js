const btn = document.getElementById("add");
const list = document.getElementById("todolist");
const completebtn = document.getElementById("complete");
const allbtn = document.getElementById("all");
const activebtn = document.getElementById("active");
const del = document.querySelector(".delbtn");
let input = document.getElementById("input");

const todoitem = () => {
  let todoitem = document.createElement("li");
  const item = `<input type="checkbox" class="complete"  name="" id=""><span class="text">${input.value}</span><div class="contbtn"><div class="editbtn"></div><div class="delbtn"></div></div>`;
  todoitem.classList.add("item");
  todoitem.innerHTML += item;
  list.prepend(todoitem);
};

btn.addEventListener("click", function () {
  if (input.value == "") {
    alert("Please enter some thing...");
  } else {
    todoitem(input.innerText);
    input.value = "";
  }
});

allbtn.addEventListener('click',function(){
  let check = document.querySelectorAll('.complete');
  for(let i=0;i<check.length;i++){
    if(check[i].parentElement.classList.contains('not')){
      check[i].parentElement.classList.remove('not');
    }
  }

  completebtn.classList.remove("over");
  activebtn.classList.remove('over');
  allbtn.classList.add("over");
});

completebtn.addEventListener("click", function () {
  let check = document.querySelectorAll(".complete");
  for (let i = 0; i < check.length; i++) {
    if (check[i].checked !== true) {
      check[i].parentElement.classList.add("not");
    } else {
      check[i].parentElement.classList.remove("not");
    }
  }

  completebtn.classList.add("over");
  allbtn.classList.remove("over");
  activebtn.classList.remove('over');
});

activebtn.addEventListener('click',function (){
  let check = document.querySelectorAll('.complete');
  for(let i=0;i<check.length;i++){
    if(check[i].checked !==true){
      check[i].parentElement.classList.remove('not');
    }else{
      check[i].parentElement.classList.add('not');
    }
  }
  completebtn.classList.remove('over');
  allbtn.classList.remove('over');
  activebtn.classList.add('over');
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delbtn")) {
    e.target.parentElement.parentElement.remove();
  }
});
