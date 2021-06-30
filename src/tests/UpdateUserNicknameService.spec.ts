import { UpdateUserNicknameService } from "../services/UpdateUserNicknameService";
import { FakeUserRepository } from "../repositories/fakes/FakesUserRepository";
import { CreateUserService } from "../services/CreateUserService";

let fakeUserRepository: FakeUserRepository;
let createUserService: CreateUserService;
let updateUserNicknameService: UpdateUserNicknameService;

let user = {
  name: "lucas",
  lastname: "Cabral Francischini",
  nickname: "lucasHenryck",
  address: "rua carajás n95, Londrina, Paraná",
  bio: "sou lgl",
}

let userUpdate = {
  nickname: "lucashenryk22"
}

describe("UpdateUserNicknameService", () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    createUserService = new CreateUserService(fakeUserRepository);

    updateUserNicknameService= new UpdateUserNicknameService(fakeUserRepository);
  });

  it("Shoul be able to update nickname user", async () => {
    const userCreated = await createUserService.execute(user);

    const { id } = userCreated;

    const userUpdated = await updateUserNicknameService.execute({
      id,
      ...userUpdate
    });

    expect(userUpdated?.nickname).toBe(userUpdate.nickname);
  });
});
