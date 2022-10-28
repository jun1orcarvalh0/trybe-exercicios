USE sakila;

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`) VALUES
('Lucas','Luiz', 5, 'geraldoluiz@hotmail.com', 2, 1, 'geraldoluiz97', 'geraldo123'),
('Rafael','Carvalho', 6, 'mineirocarvalho@hotmail.com', 1, 1, 'mineirorj18', 'mineiro4321');

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
ORDER BY customer_id
LIMIT 5;


INSERT INTO sakila.category (name) VALUES
    ('Terrorzin'),
    ('Comedia de pit'),
    ('Aventuraaaaaaa');

INSERT INTO sakila.store (manager_staff_id, address_id) VALUES
(3, 3);