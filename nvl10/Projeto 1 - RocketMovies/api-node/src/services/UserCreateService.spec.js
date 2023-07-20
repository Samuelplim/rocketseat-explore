const UserCreateService = require("./UserCreateService");
const UserPepositoryInMemory = require("../repositories/UserPepositoryInMemory");
const AppError = require("../utils/AppError");

describe("UserCreateService", () => {
  let userPepositoryInMemory = null;
  let userCreateService = null;

  beforeEach((done) => {
    this.userPepositoryInMemory = new UserPepositoryInMemory();
    this.userCreateService = new UserCreateService(userPepositoryInMemory);
  });

  it("user should be create", async () => {
    const user = {
      name: "User teste",
      email: "user@teste.com",
      password: "12345678",
    };

    const userId = await userCreateService.execute(user);

    expect(userId).toHaveProperty("id");
  });

  it("user not should be created with exists email", async () => {
    const user2 = {
      name: "User teste",
      email: "user@teste.com",
      password: "12345678",
    };
    const user3 = {
      name: "teste",
      email: "user@teste.com",
      password: "12345787",
    };

    const userId2 = await userCreateService.execute(user2);

    await expect(userCreateService.execute(user3)).rejects.toEqual(
      new AppError("Este email está a ser utilizado")
    );
  });
});
