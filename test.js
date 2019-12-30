import test from "ava"
let clipboard = require(".")

test("main", (t) => {
    clipboard = "Some text"
    t.is(clipboard, "Some text")
})
