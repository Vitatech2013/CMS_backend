import { Router } from "express";

import{
    login,
    viewOfficer,
    totalStudents,
    viewBranchStudentsList,
    searchstudent,
    viewFaculty,
    viewFees,
    studentfeeslist,
    searchstudentfee,
    viewBooks,
    viewStudentBooks,
    showStudentTotalFee,
    showParticularStudentTotalFee,
    searchStudentTotalFee,
    clearStudentFee,
    studentApplyJobs,
    searchStudentJob,
    showPlacementCompany



} from "./controller"

const router=new Router()

router.get('/login',login)

router.get('/officer',viewOfficer)

router.get('/totalstudents',totalStudents)

router.get('/students',viewBranchStudentsList)

router.get('/searchstufee', searchstudentfee)

router.get('/viewfaculty', viewFaculty)

router.get('/fee', viewFees)

router.get('/studentfee', studentfeeslist)

router.get('/searchstudent',searchstudent)

router.get('/stutotalfee', showStudentTotalFee)

router.get('/viewstutotalfee', showParticularStudentTotalFee)

router.get('/searchstutotalfee', searchStudentTotalFee)

router.put('/clearfee/:id',clearStudentFee)

router.get('/totalbooks', viewBooks)

router.get('/showstubooks', viewStudentBooks)

router.get('/viewplacements', showPlacementCompany)

router.get('/studentjobs', studentApplyJobs)

router.get('/searchstujob', searchStudentJob)

export default router