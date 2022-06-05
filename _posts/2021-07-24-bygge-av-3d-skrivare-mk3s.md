---
layout: blog_post
image: /assets/blog_media/E45D46B6-D489-44A1-8A62-976DC4CD875A_1_105_c.jpeg
title: Bygge av 3D-skrivare (MK3S)
description: Efter Mycket huvudvärk av de föregående skrivarna bestämde jag mig
  för att investera i en pålitlig skrivare, en Prusa i3 MK3S.
---
Skrivaren kom som ett kit och tog lite mindre än en vecka att bygga ihop (med kalibrering och programvara). Efter det var det i stort sett bara att mata in ett filament och trycka på skriv ut så skötte den allt utan problem från start till slut.

![](/assets/blog_media/img_1793_original.jpg)

# **Några Problem**

## **Trasig temperatursensor**

Efter några veckors utskrifter så gick det plötsligt inte att värma upp bädden på skrivaren. Efter lite felsökning så visade det sig att temperatursensorn hade lagt av. Eftersom skrivaren inte kunde läsa av bäddens temperatur så tillät den inte att värmas upp (en säkerhetsgrej helt enkelt).

Vanligaste lösningen är att man plockar isär hela bottenplattan av bädden och sedan tar av isoleringstejpen etc.. för att till sist kunna komma åt och byta ut själva sensorn. Det hade jag ingen lust med och försökte istället se om sladden var knäckt någonstans på vägen mellan bädden och kretskortet. Som tur var så lyckades jag och pappa att hitta punkten på sladden där den hade knäckts och kunde då kapa av den och löda på en ny bit sladd. Problemet löst! 

## **Filamentsensor reagerar inte**

Skrivaren använder en filamentsensor för att automatiskt mata in nytt filament vid byte av spole. Den används även för att detektera om filamenten tar slut under utskrift och kan därmed pausa utskriften och be användaren att sätta i nytt filament. Filamentsensorn är både optisk och mekaniskt men är tyvärr väldigt känslig.

Plastlocket som sitter ovanpå sensorn satt för hårt emot sensorn vilket resulterade i att den trodde att filamentet var isatt fastän det inte var det. Det gick att lösa med att lägga ett par brickor mellan locket och sensorn samt att lossa på skruven lite. Inte den mest optimala lösningen dock eftersom sensorn kan även reagera på om man råkar peta till locket. Förhoppningsvis kommer detta åtgärdats till framtida skrivare.

## **Utbyte av temperatursensor (05-06-2022)**

Efter många fungerande utskrifter gav lagningen på sladden upp och samma felmeddelande som innan dök upp (ingen signal från temperatursensorn). Jag beställde en ny sensor via Prusas onlinebutik och några dagar senare kom den genom brevlådan. Reparationen gick mycket smidigare än förväntat och tog ca 1 timme att plocka isär och bygga ihop. Efter en enkel omkalibrering av XYZ så var skrivaren igång igen.