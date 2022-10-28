CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE funcionario(
  `funcionario_id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(45) NOT NULL,
  `sobrenome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contato` VARCHAR(50) NOT NULL,
  `data_cadastro` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE setor(
  `setor_id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(45) NOT NULL
);

CREATE TABLE funcionario_setor(
  `funcionario_id` INT NOT NULL,
  `setor_id` INT NOT NULL,
  FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
  FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
);

INSERT INTO setor(nome)
VALUES ('Administração'), ('Vendas'), ('Operacional'), ('Estratégico'), ('Marketing');

INSERT INTO funcionario(nome, sobrenome, email, contato)
VALUES
('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445'),
('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996'),
('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669'),
('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556');

INSERT INTO funcionario_setor(funcionario_id, setor_id)
VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(3, 2),
(4, 5);