SELECT MAX(salary) AS 'maior sálario' FROM hr.employees;

SELECT MAX(salary) - MIN(salary) AS 'Diferença entre os máximos' FROM hr.employees;

SELECT JOB_ID, AVG(salary) AS average_salary FROM hr.employees
GROUP BY JOB_ID
ORDER BY average_salary DESC;

SELECT SUM(salary) AS 'Gasto total' FROM hr.employees;

SELECT MAX(salary) AS 'maior sálario', MIN(salary) AS 'menor sálario', SUM(salary) AS 'Soma dos sálarios', ROUND(AVG(salary), 2) AS 'Média salarial'
FROM hr.employees;

SELECT job_id, COUNT(*) AS 'total' FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

SELECT job_id, SUM(salary) AS 'gasto_total' FROM hr.employees
GROUP BY job_id;

SELECT job_id, SUM(salary) AS 'gasto_total'
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

SELECT job_id, ROUND(AVG(salary), 2) AS 'gasto_total' FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY gasto_total DESC;

SELECT DEPARTMENT_ID, ROUND(AVG(salary), 2) AS 'media_salarial', COUNT(*) AS 'numero_de_funcionarios' FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING numero_de_funcionarios > 10;

UPDATE hr.employees
SET phone_number = replace(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SELECT * FROM hr.employees
WHERE CHAR_LENGTH(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date) AS `year` FROM hr.employees;

SELECT employee_id, first_name, DAY(hire_date) AS `day` FROM hr.employees;

SELECT employee_id, first_name, MONTH(hire_date) AS `month` FROM hr.employees;

SELECT UCASE(CONCAT(first_name, ' ', last_name)) FROM hr.employees;

SELECT last_name, hire_date FROM hr.employees
WHERE MONTH(hire_date) = 7 AND YEAR(hire_date) = 1987;

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS 'days_worked' FROM hr.employees;