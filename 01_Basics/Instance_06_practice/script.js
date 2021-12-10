
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

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

"use strict"
confirm(`Hi!:) I wanna ask you about your favorite movies`);
let numberOfFilms = 0;
while (true) {
    numberOfFilms = +prompt("How many films did you watch recently?", "Do not type too much:)");
    if(!isNaN(numberOfFilms)){
        break;
    }else{
        alert(`Invalid input! Should be number`);
    };
};


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    privat: false
};
//personalMovieDB.count = numberOfFilms;


for(let i = 0; i < personalMovieDB.count; i++){
    let nameOfTheMovie = prompt("What was the name of one of those films?", "");
    if (nameOfTheMovie.length >= 50 || nameOfTheMovie == "" || numberOfFilms == null){
        alert(`Incorect input. Should be more than 0 and less than 50`);
        i--;
        continue;
    }
    let rateOfFilm = +prompt(`Rate please film ${nameOfTheMovie}.`, "");
    if(isNaN(rateOfFilm) || rateOfFilm == null){
        alert(`Invalid input! Should be number`);
        i--;
        continue;
    }
    personalMovieDB.movies[nameOfTheMovie] = rateOfFilm;

};


console.log(personalMovieDB);


















