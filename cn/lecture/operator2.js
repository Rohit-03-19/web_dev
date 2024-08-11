/*OPerators in Javascript */

// !.Comparison Operator
// (==, !=, <, >, >=, ===, !==)

/** 1. == this is used to check whether something is equalor not
    2. != this is used to check whether things are unequal or not.
    3. <=/>= this sign is used to check whether somehting is less/greater that or equal to some other argument.
    4. </> this sign is used to check whether an argument is greater or less than second argument.
    5. === this sign compares the data with the data type example( '6' === 6 gives false but '6' == 6 gives true) this happens because == only checks  the data and ignore data type, but === also checks the data type.
    6. !== this checks the data is no equal the given argumented or not. this also works on the same priciple as the above sign do.
 */

console.log("6" !== 6);
console.log("6" === 6);
console.log("6" != 6);
console.log("6" == 6);


// logical operators

// in logical operators they give false for some values the values are(undefined, null, NaN, 0, false) these values are falsy values.

// (1-9, string except spaces, true) these values are truthy values.

// (and operator && gives us last truthy value and last falsy value.)

console.log(3&&4&&5&&6&&8);
// it will give us 8 as output.
console.log(1&&2&&0&&6&&null);

// this thing works opposite in or operator || as it gives first truthy value and last falsy value.
