DROP DATABASE IF EXISTS movielist;

CREATE DATABASE movielist;

DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hasSeen INT,
  movie VARCHAR(30)
);

-- SELECT * FROM movies;
-- INSERT INTO movies (hasSeen, movie) VALUES (0, 'Star Wars: Episode I');
-- UPDATE movies SET hasSeen = ? WHERE id = ?;
-- UPDATE movies SET hasSeen = ? WHERE id = ?;
-- DELETE movies WHERE id = ?;