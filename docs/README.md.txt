# README #

------------EhOTEL HMS-------------------

**OPIS APLIKACIJE**

HMS (Hotel Management System) spletna aplikacija, ki zaposlenim in vodstvu hotela omogoèa celovito upravljanje podjetja. Osnovna ideja aplikacije je celovitost funkcij, potrebnih za upravljanje hotelskega podjetja, ki so zbrane na enem mestu. Vemo, da se danes mnogo organizacij sooèa s problemom prevelike razdrobljenosti orodij/ aplikacij. HMS pa uporabniku omogoèa hitro in uèinkovito opravljanje vseh potrebnih nalog, ki jih od zaposlenih za tekoèe in nemoteno obratovanje zahteva podjetje. Zaposlenim se sedaj ni veè potrebno beliti glave z zaganjanjem veèih aplikacij in prenosi podatkov med njimi, temveè se lahko osredotoèijo na svoje primarne naloge, ki jih posledièno lahko opravijo bolj uèinkovito in hitreje.
Kot smo že omenili, aplikacija na enem mestu združuje vse potrebne funkcije za obratovanje hotelskega podjetja, mednje pa spadajo:

* dodajanje/brisanje rezervacij
* spremljanje aktivnosti kapacitet (št. zasedenih enot, št. gostov, ...)
* spremljanje in vodenje poslovanja
* spremljanje, beleženje in dodajanje opravil (èišèenje, vzdrževanje, ...)
* spremljanje e-pošte
* izdajanje raèunov za opravljene storitve

Vsakemu uporabniku je omogoèena prijava v sistem s pomoèjo uporabniškega imena in gesla.

**CILJNA PUBLIKA IN NAPRAVE**

Kot nam že samo ime aplikacije pove, jo bodo v prvi vrsti uporabljali zaposleni v hotelskem podjetju. Ker pa je struktura aplikacije zgrajena po principu manjših blokov kot osnovnih gradnikov na grafiènem uporabniškem vmesniku, se dajo le-ti po potrebi hitro odstranjevati in implementirati novi bloki z drugaènimi funkcionalnostmi. 
Primarno je aplikacija namenjena za uporabo na namiznih raèunalnikih, ker pa je le-ta prilagodljiva razliènim velikostim zaslona, pa je uporaba omogoèena tudi na mobilnih terminalih, kot so telefoni in tablice.

**APLIKACIJA V RAZLIÈNIH BRSKALNIKIH**

V prvi fazi sem aplikacijo preizkusil v treh brskalnikih (Chrome, Mozilla Firefox, Explorer). Edina težava na katero sem naletel pri testiranju je vnosno polje za izbiro datuma. Funkcionalnost izbire datuma iz koledarja, ki se pokaže ob kliku na vnosno polje namreè deluje le v brskalniku Chrome, medtem ko v ostalih dveh brskalnikih ne deluje, na kar me opozori tudi validator. Èe si pobliže ogledamo še prilajajanje aplikacije velikosti zaslona, posebnih težav pri spreminjanju velikosti okna nisem opazil. Najpogosteje uporabljeni enoti gradnikov vmesnika sta vw in vh, kar pomeni, da se gradniki sproti prilagajajo velikosti okna in tako celotna vsebina strani vselej ostaja vidna na zaslonu.

**POSEBNI GRADNIKI STRANI**

Kot smo že omenili, so osnovni gradniki strani manjši bloki, ki razvijalcu omogoèajo hitro izgradnjo osnovne strukture strani. Tako sem te bloke uporabil na veèini podzavihkov strani (npr. blok "Opravila" iz zaèetnega zavihka je uporabljen tudi na zavihkih "Kapacitete", "Opravila" in "Poslovanje").
Najveè truda sem v prvi fazi zagotovo namenil funkcionalnosti risanja grafa na prvem / zaèetnem zavihku. Le-to sem implementiral preko okolja JavaScript in gradnika canvas po naslednjem principu: Najprej sem izrisal osnovno ogrodje grafa, kamor spadajo horizontalne èrte, ki predstavljajo osnovno skalo grafa. Nato sem s pomoèjo funkcijo, ki sprejme 5 parametrov, ki predstavljajo toèke na diagramu, narisal še èrtni diagram. Le-ta se izriše s pomoèjo prilagajanja vrednostim toèk in višini platna (canvas). Glede na najveèjo vrednost toèke na grafu doloèimo osnovno višinsko enoto na grafu, glede na to vrednost pa nato razporedimo toèke po višini platna. Le-te na koncu še povežemo med seboj in dobimo èrtni diagram.
Precej dolgo sem se ukvarjal tudi z izvleènim menijem na levi strani vmesnika. Prikaz le-tega sem implementiral s pomoèjo potrditvenega polja (checkbox), ki je na vmeniku sicer skrit, nadomešèa pa ga ikona za menu (hamburger menu). Glede na logièno vrednost potrditvenega polja (izbrano/ni izbrano) se doloèi tudi prikaz izvleènega menija. V primeru, da potrditveno polje ni izbrano, se izvleèni meni zapelje za vrednost lastne širine v desno ter tako izgine iz zaslona. Ko pa s pritiskom na ikono za menu spremenimo vrednost potrditvenega polja, se izvleèni meni zopet prikaže na zaslonu, ostala vsebina na zaslonu pa se prilagodi novim dimenzijam, odvisnim od izvleènega menija.

**KOMENTARJI O IZDELKU IN POTREBNE IZBOLJŠAVE**

Po konèani prvi fazi projekta mi je ostalo še nekaj malenkosti, ki jih bom poskušal popraviti v sklopu druge faze. Opazil sem, da se v èasu poteka animacije skrivanja izvleènega menija na desni (nekateri elementi nerodno prerazporedijo po zaslonu in s tem pokvarijo vrstni red postavitve), ki pa se po koncu animacije zopet postavijo na svoje mesto. Èe mi bo èas dopušèal, bom to napako skušal odpraviti v drugi fazi projekta. Poleg tega bom v drugi fazi implementiral tudi prikazovanje realnih vremenskih podatkov in dodelal interaktivnost ostalih elementov uporabniškega vmesnika. Zaenkrat je edina opazna akcija na vmesniku implementirana le pri zavihku "Blagajna", kjer se ob pritisku na gumb "Dodaj" ustrezno dopolnjujejo vrednosti na raèunu, ostali gumbi in vnosna polja na vmesniku pa zaenkrat služijo kot podlaga za funkcionalnosti, za katere aplikacija potrebuje podatkovno bazo. Poskušal bom implementirati tudi funkcionalnost izpisa podatkov iz raèuna v loèeno datoteko (npr. PDF ali loèen HTML).