USE sakila;

SELECT * FROM sakila.actor;

SELECT * FROM sakila.film_actor;

SELECT * FROM sakila.film;

SELECT * from payment;

SELECT * FROM staff;

SELECT * FROM address;

SELECT * FROM customer;

SELECT actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS `name`, film_actor.film_id
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film_actor
ON actor.actor_id = film_actor.actor_id;

SELECT staff.first_name, staff.last_name, address.address
FROM sakila.staff AS staff
INNER JOIN sakila.address AS address
ON staff.address_id = address.address_id;

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c 
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c 
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND first_name LIKE '%rene%';

SELECT
    c.first_name, COUNT(a.address) AS 'numero_de_enderecos'
FROM
    sakila.customer AS c
INNER JOIN
    sakila.address AS a ON c.address_id = a.address_id
WHERE
    c.active = 1
GROUP BY
	c.customer_id
ORDER BY c.first_name DESC;

SELECT s.first_name, s.last_name, ROUND(AVG(p.amount), 2) AS 'average_salary'
 FROM sakila.staff AS s
 INNER JOIN sakila.payment AS p ON s.staff_id = p.staff_id
 WHERE
	YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT * FROM sakila.actor;

SELECT * FROM sakila.film_actor;

SELECT * FROM sakila.film;

SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f ON f.film_id = fa.film_id;