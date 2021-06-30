import { Router } from "express";
import UserController  from "../controllers/UserController";
import ListUsersByNameLastname from "../controllers/ListUsersByNameLastname";
import GetUserByNicknameController from "../controllers/GetUserByNicknameController";
import UpdateAddressLastnameController from "../controllers/UpdateAddressLastnameController";
import UpdateUserNicknameController from "../controllers/UpdateUserNicknameController";

const userRoutes = Router();

userRoutes.post("/", UserController.create);
userRoutes.get("/", ListUsersByNameLastname.index);
userRoutes.get("/:nickname", GetUserByNicknameController.show);
userRoutes.put("/:id", UpdateAddressLastnameController.update);
userRoutes.patch("/:id", UpdateUserNicknameController.update);

export { userRoutes };
