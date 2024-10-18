/**Qs1.Create a newinput and button element on the page using JavaScript only. Set the text of button to “Click me” ;. */
let inp = document.createElement("input");
document.querySelector("body").append(inp);

let butt = document.createElement("button");
butt.innerText = "CLick Me";
document.querySelector("body").append(butt);

/** Q2. Add following attribute to the element :
 * ~ change placeholder value of input to "username".
 * ~ change the id of button to "btn".
 */

inp.setAttribute("placeholder", " USERNAME ");
butt.setAttribute("id", "btn");

/** Q3. Access the btn using the querySelector and button id. Chnage the button background color to the blue and text color to white. */

let but = document.querySelector("#btn");
but.style.backgroundColor = "blue";
but.style.color = "white";

/** Q4. Create an h1 elemet on the page and set its text tp "DOM Practice " underlined. Change its color to purple. */

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.querySelector("body").append(h1);
h1.classList.add("h1");

/** Q5. Create a p tag on the page and st its text to "Apna College Delta Practice", where Delta is bold. */

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice.";
document.querySelector("body").append(para);
