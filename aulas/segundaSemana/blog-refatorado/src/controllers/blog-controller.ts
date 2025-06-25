import { Request, Response } from 'express';
import textServices from "../services/textServices";

export const createPost = (req: Request, res: Response): void => {
    const { title, content, status, author } = req.body;
    const newText = textServices.createText({ title, content, status, author });
    res
    .status(201)
    .json({message: `Texto ${newText.title} criado com sucesso`});
};

export const listPosts = (req: Request, res: Response): void => {
    const texts = textServices.getAllTexts();
    res.json(texts);
    
};

