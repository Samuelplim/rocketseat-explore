class UserPepositoryInMemory {
  users = [];

  async create({ email, name, password }) {
    const userID = {
      id: Math.floor(Math.random() * 1000) + 1,
      email,
      name,
      password,
    };

    this.users.push(userID);
    return userID;
  }

  async findByEmail(email) {
    return this.users.find((user) => user.email === email);
  }
}
module.exports = UserPepositoryInMemory;
