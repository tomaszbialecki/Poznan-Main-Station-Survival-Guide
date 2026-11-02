# Poznań Main Station Survival Guide

Status: aktywny · Założenia produktu v0.2 · 2026-11-01

## Aktualizacja priorytetów

Najnowsza decyzja użytkownika: najpierw mapa w estetyce gry, trasy i lokalizacja telefonu. Zdjęcia punktów orientacyjnych są opcjonalnym przyszłym dodatkiem. Lokalizację rozwijamy równolegle z mapą, bez oczekiwania na skanowanie biletów. Poniższa pierwotna kolejność etapów pozostaje zapisem v0.2 i jest podporządkowana tej aktualizacji.

Pierwszy prototyp w `app/dist/` zawiera schemat trzech poziomów, graf demonstracyjny, wybór peronu, trasę, przesuwanie i powiększanie oraz odczyt geolokalizacji. Nie jest zweryfikowaną mapą nawigacyjną. Geometria, połączenia, kalibracja geograficzna, pełny plan Avenidy i lokalizacja piętra pozostają do opracowania.

Wersja mapy 02: po uwadze o schodach i proporcjach zastąpiono rysowane umownie prostokąty geometrią OSM wszystkich 11 peronów, budynków, schodów i tuneli w jednym lokalnym układzie metrycznym. Przeprowadzono porównanie z widokiem satelitarnym i planami. Północ skierowana w prawo. Schody mają biegi po obu stronach tunelu zgodnie z geometrią źródłową. Szczegóły i ograniczenia: `app/MAP-SOURCES.md`. Graf tras wciąż demonstracyjny; wnętrze Avenidy i automatyczna pozycja na piętrze nie są ukończone.

## Standard UX

Projektujemy dla osoby, która pierwszy raz jest na Poznaniu Głównym, ma 7 minut do odjazdu, nie zna polskiego ani numeracji peronów i jest zestresowana. Robi zdjęcie biletu i dociera do właściwych drzwi właściwego pociągu. Aplikacja pomaga ustalić lokalizację; nie zakłada, że pasażer ją zna.

## Docelowe doświadczenie

1. Otwarcie bez konta, instrukcji i konfiguracji.
2. Zdjęcie biletu: rozpoznanie pociągu, godziny, przewoźnika i stacji docelowej; potwierdzenie przy niepewności.
3. Ustalenie lokalizacji przez GPS, czujniki i mapę poziomów; przy niepewności wybór zdjęcia charakterystycznego miejsca.
4. Trasa na mapie: przejścia, skręty, właściwe schody i rozpoznanie peronu.
5. Weryfikacja numeru pociągu, przewoźnika, godziny i toru; ostrzeżenia o wykrytych zmianach.

## Zasady

- Jeden główny przycisk na ekranie, minimum decyzji.
- Duże strzałki, zdjęcia rzeczywistych miejsc, krótkie komunikaty.
- Polski i angielski.
- Cofnięcie i „Zgubiłem się”.
- Wyraźne rozróżnienie informacji pewnych i szacowanych.
- Trasy uwzględniające walizki i ograniczoną mobilność.
- Bez reklam, rejestracji i opłat.

## Architektura

Interfejs pasażera: bilet, lokalizacja, mapa, wskazówki. Mapa wielopoziomowa, silnik nawigacji, rozpoznawanie biletu, dane kolejowe oraz baza danych i graf połączeń: poziomy, tunele, perony, schody, windy.

## Kolejność wdrożenia

| Etap | Rezultat |
| --- | --- |
| 1 | Estetyczna, interaktywna mapa wszystkich poziomów dworca i Avenidy, inspirowana mapami z gier |
| 2 | Ręczny wybór lokalizacji i peronu, wyznaczanie tras |
| 3 | Wskazówki krok po kroku ze zdjęciami |
| 4 | Skanowanie biletów i rozpoznawanie pociągów |
| 5 | Aktualne rozkłady i zmiany peronów |
| 6 | Automatyczna lokalizacja i prowadzenie na żywo |

Kolejność wdrożenia nie ogranicza wizji. Najtrudniejszym zagadnieniem jest dokładna lokalizacja wewnątrz budynków i pod ziemią.

## Współpraca

Tomasz dostarcza znajomość dworca, szkice i materiały. Asystent przekłada je na strukturę danych, interfejs i kod. Rzeczywista geometria oraz połączenia wymagają materiałów i weryfikacji.

## Pierwszy krok

Opracować pierwszy szkic jako warstwę mapy, wskazać poziomy i połączenia między nimi, a następnie przygotować interaktywny prototyp przełączania poziomów.

## Wersja 03 — Avenida (02.11.2026)

Dodano oficjalne wektorowe rzuty parteru, +1 i +2 Avenidy, ze wspólnym przybliżonym dopasowaniem do obrysu centrum. Przełącznik obszaru Dworzec/Avenida, wyszukiwarka 164 nazw lokali i podświetlenie wyboru. Zachowano ikony wind i schodów z planu źródłowego. Numeracja pięter Avenidy pozostaje niezależna od poziomów dworca. Połączenia między budynkami i graf przejść w galerii wymagają weryfikacji; nie wdrożono tras wewnątrz Avenidy.
