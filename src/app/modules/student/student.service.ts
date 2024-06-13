import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  // ! build in static method
  // const result = await StudentModel.create(studentData);
  // return result;
  // ! build in instance method
  const student = new Student(studentData);
  if(await student.isUserExists(studentData.id)){
    throw new Error('User already exists!')
  }
  const result = student.save();
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
