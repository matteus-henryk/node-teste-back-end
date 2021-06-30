import { CreateUserService } from "../services/CreateUserService";
import { UpdateAddessLastnameService } from "../services/UpdateAddressLastnameService";
import { FakeUserRepository } from "../repositories/fakes/FakesUserRepository";


let fakeUserRepository: FakeUserRepository;
let createUserService: CreateUserService;
let updateAddressLastnameService: UpdateAddessLastnameService;

let user = {
  name: "lucas",
  lastname: "Cabral Francischini",
  nickname: "lucasHenryck",
  address: "rua carajás n95, Londrina, Paraná",
  bio: "sou lgl",
}

let userUpdate = {
  lastname: "teste lastname",
  address: "teste address"
}

describe("UpdateAddessLastnameService", () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    createUserService = new CreateUserService(fakeUserRepository);

    updateAddressLastnameService= new UpdateAddessLastnameService(fakeUserRepository);
  });

  it("Shoul be able to update user address and lastname", async () => {
    const userCreated = await createUserService.execute(user);

    const { id } = userCreated;

    const userUpdated = await updateAddressLastnameService.execute({
      id,
      ...userUpdate
    });

    expect(userUpdated?.address).toBe(userUpdate.address);
    expect(userUpdated?.lastname).toBe(userUpdate.lastname);
  });
});
