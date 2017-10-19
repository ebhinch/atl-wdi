-- 1
-- ANSWER: Holy See (Vatican City State)
-- SELECT name, region, population FROM country WHERE region='Southern Europe' ORDER BY population;

-- 2
-- ANSWER: Italian
-- SELECT language FROM countrylanguage WHERE countrycode = 'VAT';

-- 3
-- ANSWER: San Marino 
-- SELECT * FROM countrylanguage WHERE language = 'Italian' ORDER BY percentage;

-- 4 
-- ANSWER: Serravalle 
-- SELECT * FROM country WHERE countrycode = 'SMR';

-- 5 (is it possible this and number 6 are in wrong order?)
-- ANSWER: Serra, Brazil
-- SELECT * FROM city WHERE name LIKE 'Serr%';

-- 6 (is it possible this and number 6 are in wrong order?)
--ANSWER: Brasilia
-- SELECT name FROM city WHERE id = 211;

-- carmen=# SELECT name FROM city WHERE id = 211;
--     name
-- ------------
--  Bras�lia
-- (1 row)


-- 7
-- ANSWER: Santa Monica
-- SELECT name FROM city WHERE population = 91084;
--       name
-- --------------
--  Santa Monica
-- (1 row)