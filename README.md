# Book Shop

Work vertically. Build the tests, route and model for one entity/resource at a time.
Start with the entities/resources that don’t depend on other resources: Book, and Author and then add the join table

## Rubric

X GET /books route returns list of books 2
X GET /books/:id route returns book detail with authors 2
POST /books/:id route adds a new book 2
X Book routes properly delegate database work to the model 2
All book routes tested 1
X Book routes built vertically 1
X GET /authors route returns list of authors 2
X GET /authors/:id route returns author detail with books 2
POST /authors/:id route adds a new author 2
X Authors routes properly delegate database work to the model 2
All authors routes tested 1
X Authors routes built vertically 1
