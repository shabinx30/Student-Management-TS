import { Request, Response } from "express";
import student from "../models/student";


export class controllers {
    async Home(req: Request, res: Response): Promise<void> {
        const StudentData = await student.find()

        res.render('students',{StudentData})
    }
}