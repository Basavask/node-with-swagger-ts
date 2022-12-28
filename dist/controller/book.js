"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBooksFn = exports.getBooksFn = void 0;
const data_1 = require("../util/data");
const getBooksFn = (req, res, next) => {
    res.status(200).json(data_1.books);
};
exports.getBooksFn = getBooksFn;
const postBooksFn = (req, res, next) => {
    const { title, author, finished } = req.body;
    let book = {
        id: data_1.books.length + 1,
        title: title,
        author: author,
        finished: finished !== undefined ? finished : false,
        createdAt: new Date(),
    };
    data_1.books.push(book);
    res.status(200).json(data_1.books);
};
exports.postBooksFn = postBooksFn;
