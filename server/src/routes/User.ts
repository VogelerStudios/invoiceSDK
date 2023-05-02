import express from "express";
import * as UserController from "../controllers/User";

const router = express.Router();

router.post("/signup", UserController.signup);
router.post("/login", UserController.login);

export default router;
