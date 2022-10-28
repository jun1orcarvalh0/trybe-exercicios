USE sakila;

SELECT * from sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * from sakila.customer
WHERE active = 0 AND store_id = 2 AND first_name <> "KENNETH"
ORDER BY first_name;

SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE replacement_cost >= 18
AND rating = 'G'
OR rating = 'PG'
OR rating = 'PG-13'
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM sakila.customer
WHERE active = 1 AND store_id = 1;

SELECT * FROM sakila.customer
WHERE active = 0 AND store_id = 1;

SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title ASC
LIMIT 50;