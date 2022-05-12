# Human Centered Design Larissa Klaassen

Human Centered Design is een  methode voor het ontwerpen van gebruiksvriendelijke interactieve toepassingen. In deze opdracht ontwerpen wij voor een specifieke gebruiker en niet voor een brede doelgroep. Daarom is het erg belangrijk om rekening te houden met de gebruiker, en in te spelen op behoeftes.

## Probleem

Larissa is blind en maakt vooral gebruik van haar screenreader. Haar sportschema is vooral vanuit een visueel oogpunt ontworpen, en dus niet ideaal in gebruik. Voor dit project ga ga ik een trainingschema voor Larissa ontwerpen die toegankelijk is, en goed te gebruiken doormiddel van een screenreader.
Ik ga me in dit project richten op een makkelijk en duidelijk te gebruiken schema. Geen ingewikkelde code en onnodige toevoegingen, waardoor het een zo overzichtelijk mogelijk schema wordt. 



# Testen + resultaten

## Test 1

De eerste test was vooral een kennismaking met Larissa. Ze heeft veel verteld over hoe ze leeft, en wat ze wel en niet belangrijk vindt. Hieruit zijn een aantal belangrijke punten gekomen om mee te nemen in de volgende versie van mijn ontwerp.

### Versie 1 ontwerp

<img width="1429" alt="Schermafbeelding 2022-05-10 om 18 22 09" src="https://user-images.githubusercontent.com/74242736/167676290-eef9bb4b-9646-43a4-ab35-9b7842227aa3.png">

Aandachtspunten test 1:
* Larissa kan nog wel een paar dingen zien. Als je een hoog contrast en grote vormen gebruikt kan ze het zien als er wat op het scherm verandert.
* Het helpt dus als er veel witruimte zit tussen elementen.
* Een donkere achtergrond met lichte letters geeft het meeste rust.
* Ze traint meestal 6 dagen in de week, en soms 2x per dag.
* Krachttraining, baantraining en zwemmen.
* Sans-serif font is het beste leesbaar.
* Een detailpagina met meer info over een bepaalde dag is fijn.
* Alleen duidelijke info over trainingen geven, en geen onnodig lang, gezellig verhaal er van maken.
* Oranje is haar lievelingskleur.
* Het is duidelijker om de week op te splitsen in een ul met 7 items. Als de screenreader voorleest dat er een lijst van 31 items is kan dat een beetje intimiderend overkomen. 

## Test 2 

### Versie 2 ontwerp

Aanpassingen na test 1:
* Meer witruimte tussen elementen.
* Focus state wanneer iets geselecteerd is door de screenreader.
* Donkere achtergrond met lichte tekst.
* JS toegevoegd wanneer er niks is ingevuld bij een dag, komt er automatisch "Geen training" te staan.
* Startscherm met mogelijkheid om een maand te selecteren.
* De maand opgesplitst in meerdere ul van 7 dagen, voor duidelijkheid met een screenreader.

<img width="1440" alt="Schermafbeelding 2022-05-10 om 19 10 53" src="https://user-images.githubusercontent.com/74242736/167684608-20c92604-441d-4301-8e56-4245850f190a.png">

<img width="1424" alt="Schermafbeelding 2022-05-10 om 19 16 33" src="https://user-images.githubusercontent.com/74242736/167685499-bf8f9a85-1533-4784-a9d2-5e22dd587e48.png">



Aandachtspunten test 2:
* Het is handig om de dag erbij te zetten, en niet alleen 7 mei bijvoorbeeld.
* Een zoekbalk om te zoeken naar een dag zou handig zijn, hier maakt Larissa bij veel websites ook gebruik van.
* Een terug button toevoegen bij elke pagina.
* De mogelijkheid om in te vullen wat je hebt gedaan op een dag. Dit is erg handig voor Larissa omdat ze zich vaak niet precies aan het trainingsschema houdt. Hiermee kan ze dan achteraf wel precies inzien wat ze heeft gedaan.
* Een focus state wanneer een item geselecteerd wordt is handig, dan kan ze wel ongeveer zien waar op het scherm iets gebeurd, of verspringt. 
* Pop-ups zijn een drama met een screenreader, dus probeer die zoveel mogelijk te vermijden.


## Test 3

### Versie 3 ontwerp

Aanpassingen na test 2:
* blabla

img

Aandachtspunten test 3:





# Design Principles

## 1. Study situation

Larissa is natuurlijk een speciale gebruiker. Vandaar dat het heel belangrijk is om precies te weten hoe ze nu navigeert en omgaat met websites. Hier hebben wij ons in de eerste interviews ook vooral op gefocust. Als je eenmaal een beter beeld hebt van hoe Larissa het aanpakt, is het ook makkelijker om een effectieve oplossing te bedenken. We hebben in de interviews gevraagd naar wat ze fijn vindt in gebruik, en wat juist minounten zijn van websites. 

## 2. Prioritise identity

Uit de interviews met Larissa is wel duidelijk geworden dat ze een sterke persoonlijkheid heeft. Ze heeft aangegeven eigenwijs te zijn en vaak op eigen houtje dingen te doen. (Zoals een gouden medaille winnnen op de paralympische spelen!) Ook is ze redelijk chaotischer en houdt over het algemeen niet heel erg van strakke schema's. Deze punten heb ik bij het ontwerpen in het achterhoofd gehouden, zodat het eindproduct goed bij Larissa past. Het is wel fijn om het gemaakte schema van de coach in te kunnen zien. Echter houdt Larissa zich regelmatig niet aan dat schema. Vandaar dat ik een optie heb gemaakt om op een training aanmerkingen te maken, en in te vullen wat je daadwerkelijk heb gedaan op de training. Dit zodat er achteraf wel duidelijk in te zien is wat er precies is gedaan in een maand. Hierdoor behoud je overzicht, maar is er wel flexibiliteit voor Larissa om niet alles precies volgens het boekje te doen. Dit leek me een goede tussenweg, waarin het niet te chaotisch is, maar wel flexibel. 

## 3. Ignore Conventions

* Standaard regels voor tekst en button grootte genegeerd. (Zodat Larissa nog een beetje kan zien als er iets op het scherm verspringt. Ze heeft aangegeven een visuele denker te zijn. Het helpt haar om een beeld van de webpagina te vormen als ze een selector ziet verspringen met een focus state.)
* Niet gefocust op vormgeving. (Alleen op een paar kleine punten van Larissa, zoals donkere achtergrond met lichte tekst.)
* Standaard HTML indeling zoals nav genegeerd, zodat de screenreader niet onnodig veel informatie opleest.
* Tab-index op elementen zoals H1 gezet, zodat de screenreader deze wel voorleest.

## 4. Add nonsense

Ik heb niet echte onzin toegevoegd in dit ontwerp, omdat Larissa vaak aangaf dat ze het graag zo kort en duidelijk mogelijk wilt hebben. Als ik extra onnodige content had toegevoegd was het minder overzichtelijk en chaotischer geworden. Dus ik heb juist rekening gehouden met de screenreader en zo min mogelijk onnodige content toegevoegd.




# Aangepast user scenario a.d.h.v. testen

Maak verschillende ontwerpen, versies en varianten van je opdracht. Experimenteer met verschillende vormen van interactie en vormgeving. Wat werkt goed? Wat werkt niet goed?
Beschrijf je test-persoon met een User Scenario.
Test je ideeen en ontwerp 3 keer met de test-persoon. Verbeter je ontwerp op basis van de feedback die je hebt gekregen uit de tests. Documenteer de testen goed.
Leg de exclusive design principles uit en beschrijf hoe je die hebt toegepast.
Zorg dat je voor de beoordeling in je Readme (of wiki) een conclusie schrijft waar je in gaat op de leerdoelen en criteria en hoe je dit hebt gehaald. Dit is je bewijsvoering voor het vak.
