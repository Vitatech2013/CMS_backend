import { Router } from "express";
import{
officerLogin,
studentRegistration,
updateStudent,
deleteStudent,
viewAllStudents,
viewStudent,
addFee,
viewFee,
updateFee,
deleteFee,
addEmployee,
viewEmployee,
updateEmployee,
deleteEmployee,
searchEmployee,
typeofEmployess,
addStudentFees,
viewstudentFees,
updateStudentFees,
deleteStudentFee,
viewParticularStudentFee,
addstudentTotalFee,
viewStudentTotalFee,
updateStudentTotalFee,
deleteStudentTotalFee,
viewParticularStudentTotalFee,
addPlacementCpmpany,
viewPlacementCompany,
studentApplyJobs,
searchStudentJobs,
viewprofile,
updateProfile,
branchwiseStudents,
getFeeByYear
} from "./controller"

const router= new Router()

router.get('/login',officerLogin)

router.post('/studentreg',studentRegistration)

router.get('/student', viewStudent)

router.get('/allstudents',viewAllStudents)

router.put('/updatestudent/:id',updateStudent)

router.delete('/delstudent/:id', deleteStudent)

router.post('/addfee', addFee)

router.get('/viewfee',viewFee)

router.put('/updatefee/:id', updateFee)

router.delete('/delfee/:id',deleteFee)

router.post('/addemp', addEmployee)

router.get('/emps',viewEmployee)

router.put('/updateemp/:id', updateEmployee)

router.delete('/delemp/:id',deleteEmployee)

router.get('/searchemp',searchEmployee)

router.get('/toe',typeofEmployess)

router.post('/addstufee', addStudentFees)

router.get('/showstufees', viewstudentFees)

router.get('/stufee',viewParticularStudentFee)

router.put('/updatestufee/:id',updateStudentFees)

router.delete('/delstufee/:id',deleteStudentFee)

router.post('/stutotalfee',addstudentTotalFee)

router.get('/viewstutotalfee', viewStudentTotalFee)

router.put('/editstutotalfee/:id', updateStudentTotalFee)

router.delete('/delstutotalfee',deleteStudentTotalFee)

router.get('/showstutotalfee', viewParticularStudentTotalFee)

router.post('/addplacement',addPlacementCpmpany)

router.get('/viewplacement',viewPlacementCompany)

router.get('/studentjobs',studentApplyJobs)

router.get('/searchstujobs', searchStudentJobs)

router.get('/branchwisestudents', branchwiseStudents)

router.get('/getfeebyyear', getFeeByYear)

router.get('/profile', viewprofile)

router.put('/updateprofile/:id', updateProfile)

export default router