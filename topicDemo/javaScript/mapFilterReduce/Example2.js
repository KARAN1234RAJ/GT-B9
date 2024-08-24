let data = [
  {
    id: 1,
    movie: "The Shawshank Redemption",
    rating: 9.2,
    image: "images/shawshank.jpg",
    imdb_url: "https://www.imdb.com/title/tt0111161/",
  },
  {
    id: 2,
    movie: "The Godfather",
    rating: 9.2,
    image: "images/godfather.jpg",
    imdb_url: "https://www.imdb.com/title/tt0068646/",
  },
  {
    id: 3,
    movie: "The Dark Knight",
    rating: 9,
    image: "images/dark_knight.jpg",
    imdb_url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    id: 4,
    movie: "Pulp Fiction",
    rating: 8.9,
    image: "images/pulp_fiction.jpg",
    imdb_url: "https://www.imdb.com/title/tt0110912/",
  },
  {
    id: 5,
    movie: "The Lord of the Rings: The Return of the King",
    rating: 9,
    image: "images/lotr_return_king.jpg",
    imdb_url: "https://www.imdb.com/title/tt0167260/",
  },
  {
    id: 6,
    movie: "The Good, the Bad and the Ugly",
    rating: 8.8,
    image: "images/good_bad_ugly.jpg",
    imdb_url: "https://www.imdb.com/title/tt0060196/",
  },
  {
    id: 7,
    movie: "Fight Club",
    rating: 8.8,
    image: "images/fight_club.jpg",
    imdb_url: "https://www.imdb.com/title/tt0137523/",
  },
  {
    id: 8,
    movie: "The Lord of the Rings: The Fellowship of the Ring",
    rating: 8.8,
    image: "images/lotr_fellowship.jpg",
    imdb_url: "https://www.imdb.com/title/tt0120737/",
  },
  {
    id: 9,
    movie: "Forrest Gump",
    rating: 8.8,
    image: "images/forrest_gump.jpg",
    imdb_url: "https://www.imdb.com/title/tt0109830/",
  },
  {
    id: 10,
    movie: "Inception",
    rating: 8.8,
    image: "images/inception.jpg",
    imdb_url: "https://www.imdb.com/title/tt1375666/",
  },
  {
    id: 11,
    movie: "Interstellar",
    rating: 8.6,
    image: "images/interstellar.jpg",
    imdb_url: "https://www.imdb.com/title/tt0816692/",
  },
];

let newData = data.filter((movie) => movie.rating >= 9);
console.log(newData);
// const movie = (movie)=>movie.rating


// let name = newData.map(movie);
let name = newData.map((movie)=>movie.rating);

console.log(name);

let num = [1,2,3,4,5,6,7,8,9,10]

let even = (num)=>num%2==0;
let multOf3 = (num)=>num%3==0&& num>=3

console.log(num.filter(multOf3));
//=========================
