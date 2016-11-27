# README #

------------EhOTEL HMS-------------------

**OPIS APLIKACIJE**

HMS (Hotel Management System) spletna aplikacija, ki zaposlenim in vodstvu hotela omogo�a celovito upravljanje podjetja. Osnovna ideja aplikacije je celovitost funkcij, potrebnih za upravljanje hotelskega podjetja, ki so zbrane na enem mestu. Vemo, da se danes mnogo organizacij soo�a s problemom prevelike razdrobljenosti orodij/ aplikacij. HMS pa uporabniku omogo�a hitro in u�inkovito opravljanje vseh potrebnih nalog, ki jih od zaposlenih za teko�e in nemoteno obratovanje zahteva podjetje. Zaposlenim se sedaj ni ve� potrebno beliti glave z zaganjanjem ve�ih aplikacij in prenosi podatkov med njimi, temve� se lahko osredoto�ijo na svoje primarne naloge, ki jih posledi�no lahko opravijo bolj u�inkovito in hitreje.
Kot smo �e omenili, aplikacija na enem mestu zdru�uje vse potrebne funkcije za obratovanje hotelskega podjetja, mednje pa spadajo:

* dodajanje/brisanje rezervacij
* spremljanje aktivnosti kapacitet (�t. zasedenih enot, �t. gostov, ...)
* spremljanje in vodenje poslovanja
* spremljanje, bele�enje in dodajanje opravil (�i��enje, vzdr�evanje, ...)
* spremljanje e-po�te
* izdajanje ra�unov za opravljene storitve

Vsakemu uporabniku je omogo�ena prijava v sistem s pomo�jo uporabni�kega imena in gesla.

**CILJNA PUBLIKA IN NAPRAVE**

Kot nam �e samo ime aplikacije pove, jo bodo v prvi vrsti uporabljali zaposleni v hotelskem podjetju. Ker pa je struktura aplikacije zgrajena po principu manj�ih blokov kot osnovnih gradnikov na grafi�nem uporabni�kem vmesniku, se dajo le-ti po potrebi hitro odstranjevati in implementirati novi bloki z druga�nimi funkcionalnostmi. 
Primarno je aplikacija namenjena za uporabo na namiznih ra�unalnikih, ker pa je le-ta prilagodljiva razli�nim velikostim zaslona, pa je uporaba omogo�ena tudi na mobilnih terminalih, kot so telefoni in tablice.

**APLIKACIJA V RAZLI�NIH BRSKALNIKIH**

V prvi fazi sem aplikacijo preizkusil v treh brskalnikih (Chrome, Mozilla Firefox, Explorer). Edina te�ava na katero sem naletel pri testiranju je vnosno polje za izbiro datuma. Funkcionalnost izbire datuma iz koledarja, ki se poka�e ob kliku na vnosno polje namre� deluje le v brskalniku Chrome, medtem ko v ostalih dveh brskalnikih ne deluje, na kar me opozori tudi validator. �e si pobli�e ogledamo �e prilajajanje aplikacije velikosti zaslona, posebnih te�av pri spreminjanju velikosti okna nisem opazil. Najpogosteje uporabljeni enoti gradnikov vmesnika sta vw in vh, kar pomeni, da se gradniki sproti prilagajajo velikosti okna in tako celotna vsebina strani vselej ostaja vidna na zaslonu.

**POSEBNI GRADNIKI STRANI**

Kot smo �e omenili, so osnovni gradniki strani manj�i bloki, ki razvijalcu omogo�ajo hitro izgradnjo osnovne strukture strani. Tako sem te bloke uporabil na ve�ini podzavihkov strani (npr. blok "Opravila" iz za�etnega zavihka je uporabljen tudi na zavihkih "Kapacitete", "Opravila" in "Poslovanje").
Najve� truda sem v prvi fazi zagotovo namenil funkcionalnosti risanja grafa na prvem / za�etnem zavihku. Le-to sem implementiral preko okolja JavaScript in gradnika canvas po naslednjem principu: Najprej sem izrisal osnovno ogrodje grafa, kamor spadajo horizontalne �rte, ki predstavljajo osnovno skalo grafa. Nato sem s pomo�jo funkcijo, ki sprejme 5 parametrov, ki predstavljajo to�ke na diagramu, narisal �e �rtni diagram. Le-ta se izri�e s pomo�jo prilagajanja vrednostim to�k in vi�ini platna (canvas). Glede na najve�jo vrednost to�ke na grafu dolo�imo osnovno vi�insko enoto na grafu, glede na to vrednost pa nato razporedimo to�ke po vi�ini platna. Le-te na koncu �e pove�emo med seboj in dobimo �rtni diagram.
Precej dolgo sem se ukvarjal tudi z izvle�nim menijem na levi strani vmesnika. Prikaz le-tega sem implementiral s pomo�jo potrditvenega polja (checkbox), ki je na vmeniku sicer skrit, nadome��a pa ga ikona za menu (hamburger menu). Glede na logi�no vrednost potrditvenega polja (izbrano/ni izbrano) se dolo�i tudi prikaz izvle�nega menija. V primeru, da potrditveno polje ni izbrano, se izvle�ni meni zapelje za vrednost lastne �irine v desno ter tako izgine iz zaslona. Ko pa s pritiskom na ikono za menu spremenimo vrednost potrditvenega polja, se izvle�ni meni zopet prika�e na zaslonu, ostala vsebina na zaslonu pa se prilagodi novim dimenzijam, odvisnim od izvle�nega menija.

**KOMENTARJI O IZDELKU IN POTREBNE IZBOLJ�AVE**

Po kon�ani prvi fazi projekta mi je ostalo �e nekaj malenkosti, ki jih bom posku�al popraviti v sklopu druge faze. Opazil sem, da se v �asu poteka animacije skrivanja izvle�nega menija na desni (nekateri elementi nerodno prerazporedijo po zaslonu in s tem pokvarijo vrstni red postavitve), ki pa se po koncu animacije zopet postavijo na svoje mesto. �e mi bo �as dopu��al, bom to napako sku�al odpraviti v drugi fazi projekta. Poleg tega bom v drugi fazi implementiral tudi prikazovanje realnih vremenskih podatkov in dodelal interaktivnost ostalih elementov uporabni�kega vmesnika. Zaenkrat je edina opazna akcija na vmesniku implementirana le pri zavihku "Blagajna", kjer se ob pritisku na gumb "Dodaj" ustrezno dopolnjujejo vrednosti na ra�unu, ostali gumbi in vnosna polja na vmesniku pa zaenkrat slu�ijo kot podlaga za funkcionalnosti, za katere aplikacija potrebuje podatkovno bazo. Posku�al bom implementirati tudi funkcionalnost izpisa podatkov iz ra�una v lo�eno datoteko (npr. PDF ali lo�en HTML).