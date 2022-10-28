CREATE DATABASE IF NOT EXISTS zoodb;

USE zoodb;

CREATE TABLE zoodb.species(
	`specie_id` INT AUTO_INCREMENT PRIMARY KEY,
    `specie_name` VARCHAR(50) NOT NULL
);

CREATE TABLE zoodb.animals(
	`animal_id` INT AUTO_INCREMENT PRIMARY KEY,
    `animal_name` VARCHAR(50) NOT NULL,
    `specie_id` INT NOT NULL,
    `age` INT NOT NULL,
    `location`VARCHAR(50) NOT NULL,
    FOREIGN KEY (specie_id) REFERENCES species(specie_id)
);

CREATE TABLE zoodb.caretaker(
	`caretaker_id` INT AUTO_INCREMENT PRIMARY KEY,
    `caretaker_name` VARCHAR(20) NOT NULL,
    `manager_id` INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES managers(manager_id)
);

CREATE TABLE zoodb.managers(
	`manager_id` INT AUTO_INCREMENT PRIMARY KEY,
    `manager_name` VARCHAR(20) NOT NULL
);

CREATE TABLE zoodb.animals_caretaker(
	`animal_id` INT NOT NULL,
	`caretaker_id` INT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animals(animal_id),
    FOREIGN KEY (caretaker_id) REFERENCES caretaker(caretaker_id)
);