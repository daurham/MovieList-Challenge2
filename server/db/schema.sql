DROP DATABASE IF EXISTS movielist;

CREATE DATABASE movielist;

USE movielist;

DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hasSeen INT,
  title VARCHAR(30)
);

-- SELECT * FROM movies;
-- INSERT INTO movies (hasSeen, title) VALUES (0, 'Star Wars: Episode I');
-- UPDATE movies SET hasSeen = ?, title = ? WHERE id = ?;
-- DELETE FROM movies WHERE id = ?;