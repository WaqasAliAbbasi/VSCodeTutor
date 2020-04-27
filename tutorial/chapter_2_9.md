# Comment / Uncomment

Commenting is an important feature of almost every programming language. These
are the parts of the language that are targeting for a human and the compiler /
interpreter ignores them. VSCode provides a shortcut to mark lines as
comments.

For different programming languages comment construct could be different. e.g.
for `html` it is `<!-- comment -->` while for JavaScript it is `//` or `/* */`

- Toggle comments - `Cmd + /`

## Exercise

In the block given below, some of the lines are wrapped in JavasScript comments
`//`. Use the toggle comments keyboard shortcut learned above to uncomment
those lines.

```typescript
function Person() {
  this.age = 0;
  // console.log(this.age);

  setInterval(() => {
    // console.log(this.age);
    this.age++;
  }, 1000);
}

var p = new Person();
```

VSCode would wrap and unwrap given text in comment block depending upon
the type of file used.

Try changing the syntax from `Markdown` to `JavaScript` or `Ruby` by clicking
clicking at the lower right corner of VSCode. Play with this command a
bit then.

Another way of changing the language is through command palette. (Formal intro
will follow later in the last module). Press `Command + Shift + P` and type
`Change Language Mode` to select language from the list of languages.

While writing programs and code, commenting shortcut frequently comes in handy
when you want to debug a section of the program. Comment out the lines of code
that you suspect, run the program again, possibly some clue lies there.
