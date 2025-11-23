// Tym razem implementacja już istnieje. W pliku `DB.js` znajdziesz klasę, która imituje bazę danych. Przykład jej użycia mógłby wyglądać tak:
// ```
// const db = new DB();
// db.insert({a: 1, b: 2})
//     .then(() => db.insert({a: 3, b: 4}))
//     .then(() => db.remove(2))
//     .then(() => db.update({id: 1}))
//     .then(() => db.getRows())
//     .then(rows => console.log(rows)); // [{id: 1}]
// ```

// Poszczególne metody wykonują asynchronicznie operacje: zapisu, odczytu, modyfikacji i usuwania danych z bazy. Przed stworzeniem testów postaraj się zrozumieć kod, który został tutaj zamieszczony.

// Napisz testy dla tej klasy – po kilka dla każdej z metod. Pamiętaj, że ten kod jest asynchroniczny. W testach sprawdzaj:
// - poprawność działania implementacji,
// - przypadek, w którym obietnica jest odrzucana.

// Zwróć uwagę, że metoda `.async()` tylko udaje kod asynchroniczny. W rzeczywistym rozwiązaniu czegoś takiego byśmy nie implementowali, dlatego tego elementu nie testujemy.

// Testy uruchomisz przez `npm run test-05`.

// Jeśli znajdziesz błędy w implementacji, postaraj się je naprawić. 

import DB from './DB';
describe('DB', () => {
    let db;
    beforeEach(() => {
        db = new DB();
    });

    // INSERT
    it('insert() should add new row and generate id starting from 1', async () => {
        const row = await db.insert(({ a: 1, b: 2 }))

        expect(row).toHaveProperty('id', 1);

        const rows = await db.getRows();
        expect(rows).toHaveLength(1);
        expect(rows[0]).toEqual(row);
    })
})