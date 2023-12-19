import { Router } from "express";

import{
    login,
    viewStudentsList,
    searchStudent,
    addTimetable,
    viewTimetable,
    updateTimeTable,
    deleteTimeTable,
    addStudentMarks,
    viewStudentMarks,
    viewOneStudentMarks,
    showStudentMarks,
    updateStudentMarks,
    deleteStudentMarks,
    searchStudentMarks,
    viewProfile,
    updateProfile
} from './controller'
const router= new Router()

router.get('/login',login)

router.get('/viewstudents', viewStudentsList)

router.get('/searchstudent',searchStudent)

router.post('/addtt',addTimetable)

router.get('/viewtt',viewTimetable)

router.put('/updatett/:id',updateTimeTable)

router.delete('/deletett/:id', deleteTimeTable)

router.post('/addmarks',addStudentMarks)

router.get('/viewmarks',viewStudentMarks)

router.get('/viewstudentmarks', viewOneStudentMarks)

router.get('/stumarks',showStudentMarks)

router.put('/updatemarks/:id', updateStudentMarks)

router.delete('/delMarks/:id', deleteStudentMarks)

router.get('/searchstudentmarks',searchStudentMarks)

router.get('/profile',viewProfile)

router.put('/updateprofile/:id',updateProfile)

export default router