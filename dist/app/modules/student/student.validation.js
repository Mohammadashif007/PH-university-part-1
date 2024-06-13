"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, { message: 'First name is required' }),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().min(1, { message: 'Last name is required' }),
});
const guardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z.string().min(1, { message: "Father's name is required" }),
    fatherOccupation: zod_1.z
        .string()
        .min(1, { message: "Father's occupation is required" }),
    fatherContactNo: zod_1.z
        .string()
        .min(1, { message: "Father's contact number is required" }),
    motherName: zod_1.z.string().min(1, { message: "Mother's name is required" }),
    motherOccupation: zod_1.z
        .string()
        .min(1, { message: "Mother's occupation is required" }),
    motherContactNo: zod_1.z
        .string()
        .min(1, { message: "Mother's contact number is required" }),
});
const localGuardianValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Local guardian's name is required" }),
    occupation: zod_1.z
        .string()
        .min(1, { message: "Local guardian's occupation is required" }),
    contactNo: zod_1.z
        .string()
        .min(1, { message: "Local guardian's contact number is required" }),
    address: zod_1.z
        .string()
        .min(1, { message: "Local guardian's address is required" }),
});
const studentValidationSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, { message: 'ID is required' }),
    name: userNameValidationSchema,
    guardian: guardianValidationSchema,
    dateOfBirth: zod_1.z.string().min(1, { message: 'Date of birth is required' }),
    gender: zod_1.z.enum(['Male', 'Female']),
    email: zod_1.z.string().email({ message: 'Invalid email address' }),
    contactNo: zod_1.z.string().min(1, { message: 'Contact number is required' }),
    emergencyContactNo: zod_1.z
        .string()
        .min(1, { message: 'Emergency contact number is required' }),
    bloodGroup: zod_1.z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
    presentAddress: zod_1.z.string().min(1, { message: 'Present address is required' }),
    permanentAddress: zod_1.z
        .string()
        .min(1, { message: 'Permanent address is required' }),
    localGuardian: localGuardianValidationSchema,
    profileImage: zod_1.z.string().url({ message: 'Invalid URL' }).optional(),
    isActive: zod_1.z.enum(['active', 'block']).default('active'),
});
exports.default = studentValidationSchema;
