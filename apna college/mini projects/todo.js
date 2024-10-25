let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  console.log(inp.value);

  let item = document.createElement("li");
  item.innerText = inp.value;
  ul.appendChild(item);
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);

  inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     console.log("task deleted");
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }

ul.addEventListener("click", function () {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("Task Deleted!!!");
  }
});
