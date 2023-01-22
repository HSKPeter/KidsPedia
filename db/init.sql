CREATE DATABASE kidspedia;

\c kidspedia

CREATE TABLE keywords (
    keyword VARCHAR(255),
    explanation TEXT,
    PRIMARY KEY (keyword)
);

INSERT INTO keywords (keyword, explanation)
VALUES ('gravity', 'Gravity is like a big invisible hug. Everything in the world is held down to the ground by gravity, even us! It''s like a magical force that pulls us towards the Earth. It''s like a big magnet that makes us stay on the ground, so we don''t float away into outer space. It''s always there, even if we don''t notice it. That''s why when we jump, we always come back down. We can''t escape gravity, but it''s a good thing because it helps keep us safe.');

INSERT INTO keywords (keyword, explanation)
VALUES ('inflation', 'Inflation is like a balloon. Prices go up and up, like when you blow air into a balloon and it gets bigger and bigger. When inflation happens, things like food and clothes become more expensive. That means it takes more money to buy the same things. Inflation happens when there is too much money in the economy, and it takes more money to buy things.');
