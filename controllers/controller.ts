import { Request, Response } from "express";
import student from "../models/student";

interface Details {
    name: String;
    place: String;
    standard: Number;
    medium: String;
}

export class controllers {
    async home(req: Request, res: Response): Promise<void> {
        const StudentData = await student.find()

        res.render('students', { StudentData })
    }

    async addStudent(req: Request, res: Response): Promise<void> {
        try {
            const { name, place, standard, medium }: Details = req.body

            const insertStudent = new student({
                name,
                place,
                standard,
                medium
            })

            await insertStudent.save()
            return res.redirect('/')
        } catch (error) {
            console.log(error);
            
        }
    }
}