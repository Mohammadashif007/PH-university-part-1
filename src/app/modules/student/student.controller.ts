import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
      const {students: studentData} = req.body;
    // ! zod validated data
    const validatedData = studentValidationSchema.parse(studentData)
    const result = await StudentServices.createStudentIntoDB(validatedData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong!',
        error: error,
      });
  }
};

const getAllStudents = async(req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "Students retrieve successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const getSingleStudent = async(req: Request, res: Response) => {
    try {
        const {studentId} = req.params;
        const result = await StudentServices.getSingleStudentFromDB(studentId)
        res.status(200).json({
            success: true,
            message: "Single student retrieve successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}


export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent
}