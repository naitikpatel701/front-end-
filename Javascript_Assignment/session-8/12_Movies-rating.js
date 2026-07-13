let movies = [
    {
        title: "Inception",
        year: 2010,
        rating: {
            imdb: 8.8,
            rottenTomatoes: 87
        }
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: {
            imdb: 8.7,
            rottenTomatoes: 91
        }
    }
];

for (let movie of movies) {
    console.log(movie.title + " - IMDb: " + movie.rating.imdb);
}