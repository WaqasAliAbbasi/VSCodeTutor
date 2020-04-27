# Expand selection to scope

- Shortcut - `Control + Shift + Command + left/right`

I love this shortcut. This is super useful in a lot of conditions. The good
part about this shortcut is that on every consecutive press it expands to the
immediate parent scope.

## Exercise

1. Put your cursor at different places in the code block below
2. try using `Control + Shift + Command + right` multiple times.
3. The selection will increase on every consecutive keystroke. (i.e. Keep the
   `Control`, `Shift` and `Command` keys depressed and hit the `right` key multiple times.
   Hit `left` to shrink the selection.)

```js
var CommentBox = React.createClass({
  render: function () {
    return <div className="commentBox">Hello, world! I am a CommentBox.</div>;
  },
});
ReactDOM.render(<CommentBox />, document.getElementById("content"));
```
