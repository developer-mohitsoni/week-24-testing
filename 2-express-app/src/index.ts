import express, { Request, Response } from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req:Request, res:Response) => {
    const {a, b} = req.body;
    const answer = a + b;

    res.json({
        answer
    })
});
