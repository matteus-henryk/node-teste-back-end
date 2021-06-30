import { IUser } from "../dtos/IUser";
import crypto from "crypto";

class FakeUser implements IUser {
  id: string;
  name: string;
  lastname: string;
  nickname: string;
  address: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    datas: Omit<
      FakeUser,
      "id" |
      "createdAt" |
      "updatedAt"
    >
  ) {
    this.id = crypto.randomBytes(8).toString("hex");

    Object.assign(
      this,
      datas
    );

    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

}

export {
  FakeUser
};
