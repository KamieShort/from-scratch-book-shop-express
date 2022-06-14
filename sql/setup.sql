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
    dob VARCHAR NOT NULL,
    pob VARCHAR NOT NULL
);




INSERT INTO books (title, released) VALUES
('Hiking the Pacific Crest Trail', 2016),
('The Joyful Vegan', 2019),
('The Bullet Journal Method', 2018),
('Like a Mother', 2020);

INSERT INTO authors (name, dob, pob) VALUES
('Eli Boschetto', '4-SEP-1989', 'Portland, Oregon'),
('Collen Patrick-Goudreau', '6-JUN-1977', 'San Francisco, California'),
('Ryder Carrol', '13-MAR-1978', 'Portland, Maine'),
('Angela Garbes', '24-JUL-1983', 'Seattle, Washington');

