const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(request, response) {
    const { name, email, password, avatar } = request.body;
    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );
    if (!name) {
      throw new AppError("O nome é obrigadorio!");
    }
    if (checkUserExists) {
      throw new AppError("Email já está cadastrado!");
    }

    const hashedPassword = await hash(password, 8);
    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?,?,?)",
      [name, email, hashedPassword]
    );

    response.status(201).json();
  }
  async update(request, response) {
    const { name, email, password, new_password } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);
    if (!user) {
      throw new AppError("Usuário não encontrado");
    }
    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );
    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este email já está em uso.");
    }

    if (!password && new_password) {
      throw new AppError("Informe sua senha para atualizar a senha!");
    }
    const checkOldPassword = await compare(password, user.password);
    if (!checkOldPassword) {
      throw new AppError("Senha incorreta!");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.password = await hash(new_password, 8);

    await database.run(
      `
    UPDATE users SET
    name = ?,
    email = ?,
    password = ?,
    updated_at = DATETIME('now')
    WHERE id = ?`,
      [user.name, user.email, user.password, id]
    );
    return response.status(200).json(user);
  }
}
module.exports = UsersController;
