// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
//
// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
//
// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
//
'use strict'


confirm(`Hi!:) I wanna ask you about your favorite movies`);
let numberOfFilms = 0;
while (true) {
    numberOfFilms = +prompt("How many films did you watch recently?", "Do not type too much:)");
    if (!isNaN(numberOfFilms)) {
        break;
    } else {
        alert(`Invalid input! Should be number`);
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    genres: [],
    privat: true,
    writeYourGenres: function () {
        for (let i = 0; i < Object.values(personalMovieDB.movies).length; i++) {
            let genreOfFilm = prompt(`What genre was film ${Object.keys(personalMovieDB.movies)[i]} with rate ${Object.values(personalMovieDB.movies)[i]}`, "");
            if (genreOfFilm == null || genreOfFilm === false) {
                alert(`Invalid input! It can't be empty!`);
                i--;
                continue;
            }
            personalMovieDB.genres[i] = genreOfFilm;

        }
    },
    toggleVisibleMyDB: function () {
        if (this.privat !== false) {
            this.privat = false;
            console.log(personalMovieDB)
        } else {
            console.log("Access modifier should be toggled because it prohibits print an object")
        }
    }
};

for (let i = 0; i < personalMovieDB.count; i++) {
    let nameOfTheMovie = prompt("What was the name of one of those films?", "");
    if (nameOfTheMovie.length >= 50 || nameOfTheMovie === "" || numberOfFilms == null) {
        alert(`Incorect input. Should be more than 0 and less than 50`);
        i--;
        continue;
    }
    let rateOfFilm = +prompt(`Rate please film ${nameOfTheMovie}.`, "");
    if (isNaN(rateOfFilm) || rateOfFilm == null) {
        alert(`Invalid input! Should be number`);
        i--;
        continue;
    }
    personalMovieDB.movies[nameOfTheMovie] = rateOfFilm;

}



personalMovieDB.writeYourGenres();

console.log(personalMovieDB.toggleVisibleMyDB(personalMovieDB));

