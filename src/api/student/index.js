import { Router } from "express";

import {
    login,
    viewTimeTable,
    viewMarks,
    viewFee,
    viewbooks,
    viewProfile,
    updateProfile,
    viewJobsList,
    applyJob,
    viewJobStatus

} from "./controller"

const router=new Router()

router.get('/login',login)

router.get('/viewtt',viewTimeTable)

router.get('/viewMarks',viewMarks)

router.get('/showfee', viewFee)

router.get('/showbooks', viewbooks)

router.get('/alljobs', viewJobsList)

router.post('/applyjob', applyJob)

router.get('/viewjob', viewJobStatus)

router.get('/profile',viewProfile)

router.put('/updateprofile/:id',updateProfile)


export default router