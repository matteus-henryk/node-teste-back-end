import { Router } from "express";
import UserController  from "../controllers/UserController";
import ListUsersByNameLastname from "../controllers/ListUsersByNameLastname";
import GetUserByNicknameController from "../controllers/GetUserByNicknameController";
import UpdateAddressLastnameController from "../controllers/UpdateAddressLastnameController";
import UpdateUserNicknameController from "../controllers/UpdateUserNicknameController";
import { createUserValidationFormat, updateLastnameAddressValidationFormat, updateNicknameValidationFormat } from "../validations/user.validations";

const userRoutes = Router();

userRoutes.post(
  "/",
  createUserValidationFormat,
  UserController.create
);

userRoutes.get(
  "/",
  ListUsersByNameLastname.index
);

userRoutes.get(
  "/:nickname",
  GetUserByNicknameController.show
);

userRoutes.put(
  "/:id",
  updateLastnameAddressValidationFormat,
  UpdateAddressLastnameController.update
);

userRoutes.patch(
  "/:id",
  updateNicknameValidationFormat,
  UpdateUserNicknameController.update
);

userRoutes.delete(
  "/:id",
  UserController.delete
);

export {
  userRoutes
};
