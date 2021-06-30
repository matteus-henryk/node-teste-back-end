import ErrorsApp from "../errors/ErrorsApp";
import { FakeUserRepository } from "../repositories/fakes/FakesUserRepository";
import { CreateUserService } from "./CreateUserService";


let createUserService: CreateUserService;
let fakeUserRepository: FakeUserRepository;

let user = {
  name: "Matteus Henryk",
  lastname: "Cabral Francischini",
  nickname: "matteusHenryk",
  address: "rua carajás n95, Londrina, Paraná",
  bio: "sou lgl",
}

let user2 = {
  name: "Matteus Henryk",
  lastname: "Cabral Francischini",
  nickname: "matteusHenryk",
  address: "rua carajás n95, Londrina, Paraná",
  bio: "sou lgl",
}


describe("CreateUserService", () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    createUserService = new CreateUserService(fakeUserRepository);
  });

  it("Should be able to create new user", async () => {
    const userCreated = await createUserService.execute(user);

    expect(userCreated).toHaveProperty("id");
  });

  it("Should be able to return error if nickname already exists", async () => {
    await createUserService.execute(user);

    await expect(createUserService.execute(user2)).rejects.toEqual(new ErrorsApp("Nickname in use!", 401));
  });
});
