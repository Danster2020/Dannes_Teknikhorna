---
slug: ombyggnad-av-webbplats
title: Ombyggnad av webbplats
image: images/screenshot-at-jul-07-15-41-31.png
description: Ombyggnad av webbplats från dynamisk till statisk med Jekyll.
featured: "-1"
published: 2021-07-07
---
## Status

Finns live på <https://bleckert.se/>

## Bakgrund

Tidigare hämtades innehållet dynamiskt via PHP och en SQL-databas. Det resulterade i att man var tvungen att gå in i backend och uppdatera koden i och med att nya uppdateringar kom ut. Gjorde man inte detta så resulterade det i att webbplatsen slutade att fungera helt och hållet.

## Lösning

Lösningen på problemet var att bygga om allting till en statisk lösning. Statiskt innehåll innebär att allt innehåll är redan genererat och hämtas inte dynamiskt från en databas.
