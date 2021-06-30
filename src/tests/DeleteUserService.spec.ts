import { DeleteUserService } from "../services/DeleteUserService";
import { FakeUserRepository } from "../repositories/fakes/FakesUserRepository";
import { CreateUserService } from "../services/CreateUserService";

let createUserService: CreateUserService;
let fakeUserRepository: FakeUserRepository;
let deleteUserService: DeleteUserService;

let user = {
  name: "lucas",
  lastname: "Cabral Francischini",
  nickname: "lucasHenryck",
  address: "rua carajás n95, Londrina, Paraná",
  bio: "sou lgl",
}

describe("DeleteUserService", () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    createUserService = new CreateUserService(fakeUserRepository);

    deleteUserService = new DeleteUserService(fakeUserRepository);
  });

  it("Should be able to delete a user", async () => {
    const userCreated = await createUserService.execute(user);

    await deleteUserService.execute(userCreated.id);

    const userAlreadyExists = await fakeUserRepository.getUserById(userCreated.id);

    expect(userAlreadyExists).toBe(undefined);
  });
});
