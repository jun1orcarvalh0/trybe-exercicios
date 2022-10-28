USE Scientists;

SELECT * FROM Scientists
WHERE Name LIKE '%e%';

SELECT Name FROM Scientists.Projects
WHERE Code LIKE 'a%'
ORDER BY Name;

SELECT Name, Code FROM Scientists.Projects
WHERE Code LIKE '%3%'
ORDER BY Name;

SELECT Scientist FROM Scientists.AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');

SELECT * FROM Scientists.Projects
WHERE Hours > 500
ORDER BY Hours;

SELECT * FROM Scientists.Projects
WHERE Hours BETWEEN 250 AND 800
ORDER BY Hours;

SELECT Code, Name FROM Scientists.Projects
WHERE Name NOT LIKE '%A%';

SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%H%';