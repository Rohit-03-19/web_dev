/** Methods are actions that can be performed on objects.
 * Format :-  stringName.method()
 * let str="Rohit Parida";
 * str=str.method();
 */

let msg = "    Hello ";
let trimMsg = msg.trim();
/**this trim method removes excess space from the starting and ending of the string.
 * Strings are immutable in JS. so if use any kind of method/ operations on string they get actually stored in a new different string.
 */
console.log(msg, "", trimMsg);
