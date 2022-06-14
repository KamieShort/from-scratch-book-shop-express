-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

Drop table if exists books;
Drop table if exists authors;

CREATE table books (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR NOT NULL,
    released INT NOT NULL,
    author VARCHAR NOT NULL
);

INSERT INTO books (title, released, author) VALUES
('Hiking the Pacific Crest Trail', '2016', 'Eli Boschetto'),
('The Joyful Vegan', 2019, 'Collen Patrick-Goudreau'),
('The Bullet Journal Method', '2018', 'Ryder Carrol'),
('Like a Mother', 2020, 'Angela Garbes');

