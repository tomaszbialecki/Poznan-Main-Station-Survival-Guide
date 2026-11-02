# Poznań Main Station Survival Guide

Interaktywna mapa Poznania Głównego inspirowana mapami z gier. Projektujemy dla osoby, która pierwszy raz jest na dworcu, ma kilka minut do odjazdu i nie zna jego układu ani języka polskiego.

[Prywatny podgląd prototypu](https://poznan-main-station-survival-guide.sillyelk40.chatgpt.site)

## Obecny stan

- Mapa SVG z geometrią 11 peronów i obrysami budynków z OpenStreetMap.
- Warstwy tunelu (−1), peronów (0) i hali (+1), we wspólnym układzie współrzędnych.
- Schody z biegami po obu stronach tunelu.
- Oficjalne rzuty Avenidy: parter, +1 i +2, z nazwami lokali, wyszukiwarką i podświetleniem wyboru.
- Jeden przełącznik wspólnych poziomów −1, 0, +1 i +2; stała kamera i wspólne współrzędne.
- Północna część: terminal autobusowy na 0, otwarta przestrzeń na +1 i gastronomia na +2.
- Schemat numeracji 19 stanowisk autobusowych na podstawie mapy ZKZL oraz oznaczone obrysy parkingów A–B i C–E.
- Przesuwanie, powiększanie, skala i wybór peronu.
- Demonstracyjne wyznaczanie tras między poziomami.
- Odczyt GPS z deklarowaną dokładnością pomiaru.
- Rzuty hali +1 i antresoli +2 według planu podlinkowanego przez PKP, z interaktywnymi lokalami.
- Karty lokali: piętro, tygodniowe godziny tam, gdzie potwierdzone, link źródłowy i data sprawdzenia.
- Potwierdzone harmonogramy: Biedronka na dworcu, Costa PKP, Costa Avenida (pon.–sob.) i x-kom (pon.–sob.). Pozostałe wpisy nie otrzymują domyślnie godzin całej galerii.
- Przełącznik języka głównego interfejsu PL/EN; część opisów technicznych pozostaje po polsku.

**To prototyp, a nie gotowa nawigacja pasażerska.** Graf tras wymaga weryfikacji w terenie, trasy przez wnętrze Avenidy nie są jeszcze wdrożone, GPS nie jest jeszcze pokazywany na mapie i nie wykrywa poziomu budynku.

## Uruchomienie lokalne

Wystarczy Python 3 i przeglądarka. Brak etapu budowania i zależności npm.

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory dist
```

Otwórz `http://127.0.0.1:8765`. Na telefonie geolokalizacja wymaga HTTPS. Podgląd lokalny na komputerze może korzystać z wyjątku przeglądarki dla localhost. Współrzędne są przetwarzane w przeglądarce; aplikacja nie ma serwera przechowującego pomiary. Czcionki są pobierane z Google Fonts.

## Pliki

| Plik | Zawartość |
| --- | --- |
| `dist/index.html` | Interfejs i informacje o źródłach |
| `dist/style.css` | Wygląd i układ responsywny |
| `dist/app.js` | Renderer SVG, graf demonstracyjny, interakcje i GPS |
| `dist/places.js` | Rzut dworca, wybór lokalu i karty godzin |
| `dist/store-info.json` | Metadane lokali, rozkłady tygodnia i źródła |
| `dist/station/` | Plan PKP i wyodrębnione rzuty SVG +1/+2 |
| `scripts/extract_station_plan.py` | Opcjonalna regeneracja SVG (PyMuPDF) |
| `dist/avenida.js` | Warstwy centrum, wyszukiwanie i wybór lokali |
| `dist/avenida/` | Trzy oficjalne plany SVG i nazwy lokali |
| `dist/station-data.js` | Wyodrębniona geometria OSM z identyfikatorami obiektów |
| `PLAN-RESEARCH.md` | Oficjalne plany kompleksu, korekta dopasowania i brakujące rzuty |
| `MAP-SOURCES.md` | Pochodzenie geometrii, projekcja i ograniczenia |
| `PROJECT.md` | Założenia produktu i najnowsze decyzje |
| `.openai/hosting.json` | Konfiguracja istniejącego hostingu Sites |

## Weryfikacja

```sh
node --check dist/app.js
node --check dist/station-data.js
node --check dist/avenida.js
node --check dist/places.js
```

Wersję 02 sprawdzono również w przeglądarce oraz pod kątem połączenia 33 par start–peron w demonstracyjnym grafie. To nie potwierdza poprawności tras w rzeczywistym dworcu.

## Kolejne kroki

1. Zweryfikować przejścia i połączenia z halą oraz peronami 4, 6, 7 i 9.
2. Pozyskać pełne rzuty parkingów i zweryfikować dopasowanie wnętrza hali oraz połączenia pięter.
3. Uzupełnić pozostałe godziny lokali ze źródeł operatorów.
4. Powiązać lokalizację telefonu z mapą i przetestować dokładność na dworcu.
5. Dopracować nawigację podczas ruchu i ręczną korektę pozycji.

Zdjęcia punktów orientacyjnych są opcjonalnym dodatkiem na później. Docelowo aplikacja ma być bezpłatna, bez reklam i konta pasażera.

## Dane i prawa

Geometria: © OpenStreetMap contributors, [ODbL](https://www.openstreetmap.org/copyright). Baza pochodna w `dist/station-data.js` podlega ODbL. Szczegóły w `MAP-SOURCES.md`. Plany Avenidy: Avenida / ECE, pobrane z oficjalnego planu 02.11.2026; nie są objęte ODbL ani licencją kodu. Plan hali i antresoli: PKP, osobne prawa do materiału źródłowego. Źródło PDF jest zachowane do odtworzenia geometrii. Nie dołączono zdjęć satelitarnych. Licencja kodu aplikacji pozostaje do decyzji właściciela; nie udzielono ogólnej licencji open source na kod.
