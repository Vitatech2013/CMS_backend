import { Router } from "express";

import {
    login,
    addBooks,
    viewBooks,
    updateBooks,
    deleteBook,
    viewStudents,
    searchStudent,
    addStudentBooks,
    viewStudentBooks,
    updateStudentBooks,
    deleteStudentBook,
    searchStudentBooks,
    viewProfile,
    updateProfile
} from "./controller"


const router=new Router()

router.get('/login',login)

router.post('/addbook',addBooks)

router.get('/books',viewBooks)

router.put('/book/:id',updateBooks)

router.delete('/book/:id',deleteBook)

router.get('/studentlist',viewStudents)

router.get('/searchstudent',searchStudent)

router.post('/addstudentbooks', addStudentBooks)

router.get('/viewstudentbooks',viewStudentBooks)

router.put('/editstubooks/:id', updateStudentBooks)
 
router.delete('/delstubooks/:id', deleteStudentBook)

router.get('/searchstudentbook',searchStudentBooks)

router.get('/profile', viewProfile)

router.put('/updateprofile/:id', updateProfile)

export default router