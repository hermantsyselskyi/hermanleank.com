-- CREATE TABLE person (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR (80) UNIQUE NOT NULL,
--     password VARCHAR (1000) NOT NULL
-- );
-- CREATE TABLE "projects" (
--     "id" SERIAL PRIMARY KEY,
--     "year" INT NOT NULL,
--     "projectname" VARCHAR (60) NOT NULL,
--     "bg_url" VARCHAR (60) NOT NULL,
--     "description" VARCHAR (1000)
-- );

-- CREATE TABLE "pieces" (
--     "id" SERIAL PRIMARY KEY,
--     "project_id" INT REFERENCES "projects"
--     "name" VARCHAR (80) NOT NULL,
--     "image_url" VARCHAR (1000)  NOT NULL,
--     "description" VARCHAR (1000)
--     );

-- CREATE TABLE "store" (
--     "id" SERIAL PRIMARY KEY,
--     "pieces_id" INT REFERENCES "pieces"
--     "price" INT,
--     "forsale" boolean
--     );
