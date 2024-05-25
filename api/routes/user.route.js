import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get("/test2", test);
router.post("/update/:id",verifyToken, updateUser);

export default router;
