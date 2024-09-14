let todo = [];

let req = prompt("please enter your request");
while (true) {
  if (req == "quit") {
    console.log("quiting app!");
    break;
  } else if (req == "list") {
    console.log("-------------");
    for (task of todo) {
      console.log(task);
    }
    console.log("-------------");
  } else if (req == "add") {
    let task = prompt("please enter your task you want to add.");
    todo.push(task);
    console.log("task added!");
  } else if (req == "delete") {
  }
}
