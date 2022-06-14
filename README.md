# Template for Backend Express

Work vertically. Build the tests, route and model for one entity/resource at a time.
Start with the entities/resources that don’t depend on other resources: Book, and Author and then add the join table

## Scripts

| command                | description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm start`            | starts the app - should only be used in production as changes will not get reloaded |
| `npm run start:watch`  | runs the app using `nodemon` which watches for changes and reloads the app          |
| `npm test`             | runs the tests once                                                                 |
| `npm run test:watch`   | continually watches and runs the tests when files are updated                       |
| `npm run setup-db`     | sets up the database locally                                                        |
| `npm run setup-heroku` | sets up the database on heroku                                                      |

## Rubric

X GET /books route returns list of books 2
GET /books/:id route returns book detail with authors 2
POST /books/:id route adds a new book 2
Book routes properly delegate database work to the model 2
All book routes tested 1
X Book routes built vertically 1
GET /authors route returns list of authors 2
GET /authors/:id route returns author detail with books 2
POST /authors/:id route adds a new author 2
Authors routes properly delegate database work to the model 2
All authors routes tested 1
X Authors routes built vertically 1
