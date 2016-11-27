# README #

------------EhOTEL HMS-------------------

**OPIS APLIKACIJE**

HMS (Hotel Management System) spletna aplikacija, ki zaposlenim in vodstvu hotela omogoča celovito upravljanje podjetja. Osnovna ideja aplikacije je celovitost funkcij, potrebnih za upravljanje hotelskega podjetja, ki so zbrane na enem mestu. Vemo, da se danes mnogo organizacij sooča s problemom prevelike razdrobljenosti orodij/ aplikacij. HMS pa uporabniku omogoča hitro in učinkovito opravljanje vseh potrebnih nalog, ki jih od zaposlenih za tekoče in nemoteno obratovanje zahteva podjetje. Zaposlenim se sedaj ni več potrebno beliti glave z zaganjanjem večih aplikacij in prenosi podatkov med njimi, temveč se lahko osredotočijo na svoje primarne naloge, ki jih posledično lahko opravijo bolj učinkovito in hitreje.
Kot smo že omenili, aplikacija na enem mestu združuje vse potrebne funkcije za obratovanje hotelskega podjetja, mednje pa spadajo:

* dodajanje/brisanje rezervacij
* spremljanje aktivnosti kapacitet (št. zasedenih enot, št. gostov, ...)
* spremljanje in vodenje poslovanja
* spremljanje, beleženje in dodajanje opravil (čiščenje, vzdrževanje, ...)
* spremljanje e-pošte
* izdajanje računov za opravljene storitve

Vsakemu uporabniku je omogočena prijava v sistem s pomočjo uporabniškega imena in gesla.

**CILJNA PUBLIKA IN NAPRAVE**

Kot nam že samo ime aplikacije pove, jo bodo v prvi vrsti uporabljali zaposleni v hotelskem podjetju. Ker pa je struktura aplikacije zgrajena po principu manjših blokov kot osnovnih gradnikov na grafičnem uporabniškem vmesniku, se dajo le-ti po potrebi hitro odstranjevati in implementirati novi bloki z drugačnimi funkcionalnostmi. 
Primarno je aplikacija namenjena za uporabo na namiznih računalnikih, ker pa je le-ta prilagodljiva različnim velikostim zaslona, pa je uporaba omogočena tudi na mobilnih terminalih, kot so telefoni in tablice.

**APLIKACIJA V RAZLIČNIH BRSKALNIKIH**

V prvi fazi sem aplikacijo preizkusil v treh brskalnikih (Chrome, Mozilla Firefox, Explorer). Edina težava na katero sem naletel pri testiranju je vnosno polje za izbiro datuma. Funkcionalnost izbire datuma iz koledarja, ki se pokaže ob kliku na vnosno polje namreč deluje le v brskalniku Chrome, medtem ko v ostalih dveh brskalnikih ne deluje. Če si pobliže ogledamo še prilajajanje aplikacije velikosti zaslona, posebnih težav pri spreminjanju velikosti okna nisem opazil. Najpogosteje uporabljeni enoti gradnikov vmesnika sta vw in vh, kar pomeni, da se gradniki sproti prilagajajo velikosti okna in tako celotna vsebina strani vselej ostaja vidna na zaslonu.

**POSEBNI GRADNIKI STRANI**

Kot smo že omenili, so osnovni gradniki strani manjši bloki, ki razvijalcu omogočajo hitro izgradnjo osnovne strukture strani. Tako sem te bloke uporabil na večini podzavihkov strani (npr. blok "Opravila" iz začetnega zavihka je uporabljen tudi na zavihkih "Kapacitete", "Opravila" in "Poslovanje").
Največ truda sem v prvi fazi zagotovo namenil funkcionalnosti risanja grafa na prvem / začetnem zavihku. Le-to sem implementiral preko okolja JavaScript in gradnika canvas po naslednjem principu: Najprej sem izrisal osnovno ogrodje grafa, kamor spadajo horizontalne črte, ki predstavljajo osnovno skalo grafa. Nato sem s pomočjo funkcijo, ki sprejme 5 parametrov, ki predstavljajo točke na diagramu, narisal še črtni diagram. Le-ta se izriše s pomočjo prilagajanja vrednostim točk in višini platna (canvas). Glede na največjo vrednost točke na grafu določimo osnovno višinsko enoto na grafu, glede na to vrednost pa nato razporedimo točke po višini platna. Le-te na koncu še povežemo med seboj in dobimo črtni diagram.
Precej dolgo sem se ukvarjal tudi z izvlečnim menijem na levi strani vmesnika. Prikaz le-tega sem implementiral s pomočjo potrditvenega polja (checkbox), ki je na vmeniku sicer skrit, nadomešča pa ga ikona za menu (hamburger menu). Glede na logično vrednost potrditvenega polja (izbrano/ni izbrano) se določi tudi prikaz izvlečnega menija. V primeru, da potrditveno polje ni izbrano, se izvlečni meni zapelje za vrednost lastne širine v desno ter tako izgine iz zaslona. Ko pa s pritiskom na ikono za menu spremenimo vrednost potrditvenega polja, se izvlečni meni zopet prikaže na zaslonu, ostala vsebina na zaslonu pa se prilagodi novim dimenzijam, odvisnim od izvlečnega menija.

**KOMENTARJI O IZDELKU IN POTREBNE IZBOLJŠAVE**

Po končani prvi fazi projekta mi je ostalo še nekaj malenkosti, ki jih bom poskušal popraviti v sklopu druge faze. Opazil sem, da se v času poteka animacije skrivanja izvlečnega menija na desni (nekateri elementi nerodno prerazporedijo po zaslonu in s tem pokvarijo vrstni red postavitve), ki pa se po koncu animacije zopet postavijo na svoje mesto. Če mi bo čas dopuščal, bom to napako skušal odpraviti v drugi fazi projekta. Poleg tega bom v drugi fazi implementiral tudi prikazovanje realnih vremenskih podatkov in dodelal interaktivnost ostalih elementov uporabniškega vmesnika. Zaenkrat je edina opazna akcija na vmesniku implementirana le pri zavihku "Blagajna", kjer se ob pritisku na gumb "Dodaj" ustrezno dopolnjujejo vrednosti na računu, ostali gumbi in vnosna polja na vmesniku pa zaenkrat služijo kot podlaga za funkcionalnosti, za katere aplikacija potrebuje podatkovno bazo. Poskušal bom implementirati tudi funkcionalnost izpisa podatkov iz računa v ločeno datoteko (npr. PDF ali ločen HTML).