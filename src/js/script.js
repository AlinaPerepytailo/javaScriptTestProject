'user strict';
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Скільки фільмів Ви уже подивидися?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Скільки фільмів Ви уже подивидися?','');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i<2; i++){
    const a = prompt ('Один із останніх переглянутих фільмів?',''),
            b = prompt ('На скільки балів Ви його оціните?','');
            personalMovieDB.movies [a] = b;

    if(a != '' && b != '' & a != null && b!= null && a.length<50){
        console.log('well done');
    } else{
        console.log('error');
        i--;
    }       
}
}
rememberMyFilms();

function detectPersolanLevel(){
    if (personalMovieDB.count<10){
        alert('Ви переглянули мало фільмів');
    }else if (personalMovieDB.count>=10 && personalMovieDB.count <30){
        alert('Ви - класичний глядач');
    }else if (personalMovieDB.count>=30){
        alert('Ви - справжній кіноман');
    }else{
        alert('Сталася помилка');
    }
}
detectPersolanLevel();

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres (){
    for (let i = 1; i <=3; i++){
        const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
        }
}
writeYourGenres();