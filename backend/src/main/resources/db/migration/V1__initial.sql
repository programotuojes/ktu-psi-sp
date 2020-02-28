CREATE TABLE category
(
    id   SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE item
(
    id          BIGSERIAL PRIMARY KEY,
    title       TEXT    NOT NULL,
    description TEXT,
    price       INTEGER NOT NULL,
    category_id INTEGER REFERENCES category (id) ON DELETE SET NULL
);

CREATE TABLE item_details
(
    item_id  BIGINT REFERENCES item (id) ON DELETE CASCADE,
    size     TEXT NOT NULL,
    quantity INTEGER,
    PRIMARY KEY (item_id, size)
);

CREATE TABLE picture
(
    item_id BIGINT REFERENCES item (id) ON DELETE CASCADE,
    url     TEXT NOT NULL,
    PRIMARY KEY (item_id, url)
);
