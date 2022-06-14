-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

Drop table if exists books;
Drop table if exists authors;

CREATE table books (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR NOT NULL,
    released INT NOT NULL
);

CREATE table authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    dob INT NOT NULL,
    pob INT NOT NULL
);




INSERT INTO books (title, released) VALUES
('Hiking the Pacific Crest Trail', 2016),
('The Joyful Vegan', 2019),
('The Bullet Journal Method', 2018),
('Like a Mother', 2020);

