DROP DATABASE IF EXISTS cross_media_project;
CREATE DATABASE cross_media_project;
USE cross_media_project;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    logedIn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE result (
    userName VARCHAR(50),
    time_left INT,
    PRIMARY KEY(userName,time_left),
    FOREIGN KEY (userName) REFERENCES user(userName)
);