USE PiecesProviders;

SELECT Piece, Price FROM PiecesProviders.Provides
WHERE Provider = 'RBT';

SELECT * FROM PiecesProviders.Provides
ORDER BY PRICE DESC
LIMIT 5;

SELECT Provider, Price FROM PiecesProviders.Provides
ORDER BY PRICE DESC
LIMIT 4 OFFSET 2;

SELECT * FROM PiecesProviders.Provides
WHERE Provider = 'HAL'
ORDER BY PRICE DESC;

SELECT COUNT(*) FROM PiecesProviders.Provides
WHERE Piece = 1;