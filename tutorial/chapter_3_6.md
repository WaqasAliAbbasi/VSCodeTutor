Selecting content between the brackets
=======================================

While coding some stuff, it is generally a frequent requirement to select the
content between a set of brackets. VSCode makes is really easy to do so using smart select.

* Shortcut - `Shift + Option + left/right`

Place your cursor anywhere between a set of brackets and use either `Shift + Option + right` (to select until end bracket) or `Shift + Option + left` (to select until start bracket).


Exercise
---------

The the code segment written below select the content written in the brackets
of the `while` condition, and replace it with `!done`. For selecting the
content between the two brackets, use the shortcut `Shift + Option + left/right`.

```js

var done = false;
var counter = 1;
while ( 'some long variable which is a truthy value' ) {
  console 'running'
  if (counter > 10) {
    done = true;
  }
  counter += 1;
}

```
