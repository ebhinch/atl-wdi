-- average square footage of offices 
SELECT AVG (square_footage) FROM offices;

-- total number of apartments
SELECT COUNT (*) FROM apartments;

-- apartments with no tenant
SELECT * FROM apartments WHERE occupied_status = false;

-- names of all companies
SELECT company_name FROM offices;

-- number of cubicles and bathrooms in office 2
SELECT bathroom_count, cubicle_count FROM offices WHERE id=2;

-- storefronts with kitchens
SELECT * FROM storefronts WHERE kitchen = true;

-- storefront with highest square footage and outdoor seating
;

SELECT * FROM storefronts ORDER BY square_footage DESC LIMIT 1;


-- office wth lowest number of cubicles 
SELECT * FROM offices ORDER BY square_footage DESC LIMIT 1;

-- office with most cubices and bathrooms
SELECT * FROM offices ORDER BY cubicle_count + bathroom_count DESC LIMIT 1;

