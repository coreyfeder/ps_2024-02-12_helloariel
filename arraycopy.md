# Copying Arrays

Let's set up an experiment. We'll make an array, and try three different ways of "copying" it.

## Setup

```
let arr1 = [0, 1, 2, 3, 4];
let arr2 = arr1;
let arr3 = [...arr1];
let arr4 = arr1.concat();
```

Here's what they each look like according to `console.log`:
- `console.log(arr1);` →  `[ 0, 1, 2, 3, 4 ]`
- `console.log(arr2);` →  `[ 0, 1, 2, 3, 4 ]`
- `console.log(arr3);` →  `[ 0, 1, 2, 3, 4 ]`
- `console.log(arr4);` →  `[ 0, 1, 2, 3, 4 ]`

## How Are They Different?

They all *look* the same. But let's compare.

- `console.log(`\``arr1 == arr1?  ${arr1 == arr1}`\``);` → `true`
- `console.log(`\``arr1 == arr2?  ${arr1 == arr2}`\``);` → `true`
- `console.log(`\``arr1 == arr3?  ${arr1 == arr3}`\``);` → `false`
- `console.log(`\``arr1 == arr4?  ${arr1 == arr4}`\``);` → `false`

Odd. What if we make a change to the original array?
`arr1[0] = "new_value";` will replace the first element of `arr1`.

- `console.log(arr1);` →  `[ 'new_value', 1, 2, 3, 4 ]`
- `console.log(arr2);` →  `[ 'new_value', 1, 2, 3, 4 ]`
- `console.log(arr3);` →  `[ 0, 1, 2, 3, 4 ]`
- `console.log(arr4);` →  `[ 0, 1, 2, 3, 4 ]`

## What happened?

First, understand that a variable isn't a piece of data; it's a note saying where to find the data. It's shorthand coders use to tell the computer, "I'll need this these bits later." And the computer stashes them in a safe deposit box and hands over the key.

#### _`arr2 = arr1`_

This statement means "make `arr2` be _exactly_ like `arr1`." `arr2` becomes synonymous with `arr1`. It's a second key to the safe deposit box. They're two keys on different keyrings, but they open the same box.

This is fine, IF everyone knows multiple people are using the box. Imagine that you think you're the only one using some safe deposit box, but one day you open it expecting to see the cash or whatever you put in there, and instead find it's instead full of snakes.

Obviously, that would be awesome. Snakes are adorable. But you'd be confused, right?

#### _`arr3 = [...arr1]`_

`[ ]` basically means, "make an Array, and fill it with whatever's inside the brackets." The spread syntax `...` is shorthand for "all the contents of". Put together like this, `[...arr1]` translates to, "open up a new safe deposit box, and dump all the stuff from `arr1` into it. But the metaphor breaks here, because `arr1` remains unaffected. `arr3` and `arr1` just have the same stuff. `arr3` is a clone of `arr1`. But they are different boxes, with different keys. If someone fills the `arr1` box with snakes, the `arr3` box will remain sadly snakeless.

#### _`arr4 = arr1.concat()`_

`concat` is designed to take some number of arrays, then stitch them together into a new array that looks like all of those arrays stitch them them all into one new array, and spit that out. When called with nothing between the parenthesis, the only thing being copied is `arr1`. This is just the same as the previous case; `arr4` is a clone of `arr1`, but they are different boxes with different keys. Again, no sharing of snakes.

> **_Note:_** The two cases above are both [shallow copies](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy).


### One more

What if we assign `arr1` to something else entirely?

> `arr1 = "blah";`

- `console.log(arr1);` →  `'blah'`
- `console.log(arr2);` →  `[ 'new_value', 1, 2, 3, 4 ]`
- `console.log(arr3);` →  `[ 0, 1, 2, 3, 4 ]`
- `console.log(arr4);` →  `[ 0, 1, 2, 3, 4 ]`

`arr1` just forgets everything about the array it was pointing at, and it goes to point at something else. The array itself doesn't change. From the perspective of `arr2`, nothing has happened. `arr1` isn't even necessarily a key anymore...maybe it's a checking account number, or a bookmark, or a pendant, or it joined a cult. Whatever, man, we don't need that guy.
