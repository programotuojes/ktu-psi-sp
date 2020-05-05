INSERT INTO category (name)
VALUES ('Naujienos'),
       ('Marškinėliai'),
       ('Džemperiai'),
       ('Tamprės'),
       ('Kojinės'),
       ('Kepurės'),
       ('Vaikams');

INSERT INTO item (title, description, price, category_id)
VALUES ('Kieti marškinėliai', 'Puikūs marškinėliai norintiems parodyti savo kietumą.', 1999, 2),
       ('Liuks kelnės', 'Nu tiesiog šaunios kelnės. Tikrai jum patiks!', 2595, 4),
       ('Didelė kepurė', 'Ši didelė kepurė apsaugos nuo didelės Saulės.', 999, 6),
       ('Maža kepurė', 'Maža kepurė puikiai tiks jūsų vaikui. Ji taip pat derės prie jūsų didelės kepurės', 559, 7),
       ('Margos kojinės', 'Nuspalvinkite savo kojas kaip margučius per Velykas.', 1099, 5),
       ('Sportinės kojinės', 'Sportuoji? Treniruojiesi? Šios kojinės tau puikiai tiks! Nes jos patvarios ir pan.', 999, 5),
       ('Šiltas džemperis', 'Prisimeni tuos laikus, kai dar būdavo žiemos? Na, dabar jų nelabai būna, tačiau šis džemperis tau primins tuos laikus, kai žiemą dėvėdavai džemperį.', 3595, 3),
       ('Maža maikutė', 'Turi vaikų? Ar jie turi, ką apsirengti? Jei ne, tai pirk šitą maikę. Ji maža, tad tiks vaikui.', 1660, 7),
       ('Juodi marškinėliai', 'Išreikšk savo depresiją su juoda maikute. Taip pat tinka žmonėms, kuriems šiaip patinka juoda spalva. Mes nediskriminuojam.', 2050, 2),
       ('Cargo kelnės', 'Turi daug daiktų, bet neturi, kur jų dėti? Tai pirk šias kelnes! Jos turi daugiau kišenių nei tavo dabartinės kelnės.', 4059, 4),
       ('Sportinės tamprės', 'Sportuoji? Treniruojiesi? Šios tamprės tau puikiai tiks! Nes jos patvarios ir pan.', 2089, 4),
       ('Džinsinės tamprės', 'Jos labai panašios į džinsus, tad su jomis tiks eiti tiek į darbą, tiek į sporto salę!', 1088, 4),
       ('Kietas džemperis', 'Parodyk kitems, kad tu kietas su šitu kietu džemperiu.', 15099, 3),
       ('Vaikiški batukai', 'Tavo atžala pradėjo vaikščioti? Šie batukai pats tas!! Neleisk vaikui susilaužyti kojos pirštų atsitrenkus jam į stalo koją :( duok jam batus!!', 999, 7),
       ('Patriotas', 'Įrodyk sau ir kitems, kad tu esi Lietuvos patriotas su šiais nuostabiais Lietuviškais marškinėliais. Tave visi iškart gerbs.', 3995, 2),
       ('Trumpos kojinės', 'Turi trumpus batus? Turėk ir trumpas kojines!', 555, 5),
       ('Patriotas', 'Patriotinės maikės negana? Tai gal užteks patriotinio džemperio!! Įrodyk sau ir kitems, kad tu esi Lietuvos patriotas su šia nuostabia Lietuviška atributika. Tave visi iškart gerbs.', 9954, 3),
       ('Raudonos kojinės', 'Man patinka raudona. Tau irgi patinka? Tai davai pirk šitas kojines.', 1359, 5);

INSERT INTO picture (item_id, url)
VALUES (1, 'http://localhost:8080/images/tshirt.jpg'),
       (2, 'http://localhost:8080/images/pants.jpg'),
       (3, 'http://localhost:8080/images/big_hat.jpg'),
       (4, 'http://localhost:8080/images/small_hat.jpg'),
       (5, 'http://localhost:8080/images/socks.png'),
       (6, 'http://localhost:8080/images/sport_socks.jpg'),
       (7, 'http://localhost:8080/images/warm_jumper.jpg'),
       (8, 'http://localhost:8080/images/small_tshirt.jpg'),
       (9, 'http://localhost:8080/images/black_tshirt.jpg'),
       (10, 'http://localhost:8080/images/cargo_pants.jpg'),
       (11, 'http://localhost:8080/images/sport_leggings.jpg'),
       (12, 'http://localhost:8080/images/demin_leggings.jpg'),
       (13, 'http://localhost:8080/images/cool_jumper.jpg'),
       (14, 'http://localhost:8080/images/kids_shoes.jpg'),
       (15, 'http://localhost:8080/images/patriot_tshirt.jpg'),
       (16, 'http://localhost:8080/images/short_socks.jpg'),
       (17, 'http://localhost:8080/images/patriot_jumper.jpg'),
       (18, 'http://localhost:8080/images/red_socks.jpg');