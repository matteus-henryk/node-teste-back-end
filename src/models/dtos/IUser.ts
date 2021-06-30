interface IUser {
  id: string;
  name: string;
  lastname: string;
  nickname: string;
  address: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}


export {
  IUser
};
