//Navbar function:
$(function(){
    
   
    
    var apiRequest = new XMLHttpRequest();
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?apikey=26f0eb1&s="Guardians of the Galaxy"&y=2014&i=tt2015381', true);
                    
        
    
        apiRequest.onload = function (){
        
        var data = JSON.parse(this.response);
        

            console.log(apiRequest);

        function createContainers(movieTitle, moviePoster, year){
            
            $(".movieInformation").append("<div class='movie-information-container col-xs-3 content-center col-xs-pull-1 col-sm-pull-0 col-md-pull-0 row'><div class='individualMovie'><img class='img-fluid' src=" + moviePoster +"></div><div class='movieInfo'><h4 id='movie-name'>" + movieTitle + "</h4><h6 id='movie-year'>" + year + "</h6></div><button id='movie-btn' class='btn btn-space img-fluid' href='individual_movie.html'><img src='../img/movieinfo.png' href='individual_movie.html'></button></div>");            
 
           }
            
                       
            for(i=0; i < data.Search.length; i++){
               
               movieTitle = data.Search[i].Title;
               moviePoster = data.Search[i].Poster;
               year = data.Search[i].Year;
               
               createContainers(movieTitle, moviePoster, year);
                
        }
            
            $(".movie-information-container").on("click", function(){
                
                var storageReference = +$(this).find("#movie-year").text();
                console.log(storageReference);
                
                for(i=0; i < data.Search.length; i++){
                    
                    if(data.Search[i].year === storageReference){
                        
                        var title = data.Search[i].Title;
                        var director = data.Search[i].Director;
                        var actors = data.Search[i].Actors;
                        var genre = data.Search[i].Genre;
                        var runTime = data.Search[i].Runtime;
                        
                        localStorage.setItem("title", title);
                        localStorage.setItem("director", director);
                        localStorage.setItem("actors", actors);
                        localStorage.setItem("genre", genre);
                        localStorage.setItem("runTime", runTime);
                    }
                }
            });
              
        
    }
    
         
     
    apiRequest.send();

            
 
    
    

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });  


//Display Movies function


    
    
    
   
    

    
        

    
})