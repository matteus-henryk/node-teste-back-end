import { FakeUserRepository } from "../repositories/fakes/FakesUserRepository";
import { CreateUserService } from "../services/CreateUserService";
import { GetUsersNameLastNameService } from "../services/GetUsersNameLastnameService";


let createUserService: CreateUserService;
let fakeUserRepository: FakeUserRepository;
let getUsersNameLastnameService: GetUsersNameLastNameService;

let user = {
  name: "lucas",
  lastname: "Cabral Francischini",
  nickname: "lucasHenryck",
  address: "rua carajás n95, Londrina, Paraná",
  bio: "sou lgl",
}

let user2 = {
  name: "Matteus",
  lastname: "Cabral Francischini",
  nickname: "matteusHenryk",
  address: "rua carajás n95, Londrina, Paraná",
  bio: "sou lgl",
}

let user3 = {
  name: "Felipe",
  lastname: "Cabral Francischini",
  nickname: "felipeHenryk",
  address: "rua carajás n95, Londrina, Paraná",
  bio: "sou lgl",
}

let user4 = {
  name: "Matteus",
  lastname: "dias",
  nickname: "matteusdias",
  address: "rua carajás n95, Londrina, Paraná",
  bio: "sou lgl",
}

describe("GetUsersNameLastnameService", () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    createUserService = new CreateUserService(fakeUserRepository);

    getUsersNameLastnameService = new GetUsersNameLastNameService(fakeUserRepository);
  });

  it("Should be able to get user(s) by name", async () => {
    const userCreated2 = await createUserService.execute(user2);
    const userCreated4 = await createUserService.execute(user4);

    const users = await getUsersNameLastnameService.execute({name: "Matteus"});

    expect(users).toContain(userCreated2);
    expect(users).toContain(userCreated4);
  });

  it("Should be able to get user(s) by lastname", async () => {
    const userCreated = await createUserService.execute(user);
    const userCreated2 = await createUserService.execute(user2);
    const userCreated3 = await createUserService.execute(user3);

    const users = await getUsersNameLastnameService.execute({
      lastname: "Cabral Francischini"
    });

    expect(users).toContain(userCreated);
    expect(users).toContain(userCreated2);
    expect(users).toContain(userCreated3);
  });

  it("Should be able to get user(s) by name and lastname", async () => {
    const userCreated = await createUserService.execute(user);
    const userCreated2 = await createUserService.execute(user2);
    const userCreated3 = await createUserService.execute(user3);
    const userCreated4 = await createUserService.execute(user4);

    const users = await getUsersNameLastnameService.execute({name: "Matteus",lastname: "Cabral Francischini"});

    expect(users).toContain(userCreated);
    expect(users).toContain(userCreated2);
    expect(users).toContain(userCreated3);
    expect(users).toContain(userCreated4);
  });
});
