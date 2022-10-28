SELECT * FROM hr.employees;

SELECT
	CONCAT(Employee.first_name, ' ', Employee.last_name) AS 'nome_da_pessoa_colaboradora',
    CONCAT(Manager.first_name, ' ', Manager.last_name) AS 'nome_do_gerente'
FROM employees AS Employee
INNER JOIN employees AS Manager ON Employee.manager_id = Manager.employee_id
WHERE Employee.department_id <> Manager.department_id;

SELECT
    CONCAT(Manager.first_name, ' ', Manager.last_name) AS 'nome_do_gerente',
    COUNT(*) AS 'numero_de_pessoas_colaboradoras'
FROM employees AS Manager
INNER JOIN employees AS Employee ON Manager.employee_id = Employee.manager_id
GROUP BY Employee.manager_id;