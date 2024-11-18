import express from 'express'
const router = express.Router()

import {controllers} from '../controllers/controller'

const ctrl = new controllers

router.get('/',ctrl.Home)

export default router