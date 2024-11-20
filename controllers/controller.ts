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
                name: name.toUpperCase(),
                place,
                standard,
                medium: medium.toUpperCase()
            })

            await insertStudent.save()
            return res.redirect('/')
        } catch (error) {
            console.log(error);

        }
    }

    async deleteStudent(req: Request, res: Response): Promise<void> {
        try {
            await student.findByIdAndDelete({ _id: req.query._id })
            return res.redirect('/')
        } catch (error) {
            console.log(error);

        }
    }

    async getEditStudent(req: Request, res: Response): Promise<void> {
        try {
            const studentData = await student.findOne({ _id: req.query._id })

            return res.render('update', { studentData })
        } catch (error) {
            console.log(error);
        }
    }

    async editStudent(req: Request, res: Response): Promise<void> {
        try {
            const { name, place, standard, medium }: Details = req.body

            await student.findOneAndUpdate(
                { _id: req.body._id },
                {
                    $set: {
                        name,
                        place,
                        standard,
                        medium
                    }
                }
            )

            return res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }
    async search(req: Request, res: Response): Promise<void> {
        try {
            let SearchData = req.query.str
            const StudentData = await student.find({ name: { "$regex": SearchData } })
            return res.render('students', { StudentData })
        } catch (error) {
            console.log(error);
        }
    }
}