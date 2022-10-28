USE PecasFornecedores;

SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'GR%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

SELECT peca, preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%N%';

SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE preco BETWEEN 15 AND 40
ORDER BY preco;

SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE DATE(order_date) BETWEEN '2018/04/15' AND '2019/07/30';

