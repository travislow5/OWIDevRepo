$(function(){
    
    var randomMovieArray = ['American Pie', 'Lilo & Stitch', 'Lord of the Rings', 'Harry Potter', 'Moana', 'Lion King', 'Coraline', 'Beetlejuice', 'Jurassic Park', 'Beauty and the Beast', 'All Good Things', 'Deadpool', 'Pretty Woman', 'Dirty Dancing', 'Firewall'];

function apiCall(){
    
    
    for(i = 0; i < randomMovieArray.length; i++){
        
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
        
        
         $(".movieInformation").append("<div id='movie-information-container' class='col-xs-12 col-sm-12 col-md-4 col-lg-3'><div class='movie-holder'><img id='movie_poster' src=" + moviePoster + "><h3 id='movie_title'>Title:" + movieTitle + "</h3><h4 id='move_year'>Year:" + movieYear + "</h4><h4 id='movie_genre'>Genre:" + movieGenre + "</h4><a href='individual_movie.html' ><button class='addMovie'>Movie Info</button></a><p id='runTime'>" + movieRuntime + "</p><p id='movie_director'>" + movieDirector + "</p><p id='movie_plot'>" + moviePlot + "</p><p id='movie_actors'>" + movieActors + "</p></div><br></div>");
            
      
        });
        
        
        
    }//end of for 
    
    
    $(".movieInformation").on("click", "button", function(){
      
        var runTimeOfMovie = $(this).siblings("#runTime").text();
        var titleOfMovie = $(this).siblings("#movie_title").text();
        var yearOfMovie = $(this).siblings("#move_year").text();
        var genreOfMovie = $(this).siblings("#movie_genre").text();
        var directorOfMovie = $(this).siblings("#movie_director").text();
        var plotOfMovie = $(this).siblings("#movie_plot").text();
        var actorsOfMovie = $(this).siblings("#movie_actors").text();
        

        console.log(titleOfMovie);
        
        for(i=0; i > randomMovieArray.length; i ++){
            
            if(randomMovieArray[i] === titleOfMovie){
                
                var title = response[i].Title;
                var director = response[i].Director;
                var actors = response[i].Actors;
                var genre = response[i].Genre;
                var runTime = response[i].Runtime;
                        
                localStorage.setItem("title", titleOfMovie);
                localStorage.setItem("director", directorOfMovie);
                localStorage.setItem("actors", actorsOfMovie);
                localStorage.setItem("genre", genreOfMovie);
                localStorage.setItem("runTime", runTimeOfMovie);
            }
        
        }

        
        
    });
    
}// end of function 
    
  
       
                
   
    
    
        
        


apiCall();
    
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    }); 
    
     
    
});

