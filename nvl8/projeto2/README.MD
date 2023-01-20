<h1 align="center">API movies</h1>

## Indexes

- [About](#about)
- [Built in](#built_in)
- [Routes](#routes)
- [Preview](#preview)
  <br>

## About <a name="about"></a>

Project API - movies Stage 8
Challenges
Link for challenge [notion.site](https://efficient-sloth-d85.notion.site/Aplica-o-em-Node-57bd49ae77b3422fad74f8dde0d06fef)

- Password encryption
- Email validation

## Built in <a name="built_in"></a>

- Node.js
- SQLITE
- HTTP protocol

## Dependencies

- Express 4.18
- express-async-errors 3.1
- sqlite 4.1
- sqlite3 5.1
- bcryptjs 2.4
- knex 2.4

# Dev dependencies

- nodemon 2.0

## Routes <a name="routes"></a>

### Users

- Create
  `http://localhost/user`
  request.body
  `{
	"name":"Jose",
	"email":"Jose@email.com",
	"password":"123"
}`
- Uptade
  `http://localhost/user/1`
  resquest.body
  `{
	"name":"Jose Calors",
	"email":"Jose@email.com",
	"password":"1234",
	"new_password":"123"
}`

### Movies

- Index
  `http://localhost/movies`
- Show
  `http://localhost/movies/1`
- Create
  `http://localhost/movies/1`
  request.body
  `{
	"title":"Avartar 2",
	"description":"Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos.",
	"rating":5,
	"movies_tags":["ação","aventura"]
}`
- Delete
  `http://localhost/movies/1`

### Tags

- Index
  `http://localhost/tags/4`

## Preview <a name="preview"></a>

<div align="center">
<img src="/nvl8/projeto2/preview/page1.png" alt="Preview"/>
</div>
