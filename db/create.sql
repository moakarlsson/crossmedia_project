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
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    time_left INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);
