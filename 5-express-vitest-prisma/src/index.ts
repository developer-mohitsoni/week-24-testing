import express, { Request,Response } from "express";
import { z } from "zod";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async (req:Request, res:Response) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    const response = await prismaClient.request.create({
        data: {
            a: parsedResponse.data.b,
            b: parsedResponse.data.a,
            answer,
            type: "Sum"
        }
    })

    console.log(response);

    res.json({
        answer,
        id: response.id
    })
});

app.get("/sum", async(req:Request, res:Response) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    const response = await prismaClient.request.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            answer,
            type: "Sum"
        }
    })

    res.json({
        answer,
        id: response.id
    })
});

app.post("/multiply",  async(req:Request, res:Response) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }

    const answer = parsedResponse.data.a * parsedResponse.data.b;

    const response = await prismaClient.request.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            answer,
            type: "Multiply"
        }
    })

    res.json({
        answer,
        id: response.id
    })
})
