import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import asyncHandler from 'express-async-handler'

dotenv.config();
const prisma = new PrismaClient()
const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", asyncHandler(async (req: Request, res: Response) => {
    // const newUser = await prisma.user.create({
    //     data: {
    //         email: "john.doe@example.com",
    //         password: "verysecurepassword",
    //         firstName: "John",
    //         lastName: "Doe",
    //         role: "USER", // Use "HR" or "COMPANY_ADMIN" as needed
    //     },
    // });
    // res.json(newUser);
    res?.status(200).json({ message: "hello" })
}));


app.listen(port, () => {
    console.log('yoo');
    console.log(`[server]: Server is running at http://localhost:${port}`);
});