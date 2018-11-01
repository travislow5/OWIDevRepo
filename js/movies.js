$(function(){
    
 
    var randomMovieArray = ['American Pie', 'Lilo & Stitch', 'Lord of the Rings', 'Harry Potter', 'Moana', 'Lion King', 'Coraline', 'Beetlejuice', 'Jurassic Park', 'Beauty and the Beast', 'All Good Things', 'Deadpool', 'Pretty Woman', 'Dirty Dancing', 'Firewall','John Wick: Chapter 2', 'The Conjuring 2', 'The Godfather', 'Jaws', 'Pulp Fiction', 'Gladiator', 'Braveheart', 'Baby Driver', 'Blade Runner 2049'];

function apiCall(){
    
    
    for(i = 0; i < 24; i++){
        
        var randomMovie = randomMovieArray[i];
        console.log(randomMovie);
        
        
        $.getJSON('http://www.omdbapi.com/?apikey=26f0eb1&t=' + encodeURI(randomMovie)).then(function(response){
            var movieTitle = response.Title;
            var movieYear = response.Year;
            var movieGenre = response.Genre;
            var moviePoster = response.Poster;
            var movieDirector = response.Director;
            var movieRuntime = response.Runtime;
            var moviePlot = response.Plot;
            var movieActors = response.Actors;

            console.log(response.Actors);


            $(".movieInformation").append("<div id='movie-information-container' class='col-xs-12 col-sm-12 col-md-4 col-lg-3'><div class='movie-holder'><img id='movie_poster' src=" + moviePoster + "><h3 id='movie_title'>" + movieTitle + "</h3><h4 id='move_year'>" + movieYear + "</h4><h4 id='movie_genre'>" + movieGenre + "</h4><button id='movieInfo' class='btn'>Movie Info</button><p id='runTime'>" + movieRuntime + "</p><p id='movie_director'>" + movieDirector + "</p><p id='movie_plot'>" + moviePlot + "</p><p id='movie_actors'>" + movieActors + "</p></div><br></div>");
        });
        
        
        
    }//end of for 
    
    
    $(".movieInformation").on("click", "button", function(){
      
        var titleOfMovie = $(this).siblings("#movie_title").text();
        var runTimeOfMovie = $(this).siblings("#runTime").text();
        var yearOfMovie = $(this).siblings("#move_year").text();
        var genreOfMovie = $(this).siblings("#movie_genre").text();
        var directorOfMovie = $(this).siblings("#movie_director").text();
        var plotOfMovie = $(this).siblings("#movie_plot").text();
        var actorsOfMovie = $(this).siblings("#movie_actors").text();
        var posterOfMovie = $(this).siblings("#movie_poster").attr('src');
        

        localStorage.setItem("filmTitle", titleOfMovie);
        localStorage.setItem("filmRuntime", runTimeOfMovie);
        localStorage.setItem("filmYear", yearOfMovie);
        localStorage.setItem("filmGenre", genreOfMovie);
        localStorage.setItem("filmDirector", directorOfMovie);
        localStorage.setItem("filmPlot", plotOfMovie);
        localStorage.setItem("filmActors", actorsOfMovie);
        localStorage.setItem("filmPoster", posterOfMovie);
        
           
        window.location.href = "individual_movie.html";
        

        
    });//goes to individual movie page
    
    
}// end of function 

    /*
function filterBy(theGenre){
    for(i = 0; i < 24; i++){
        $("#movie-information-container").remove;
    }
    
    for(i = 0; i < 24; i++){
        if ($('#movieGenre')==theGenre) {
            var randomMovie = randomMovieArray[i];
           
            $.getJSON('http://www.omdbapi.com/?apikey=26f0eb1&t=' + encodeURI(randomMovie)).then(function(response){
                var movieTitle = response.Title;
                var movieYear = response.Year;
                var movieGenre = response.Genre;
                var moviePoster = response.Poster;
                var movieDirector = response.Director;
                var movieRuntime = response.Runtime;
                var moviePlot = response.Plot;
                var movieActors = response.Actors;

                console.log(response.Actors);


                $(".movieInformation").append("<div id='movie-information-container' class='col-xs-12 col-sm-12 col-md-4 col-lg-3'><div class='movie-holder'><img id='movie_poster' src=" + moviePoster + "><h3 id='movie_title'>" + movieTitle + "</h3><h4 id='move_year'>" + movieYear + "</h4><h4 id='movie_genre'>" + movieGenre + "</h4><button id='movieInfo' class='btn'>Movie Info</button><p id='runTime'>" + movieRuntime + "</p><p id='movie_director'>" + movieDirector + "</p><p id='movie_plot'>" + moviePlot + "</p><p id='movie_actors'>" + movieActors + "</p></div><br></div>");
            });
        }
    }
}
*/
    
apiCall();
    
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    }); 
    
     
    
});

