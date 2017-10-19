

CREATE TABLE apartments (
    id SERIAL PRIMARY KEY,
    apartment_number INTEGER,
    bedroom_count INTEGER,
    bathroom_count INTEGER,
    address TEXT NOT NULL,
    tenant VARCHAR,
    occupied_status BOOLEAN,
    square_footage INTEGER,
    price INTEGER
);

CREATE TABLE offices (
    id SERIAL PRIMARY KEY,
    office_number INTEGER,
    floor_count INTEGER,
    cubicle_count INTEGER,
    bathroom_count INTEGER,
    address TEXT NOT NULL,
    company_name VARCHAR,
    occupied_status BOOLEAN,
    price INTEGER
);

CREATE TABLE storefronts (
    id SERIAL PRIMARY KEY,
    address TEXT,
    occupied_status BOOLEAN,
     price INTEGER,
     kitchen BOOLEAN DEFAULT FALSE,
     square_footage INTEGER,
     owner VARCHAR,
     outdoor_seating BOOLEAN DEFAULT FALSE
);