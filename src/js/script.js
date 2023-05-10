const numnerOfFilms = +prompt ('Скільки фільмів Ви уже подивилися?', '');

const personalMovieDB = {
    count: numnerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один з останніх фільмів, які Ви дивилися?', ''),
      b = prompt ('Як ви його оціните?', ''),
      c = prompt ('Один з останніх фільмів, які Ви дивилися?', ''),
      d = prompt ('Як ви його оціните?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

