import { FakeUserRepository } from "../repositories/fakes/FakesUserRepository";
import { CreateUserService } from "../services/CreateUserService";
import { GetUserByNicknameService } from "../services/GetUserByNicknameService";

let createUserService: CreateUserService;
let fakeUserRepository: FakeUserRepository;
let getUserByNicknameService: GetUserByNicknameService;

let user = {
  name: "lucas",
  lastname: "Cabral Francischini",
  nickname: "lucasHenryck",
  address: "rua carajás n95, Londrina, Paraná",
  bio: "sou lgl",
}


describe("GetUserByNicknameService", () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    createUserService = new CreateUserService(fakeUserRepository);

    getUserByNicknameService = new GetUserByNicknameService(fakeUserRepository)
  });

  it("Should be able to get user by nickname", async () => {
    const userCreated = await createUserService.execute(user);

    const searchUser = await getUserByNicknameService.execute(user.nickname);

    expect(searchUser?.nickname).toContain(userCreated?.nickname);
    expect(searchUser?.name).toContain(userCreated?.name);
    expect(searchUser?.lastname).toContain(userCreated?.lastname);
  });
});
