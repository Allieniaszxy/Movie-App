const movieApp = async () => {
  let url =
    "https://api.themoviedb.org/3/movie/popular?api_key=27455d1b89e2000d69f464a99e1d5a53";

  for (let i = 0; i <= 20; i++) {
    let movieData = await fetch(url);
    let movies = await movieData.json();
    console.log(movies.results);

    let movieDiv = document.createElement("div");
    let movieImg = document.createElement("img");
    let movieTitle = document.createElement("p");

    let parentDiv = document.getElementById("movie-case");

    movieImg.src = `https://image.tmdb.org/t/p/w500/${movies.results[i].poster_path}`;
    movieTitle.textContent = movies.results[i].title;

    movieDiv.appendChild(movieImg);
    movieDiv.appendChild(movieTitle);
    parentDiv.appendChild(movieDiv);
  }
};
movieApp();
