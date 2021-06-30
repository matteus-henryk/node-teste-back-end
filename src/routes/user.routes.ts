import { Router } from "express";
import UserController  from "../controllers/UserController";
import ListUsersByNameLastname from "../controllers/ListUsersByNameLastname";
import GetUserByNicknameController from "../controllers/GetUserByNicknameController";

const userRoutes = Router();

userRoutes.post("/", UserController.create);
userRoutes.get("/", ListUsersByNameLastname.index);
userRoutes.get("/:nickname", GetUserByNicknameController.show);


export { userRoutes };
