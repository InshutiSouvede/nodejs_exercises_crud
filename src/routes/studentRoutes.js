import express from 'express'
import { addStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from '../controllers/studentsController.js'
const router = express.Router()
router.get('/',getAllStudents)
router.get('/:id',getStudentById)
router.post('/',addStudent)
router.put('/:id',updateStudent)
router.delete('/:id',deleteStudent)
export default router