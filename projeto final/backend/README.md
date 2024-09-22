<h1 align="center">Como execultar o back-end?</h1>

### configurar o banco de dados

O projeto utiliza o ORM knex neste projeto estou utilizando o banco mysql pela biblioteca `mysql2`.
Você pode configurar da sua forma nos arquivos: knexfile.js e o arquivo que fica na pasta database.

### Para o fluxo padrão

1. Execulte o arquivo `docker-compose.yml` com o docker.
2. Execulte o comando `npm install` para instalar as dependencias.
3. Execulte o comando `npm run migrate`.
   Caso ocorra erro pode ser que tenha se conectado ao banco de dados.
4. Execulte o comando `npm run dev`
