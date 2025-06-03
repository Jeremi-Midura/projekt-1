# projekt-1

# Poradnik: Tworzenie Stron Internetowych

## Spis treści
- [Wstęp](#wstęp)
- [Historia stron WWW](#historia-stron-www)
- [Podstawy HTML](#podstawy-html)
- [Podstawy CSS](#podstawy-css)
- [Responsywność stron](#responsywność-stron)
- [SEO – optymalizacja dla wyszukiwarek](#seo--optymalizacja-dla-wyszukiwarek)
- [Poradnik krok po kroku](#poradnik-krok-po-kroku)
- [Podsumowanie](#podsumowanie)

* * *

## Wstęp

Witaj w poradniku dotyczącym tworzenia nowoczesnych stron internetowych! Znajdziesz tu informacje o historii WWW, podstawach HTML i CSS, responsywności oraz SEO, a także praktyczne porady.

* * *

## Historia stron WWW

Pierwsza strona internetowa powstała w 1991 roku dzięki Timowi Berners-Lee. Od tego czasu strony przeszły ogromną ewolucję — od prostych dokumentów tekstowych do dynamicznych, responsywnych aplikacji.

* * *

## Podstawy HTML

HTML (HyperText Markup Language) to język do tworzenia struktury strony. Przykład:
 ```
html
<!DOCTYPE html>
<html>
  <head>
    <title>Moja Strona</title>
  </head>
  <body>
    <h1>Witaj na mojej stronie!</h1>
    <p>To jest przykładowy tekst.</p>
  </body>
</html> 
```


* * *


## Podstawy CSS

CSS (Cascading Style Sheets) odpowiada za wygląd strony. Przykład:
    ````
body {
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}
h1 {
  color: #3366cc;
}
````

* * *   


## Responsywność stron

Responsywność oznacza, że strona dobrze wygląda na komputerach, tabletach i smartfonach. Kluczowy jest meta tag viewport:

Meta Tag Viewport

Meta tag viewport jest elementem HTML, który informuje przeglądarkę o tym, jak powinna wyświetlać stronę na różnych urządzeniach. Dzięki temu, strona może być wyświetlana w sposób odpowiedni dla danego urządzenia, takiego jak smartfon, tablet czy komputer.

Przykład meta tagu viewport:

```<meta name="viewport" content="width=device-width, initial-scale=1.0">```


W tym przykładzie, width=device-width oznacza, że strona powinna mieć szerokość równą szerokości urządzenia, na którym jest wyświetlana. initial-scale=1.0 oznacza, że strona powinna być wyświetlana w skali 1:1, co oznacza, że nie powinna być powiększona ani pomniejszona.

Media Queries

Media queries są elementem CSS, który pozwala na definiowanie stylów dla różnych warunków, takich jak rozmiar ekranu, orientacja urządzenia czy typ urządzenia. Dzięki temu, strona może być wyświetlana w sposób odpowiedni dla danego urządzenia.

Przykład media query:
``    
@media (max-width: 600px) {
  body {
    font-size: 16px;
  }
}
``

W tym przykładzie, @media (max-width: 600px) oznacza, że styl powinien być zastosowany, gdy szerokość ekranu jest mniejsza lub równa 600 pikselom. Wewnątrz tego bloku, body { font-size: 16px; } oznacza, że rozmiar czcionki powinien być ustawiony na 16 pikseli.

* * *

SEO – optymalizacja dla wyszukiwarek

SEO (Search Engine Optimization) to techniki, które pomagają stronie znaleźć się wyżej w wynikach wyszukiwania. Ważne elementy:

* Meta tagi (description, keywords, robots)
* Przyjazne adresy URL
* Szybkość ładowania strony
* Semantyczny HTML

Przykład meta tagów:
`` 
<meta name="description" content="Poradnik o tworzeniu stron internetowych, HTML, CSS, SEO i responsywności.">
<meta name="keywords" content="HTML, CSS, responsywność, SEO, historia, poradnik, tworzenie stron">
<meta name="robots" content="index, follow">
``

Semantyczny HTML

Semantyczny HTML to sposób pisania kodu HTML, który opiera się na znaczeniu elementów, a nie tylko na ich wyglądzie. Oznacza to, że elementy HTML powinny być używane w sposób, który odzwierciedla ich znaczenie w dokumencie, a nie tylko w celu uzyskania określonego wyglądu.

Przykład semantycznego HTML:
  ```  
<header>
  <nav>
    <ul>
      <li><a href="#">Strona główna</a></li>
      <li><a href="#">O nas</a></li>
      <li><a href="#">Kontakt</a></li>
    </ul>
  </nav>
</header>
<main>
  <section>
    <h1>Witaj na naszej stronie!</h1>
    <p>To jest przykładowy tekst.</p>
  </section>
</main>
<footer>
  <p>&copy; 2023 Nasza strona</p>
</footer>
```

W tym przykładzie, elementy HTML są używane w sposób semantyczny:
```
* <header> oznacza nagłówek strony
* <nav> oznacza menu nawigacyjne
* <main>oznacza główną treść strony
* <section> oznacza sekcję treści
* <h1> oznacza nagłówek pierwszego poziomu
* <p> oznacza akapit
* <footer> oznacza stopkę strony
```
Dzięki temu, strona jest łatwiejsza do zrozumienia dla przeglądarek i silników wyszukiwania, a także dla osób z niepełnosprawnościami, które używają technologii asystujących.

* * *

## Poradnik krok po kroku
1.Zaplanuj strukturę strony – określ, jakie sekcje powinna mieć strona.
2.Zacznij od HTML – stwórz strukturę dokumentu.
3.Dodaj style CSS – zadbaj o wygląd i czytelność.
4.Wprowadź responsywność – użyj media queries i meta viewport.
5.Dodaj elementy SEO – meta tagi, poprawne nagłówki, opisy obrazków.
6.Testuj stronę – sprawdź na różnych urządzeniach i przeglądarkach.
7.Opublikuj stronę – np. przez GitHub Pages lub inny hosting.

## Podsumowanie

Tworzenie stron WWW to fascynujące zajęcie, które łączy wiedzę techniczną i kreatywność. Ten poradnik to solidna baza do nauki i dalszego rozwoju!


