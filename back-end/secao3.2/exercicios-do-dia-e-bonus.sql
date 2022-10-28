SELECT * FROM pixar.movies;
SELECT * FROM pixar.box_office;

SELECT m.id, m.title, bo.domestic_sales, bo.international_sales
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS bo ON m.id = bo.movie_id;

SELECT m.id, m.title, (bo.domestic_sales + bo.international_sales) AS 'Vendas'
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS bo ON m.id = bo.movie_id
WHERE bo.international_sales > bo.domestic_sales;

SELECT m.id, m.title, bo.rating
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS bo ON m.id = bo.movie_id
ORDER BY rating DESC;

SELECT t.id, t.name AS nome_do_cinema, t.location, m.title AS nome_do_filme, m.director, m.year, m.length_minutes
FROM pixar.theater as t
LEFT JOIN pixar.movies as m ON t.id = m.theater_id
ORDER BY nome_do_cinema;

SELECT t.id, t.name AS nome_do_cinema, t.location, m.title AS nome_do_filme, m.director, m.year, m.length_minutes
FROM pixar.theater as t
RIGHT JOIN pixar.movies as m ON t.id = m.theater_id
ORDER BY nome_do_cinema;

SELECT *
FROM pixar.movies as m
INNER JOIN pixar.box_office AS bo ON m.id = bo.movie_id
WHERE theater_id IS NOT NULL
AND rating > 8;