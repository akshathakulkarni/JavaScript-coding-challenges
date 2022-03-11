class movie {
  constructor(title, director, genre, release_year, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.release_year = release_year;
    this.rating = rating;
  }
  getOverview() {
    return (`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.release_year}. 
    It received a rating of ${this.rating}.`);
  }
};

const newMovie = new movie("abc", "mn", "xyz", 2022, 4);
console.log(newMovie.getOverview());