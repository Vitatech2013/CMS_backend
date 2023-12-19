import { Router } from "express";

import { 
    placementLogin,
    viewApplyStudents,
    updateStatus ,
    viewCompanyProfile,
    updateCompanyProfile,
    searchStudent

} from "./controller";

const router=new Router()

router.post('/login',placementLogin)

router.get('/viewstudents',viewApplyStudents)

router.put('/status/:id',updateStatus)

router.get('/profile', viewCompanyProfile)

router.put('/updateProfile/:id', updateCompanyProfile)

router.get('/searchstudent', searchStudent)

export default router