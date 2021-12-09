

//1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }
"use strict"

let amountOfWatchedMovies = +prompt(`Сколько фильмов вы уже посмотрели?`, ``);

const personalMovieDB = {
    count: amountOfWatchedMovies,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

let i = 0;
while (i < 2) {

    const nameOfWatchedMovie = prompt(`Один из последних просмотренных фильмов?`, ``);
    const rateOfWatchedMovie = prompt(`На сколько оцените его`, ``);

    personalMovieDB.movies[nameOfWatchedMovie] = rateOfWatchedMovie;
    // console.log(
    //     `movies: {
    //     '${movies.name}: ${movies.rate}
    // }`);
    i++;
};

console.log(personalMovieDB); //returns an object in console








