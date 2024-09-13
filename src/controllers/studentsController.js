import Student from "../models/students.js";
const getAllStudents = async (req,res)=>{
    try {
        const students = await Student.find();
        res.json(students).status(200)        
    } catch (error) {
        console.log(error.message)
        res.json({error:true,message:error.message}).status(400)
    }
}
const getStudentById = async (req,res)=>{
    try {
        const id = req.params.id
        const student = await Student.findById(id);
        res.json(student).status(200)        
    } catch (error) {
        console.log(error.message)
        res.json({error:true,message:error.message}).status(400)
    }
}
const addStudent = async (req,res)=>{
    try {
        const student = new Student(req.body);

        await student.save();
        res.json(student).status(201)        
    } catch (error) {
        console.log(error.message)
        res.json({error:true,message:error.message}).status(400)
    }
}
const updateStudent = async (req,res)=>{
    try {
        const id = req.params.id
        const student = await Student.findByIdAndUpdate(id,{...req.body});
        res.json(student).status(200)        
    } catch (error) {
        console.log(error.message)
        res.json({error:true,message:error.message}).status(400)
    }
}
const deleteStudent = async (req,res)=>{
    try {
        const id = req.params.id
        const response = await Student.findByIdAndDelete(id);
        res.json(response).status(200)        
    } catch (error) {
        console.log(error.message)
        res.json({error:true,message:error.message}).status(400)
    }
}
export {getAllStudents,getStudentById,addStudent,updateStudent,deleteStudent}