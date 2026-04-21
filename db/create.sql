DROP DATABASE IF EXISTS cross_media_project;
CREATE DATABASE cross_media_project;
USE cross_media_project;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    logedIn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE result (
    userName VARCHAR(50) PRIMARY KEY,
    time_left INT,
    FOREIGN KEY (userName) REFERENCES user(userName)
);

ALTER TABLE user MODIFY COLUMN password VARCHAR(72) NOT NULL;
 