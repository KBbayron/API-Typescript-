import { Router } from "express";
import UserController from "../controller/user";
import User from "../model/user";
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

const router = Router();
const userCtrl = new UserController();

router.get('/test', (req, res) => {
    return res.status(200).json(
        new BaseResponse(
            "Usuario creado",
            "Se ha creado el usuario",
            userCtrl.create()
        )
    )
});

export default router;