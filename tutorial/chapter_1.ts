/*
# encoding: UTF-8
# If you followed the instructions from chapter 1 of this tutorial correctly,
# you have reached here. That means you have successfully executed Goto
# Anything command.

# There are a couple of modifiers to Goto Anything command that we are going to
# try out in this unit.

# Goto Symbol
# ============
#
# 1. Press `Cmd + Shift + O` to get a list of symbols in the current file
# 2. Type `F` to filter the class definition from the list of symbols
# 3. Press `Return` to go to `Foo` class
# 4. Press `F2` (fn + increase brightness on macbooks) to rename the class name
#    from `Foo` to `Bar` (`Foo` is already selected)
# 5. Now press `Cmd + Shift + O` again and go to the definition of `bar1`
# 6. Press `F2` to rename the method name from `bar1` to `bar_1`
# 7. Now press `Cmd + Shift + O` again and go to the definition of `bar2`
# 8. Press `F2` to rename the method name from `bar2` to `bar_2`
*/

export class Foo {
  bar1() {
    console.log("bar1");
  }

  bar2() {
    console.log("bar2");
  }
}

/*
# Goto Line number
# ==================
#
# 1. `Control + G` gives you a goto line number palette
# 2. Type the number `25` and press `Return` to reach this line
# 3. Now change the quoted word to `bar_1`
# 4. Type the number `29` and press `Return` to reach this line
# 5. Now change the quoted word to `bar_2`
# 6. When you are done with all the changes, press `Cmd + Z` multiple
#    times to get back to the original state. We plan to use them again
#    later in this tutorial.


# Move to next chapter
# ---------------------
#
# 1. Press `Cmd + P` to get the Goto Anything palette
# 2. Type `c2.md` and press `Return` to reach the second chapter
#    in the series of this tutorial

# Shortcuts under your belt
# -------------------------
# 1. Goto Anything - `Cmd + P`
# 2. Goto Symbol in current file - `Cmd + Shift + O`
# 3. Goto Line number - `Control + G`
*/
