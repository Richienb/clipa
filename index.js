"use strict"

const { readSync, writeSync } = require("clipboardy")

const clipa = {
    get clipboard() {
        return readSync()
    },
    set clipboard(value) {
        return writeSync(value)
    },
}

module.exports = clipa.clipboard
