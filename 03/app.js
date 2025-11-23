// woim zadaniem jest napisanie implementacji funkcji `randomNumber` z pliku `app.js` zgodnie z duchem TDD, czyli red-green-refactor.

// Funkcja ta nie zawiera żadnych instrukcji. Dopisz je. Sama nazwa funkcji powinna Ci zasugerować jej zadanie oraz to, jakie parametry powinna ona przyjmować i jakie dane zwracać.

// Zastanów się, jakie testy należy po kolei zdefiniować. Następnie:
// - napisz pierwszy test, potem zrób `commit` i dopiero wykonaj implementację,
// - kiedy implementacja zadziała, zrób kolejny `commit`,
// - wykonaj refaktor kodu, ponownie zrób `commit` itd.

// W ten sposób będzie widać, jakie kolejne kroki wykonywałeś.

// Postaraj się napisać conajmniej 3 testy dla tej funkcji. Możesz skorzystać z poniższej listy podpowiedzi:
// - jeśli losujesz liczbę z przedzialu od 1 do 1, to funkcja zwróci 1,
// - jeśli podasz jako argument "nie liczbę", to zostanie rzucony błąd,
// - jeśli przedział będzie się wykluczał (podasz, że chcesz liczbę od 4 do 3, a nie od 3 do 4), to również zostanie rzucony błąd,
// - jeśli przekazane argumenty będą poprawne, to sprawdzisz, czy wylosowana liczba mieści się w zadanym przedziale.

// **Uwaga!** To zadanie specjalnie łamie regułę [Repeatable z zestawu reguł FIRST](https://devszczepaniak.pl/testy-jednostkowe-first/), abyś lepiej zrozumiał, dlaczego jest ona tak istotna. Rozwiązaniem tego problemu (czyli losowania za każdym razem innej wartości) byłoby użycie tzw. [mocków](https://devenv.pl/jest-sposoby-mockowania/). Jednak ten temat zostanie omówiony w następnych materiałach i teraz nie będziemy się nim przejmować.


// Jeśli spojrzysz do pliku `package.json`, to zobaczysz, że uruchomienie testów dla tego zadania będzie możliwe przy pomocy komendy: `npm run test-03`.

// PS. Pamiętaj, aby zainstalować niezbędne paczki poprzez `npm i`.

export default function randomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Arguments must be a number')
    }
    return 1;
}