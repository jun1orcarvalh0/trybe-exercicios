SELECT * FROM sakila.customer;

SELECT * FROM sakila.film;

SELECT * FROM sakila.address;

SELECT active, COUNT(*) AS quantidade FROM sakila.customer
GROUP BY active;

SELECT store_id, IF (active = 1, 'ativo', 'inativo') AS 'Ativos ou inativos', COUNT(*) AS 'quantidade de clientes por status'
FROM sakila.customer
GROUP BY store_id, active;

SELECT AVG(rental_duration) AS avg_rental_duration, rating AS 'classificação indicativa'
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

SELECT district, COUNT(*) AS 'quantidade de endereços registrados nele' FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;

SELECT rating, AVG(length) AS length_average
FROM sakila.film
GROUP BY rating
HAVING length_average BETWEEN  115.0 AND 121.50
ORDER BY length_average DESC;

SELECT rating, SUM(replacement_cost) AS total_replacement_cost
FROM sakila.film
GROUP by rating
HAVING total_replacement_cost > 3950.50
ORDER BY total_replacement_cost;