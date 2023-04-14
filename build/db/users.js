"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ObjectId = require('bson').ObjectId;
function getBaseUsers() {
    return [
        {
            _id: ObjectId(),
            username: "miquel@email.com",
            name: "Miquel",
            surname: "Abella",
        },
        {
            _id: ObjectId(),
            username: "dayan@email.com",
            name: "Dayan",
            surname: "Álvarez",
        },
        {
            _id: ObjectId(),
            username: "joe@email.com",
            name: "Joe",
            surname: "Alt"
        },
        {
            _id: ObjectId(),
            username: "ynohe@email.com",
            name: "Ynohe",
            surname: "Alvarez"
        },
    ];
}
exports.default = getBaseUsers;
