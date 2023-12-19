import { Router } from "express";
import superAdmin from "./superadmin";
import Aadmin from "./Admin";
import officer from "./officer";
import librarian from "./librarian";
import student from "./student"
import faculty from "./faculty"
import placement from "./placementCompany"

const router=new Router()

router.use('/superadmin', superAdmin)

router.use('/admin', Aadmin)

router.use('/officer', officer)

router.use('/librarian', librarian)

router.use('/student', student)

router.use('/faculty',faculty)

router.use('/placement',placement)

export default router