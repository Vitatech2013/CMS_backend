import { Router } from "express";

import{
    login,
    officerRegister,
    viewOfficer,
    updateOfficer,
    deleteOfficer,
    totalStudents,
    viewBranchStudentsList,
    searchstudent,
    viewFaculty,
    viewFees,
    studentfeeslist,
    searchstudentfee,
    showStudentTotalFee,
    showParticularStudentTotalFee,
    viewBooks,
    viewStudentBooks,
    viewPlacementCompany,
    studentAppliedJobs,
    searchStudentJob
    
} from './controller'

const router=new Router()

router.get('/login',login)

router.post('/regofficer', officerRegister)

router.get('/viewofficer', viewOfficer)

router.put('/updateofficer/:id',updateOfficer)

router.delete('/delofficer/:id', deleteOfficer)

router.get('/totalstudents', totalStudents)

router.get('/viewstudents', viewBranchStudentsList)

router.get('/searchstudent', searchstudent)

router.get('/showFaculty', viewFaculty)

router.get('/fees', viewFees)

router.get('/studentfees', studentfeeslist)

router.get('/searchstudentfee',searchstudentfee)

router.get('/stutotalfee', showStudentTotalFee)

router.get('/showstutotalfee',showParticularStudentTotalFee)

router.get('/viewbooks', viewBooks)

router.get('/showstubooks', viewStudentBooks)

router.get('/viewplacements', viewPlacementCompany)

router.get('/studentjobs',studentAppliedJobs)

router.get('/searchstujob', searchStudentJob)







export default router