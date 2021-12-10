
// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

"use strict"
confirm(`Hi!:) I wanna ask you about your favorite movies`);
let numberOfFilms = 0;
while (true) {
    numberOfFilms = +prompt("How many films did you watch recently?", "Do not type too much:)");
    if (!isNaN(numberOfFilms)) {
        break;
    } else {
        alert(`Invalid input! Should be number`);
    };
};


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    genres: [],
    privat: true
};
//personalMovieDB.count = numberOfFilms;


for (let i = 0; i < personalMovieDB.count; i++) {
    let nameOfTheMovie = prompt("What was the name of one of those films?", "");
    if (nameOfTheMovie.length >= 50 || nameOfTheMovie == "" || numberOfFilms == null) {
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

};

function writeYourGenres() {
    for (let i = 0; i < Object.values(personalMovieDB.movies).length; i++) {
        let genreOfFilm = prompt(`What genre was film ${Object.keys(personalMovieDB.movies)[i]} with rate ${Object.values(personalMovieDB.movies)[i]}`, "");
        if (genreOfFilm == null) {
            alert(`Invalid input! It can't be empty!`);
            i--;
            continue;
        }
        personalMovieDB.genres[i] = genreOfFilm;

    };
}

writeYourGenres();

console.log(setAccessModifierToFalse(personalMovieDB));

function setAccessModifierToFalse(dataBase) {
    if (dataBase.privat != false) {
        dataBase.privat = false;
    }
    return dataBase;
}