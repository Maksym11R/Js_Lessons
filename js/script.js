"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



for (let i = 0; i < 2; i++) {
	const a = prompt('Один з останніх переглянутих фільмів', ''),
		b = prompt('На скільки оціните його?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}

}

if (personalMovieDB.coun < 10) {
	console.log("Перегоянуто замало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Ви молодець");
} else if (personalMovieDB.count >= 30) {
	console.log("Ви кіноман");
} else {
	console.log("error"); 1100
}

console.log(personalMovieDB);

