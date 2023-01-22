CREATE DATABASE kidspedia;

\c kidspedia

CREATE TABLE keywords (
    keyword VARCHAR(255),
    explanation TEXT,
    PRIMARY KEY (keyword)
);

INSERT INTO keywords (keyword, explanation)
VALUES ('gravity', 'Gravity is an invisible force that pulls objects towards each other. It is the force that makes things like apples fall from a tree. It also holds us to the Earth. Gravity is responsible for making the planets and stars stay in their orbits. You can feel gravity when you jump, because it pulls you back down to the ground. It also makes the oceans stay in their place. Gravity is a very strong force and it is always working, even when you can''t see it.');