import express from 'express'
const router = express.Router()

import {controllers} from '../controllers/controller'

const ctrl = new controllers

router.get('/',ctrl.home)
router.post('/addStudent',ctrl.addStudent)

export default router