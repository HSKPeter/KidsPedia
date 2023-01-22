CREATE DATABASE kidspedia;

\c kidspedia

CREATE TABLE keywords (
    keyword VARCHAR(255),
    explanation TEXT,
    PRIMARY KEY (keyword)
);

INSERT INTO keywords (keyword, explanation)
VALUES ('theory of relativity', 'Theory of relativity is like a game of hide and seek. No matter where you are, things look different. Your friend might be hiding behind a tree, but from your point of view, they might look like they are in a different spot. The same is true with time and motion. Depending on how fast you are moving, time and motion will look different.');

INSERT INTO keywords (keyword, explanation)
VALUES ('inflation', 'Inflation is like a balloon. Prices go up and up, like when you blow air into a balloon and it gets bigger and bigger. When inflation happens, things like food and clothes become more expensive. That means it takes more money to buy the same things. Inflation happens when there is too much money in the economy, and it takes more money to buy things.');
