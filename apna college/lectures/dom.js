// let smallImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImages.length; i++) {
//   smallImages[i].src = "../images/spiderman_img.png";
//   console.log(`values of image no. ${i} is changed.`);
// }

/** Using properties and Methods
 * first we will se text based.
 * INNERTEXT :- shows te visible text contained in a node
 *
 * TEXTCONTENT :- shows all the full text.
 *
 * INNERHTML :- shows the full markup.
 */

// let heading = document.querySelector("h1");
// console.log(heading);
// heading.innerHTML = "<u>Spider man </u>";

/** Manipulating Attributes
 * abj.getAttribute( attr )
 * abj.setAttribute( attr, val)
 */

/** chaing the style of the obj
 * Manipulating the style
 * abj.style
 */

// let img = document.querySelector("img");
// img.style;

// let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "red";
// }

/** Manipulating the Attributes
 * obj.getAttribute( attr )
 * obj.setAtrribute( attr )
 */

let img = document.querySelector("img");
comsole.log(img);
img.getAttribute("id");
img.setAttribute("id", "spidermanImg");
