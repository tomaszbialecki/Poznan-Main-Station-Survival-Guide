# Wersja 05 — wnętrze dworca i godziny

Geometria +1/+2 z planu PKP podlinkowanego na oficjalnej stronie dworca: https://www.pkp.pl/images/Dworce/Mapy/09.22/Pozna_A3_10.pdf . Stary rzut z rozklad-pkp.pl nie jest źródłem bieżącej warstwy. Nowy plan zawiera obecną numerację peronów i wykaz lokali; data ostatniej aktualizacji nie jest podana. Wyodrębniono tylko geometrię, bez kopiowania numeracji peronów do grafu tras. Dopasowanie wnętrza do obrysu OSM pozostaje przybliżone.

Nazwy i powiązanie lokali z rzutem według planu PKP. Godziny mają oddzielne źródła w dist/store-info.json. Godziny galerii nie są traktowane jako godziny każdego lokalu; niedziele bez danych nie oznaczają zamknięcia. Harmonogramy są statyczne, sprawdzone 02.11.2026. Nie uwzględniają wszystkich wyjątków świątecznych. X-kom: rozbieżność identyfikatora w profilu i planie jest opisana w karcie.

Plan źródłowy i pochodne rzuty PKP pozostają odrębnymi materiałami od OSM i nie są objęte ODbL.

# Aktualny stan: wersja 04

Korekta północnego dopasowania: `matrix(.4532 .0992 -.08654 .4282 174.32 213.85)`. Obejmuje także bryłę dworca autobusowego. Wspólne poziomy i stała kamera zastępują zakładki z wersji 03. Terminal i numeracja 1–19 bazują na oficjalnej mapie ZKZL, z pozycjami stanowisk odtworzonymi schematycznie. Otwarta przestrzeń na +1 oparta jest na korekcie użytkownika; gastronomia na +2 — na rzucie Avenidy. Rysunki parkingów to obrysy stref, nie pełne rzuty ani potwierdzenie przypisania liter do kondygnacji. Szczegóły, plany i aktualne braki: PLAN-RESEARCH.md.

Poniżej zachowano historię pochodzenia danych; opisy wersji 02/03 nie zastępują korekty wersji 04.

# Geometria mapy, wersja 02

## Aktualizacja: Avenida, wersja 03 — 02.11.2026

Dodano oficjalne rzuty wszystkich trzech poziomów udostępnianych w interaktywnym planie centrum: parter (level1013), +1 (level1016), +2 (level1019).

- https://www.avenidapoznan.com/fileadmin/user_upload/CENTERS/AVP/center/mapplic/AVP_EG.svg
- https://www.avenidapoznan.com/fileadmin/user_upload/CENTERS/AVP/center/mapplic/AVP_1OG.svg
- https://www.avenidapoznan.com/fileadmin/user_upload/CENTERS/AVP/center/mapplic/AVP_2OG.svg

Źródło: https://www.avenidapoznan.com/o-centrum/plan-centrum/ . Autorstwo i prawa planów: Avenida / ECE. Pliki SVG pozostają odrębnym źródłem od danych OSM i nie są objęte ODbL. Lokalne kopie w `dist/avenida/` są pozbawione ewentualnych aktywnych odwołań; kolory zmieniane są przy renderowaniu. Zachowano kontury lokali, przejścia i ikony usług, wind oraz schodów. Nazwy czynnych lokali odczytano z listy renderowanej przez oficjalny plan; brak nazwy nie jest interpretowany jako potwierdzenie pustostanu.

Wspólne dopasowanie trzech pięter: SVG source (1000 × 600), macierz afiniczna `matrix(.4057 .08985 -.08654 .4282 177.64 214.50)`. Dopasowanie obrysu centrum do OSM jest przybliżone, nie pomierzone geodezyjnie. Numeracja pięter Avenidy jest oddzielna od numeracji poziomów dworca; aplikacja nie zakłada równoważności ich wysokości. Nie dodano niezweryfikowanych połączeń do grafu tras. Widoczne rzuty nie stanowią jeszcze nawigacji wewnątrz galerii.

Poniższa sekcja opisuje stan warstwy dworca w wersji 02.

Pobrano 1 listopada 2026 r. z OpenStreetMap API: bbox 16.908,52.397,16.919,52.408. Dane © OpenStreetMap contributors, ODbL: https://www.openstreetmap.org/copyright . `dist/station-data.js` zawiera wyodrębnioną geometrię z identyfikatorami obiektów; stanowi pochodną bazy OSM dostępną na tej samej licencji. Data pobrania nie jest datą pomiaru w terenie.

11 obrysów peronów, 7 obrysów budynków, 11 odcinków tuneli, 25 odcinków schodów między poziomami −1/0 i 0/+1 oraz kontekst torów i Mostu Dworcowego. Numery peronów z nazw `peron N`; pole `ref` zawiera numery torów i nie jest numerem peronu.

Wszystkie obrysy są rysowane w jednym lokalnym układzie metrycznym, z zachowaniem proporcji: 111320 m/stopień szerokości i 67920 m/stopień długości w okolicy dworca. Północ skierowana w prawo, wschód w dół. Skala graficzna 100 m jest przeliczana razem z powiększeniem mapy.

Porównanie wizualne:

- Widok satelitarny Google Maps: https://www.google.com/maps/@52.402,16.9115,930m/data=!3m1!1e3 . Zdjęcia nie są kopiowane do aplikacji; data ich wykonania nie została potwierdzona.
- Obecny układ peronów i budynków (pierwsza strona, nie planowany układ z drugiej): https://idp.org.pl/wp-content/uploads/2023/11/Uklad-peronow-Poznan-Glowny-obecny-i-planowany.pdf
- Schody i poziomy na schemacie PLK: https://www.plk-sa.pl/files/public/user_upload/Poznan_Glowny_-_informacja_dla_pasazerow/POZNAN_GL_ZMIANA_NR_PERONOW_4.09.2022.pdf

Schody odwzorowują polilinie OSM, w tym trzywierzchołkowe biegi z obu stron tunelu przy peronach zachodnich oraz osobne biegi przy peronach wschodnich. Połączenia poziomów rysowane w jednej projekcji pozostają w tym samym miejscu po zmianie warstwy.

Ograniczenia: graf nawigacyjny nadal demonstracyjny. Dojście z hali i połączenia podłużne do peronów 4, 6, 7 i 9 wymagają dopracowania. Obrys Avenidy nie jest planem jej wnętrz. Nie zweryfikowano otwarcia każdego przejścia, wind ani czasowych zamknięć. Widok satelitarny nie potwierdza infrastruktury podziemnej. Geometria OSM nie jest pomiarem geodezyjnym.
