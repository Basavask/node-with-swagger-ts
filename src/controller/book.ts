import { Request, Response, NextFunction } from "express";
import { books } from "../util/data";

export const getBooksFn = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(books);
};

export const postBooksFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, author, finished } = req.body;

  let book = {
    id: books.length + 1,
    title: title,
    author: author,
    finished: finished !== undefined ? finished : false,
    createdAt: new Date(),
  };

  books.push(book);

  res.status(200).json(books);
};
