//Navbar function:
$(function(){
    
   
    
    var apiRequest = new XMLHttpRequest();
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?apikey=26f0eb1&s="Mean Girls"', true);
                    
    
    
        apiRequest.onload = function (){
        
        var data = JSON.parse(this.response);   
            
            console.log(apiRequest);

        function createContainers(movieTitle, moviePoster, genre){
            
            $(".movieInformation").append("<div class='movie-information-container col-xs-3 content-center'><div class='individualMovie'><img src=" + moviePoster +"></div><div class='movieInfo'><h4 id='movie-name'>" + movieTitle + "</h4><h6 id='movie-genre'>" + genre + "</h6></div><button><img src='../img/movieinfo.png' href='individual_movie.html'></button></div>");            
 
           }
            
                       
            for(i=0; i < data.Search.length; i++){
               
               movieTitle = data.Search[i].Title;
               moviePoster = data.Search[i].Poster;
               genre = data.Search[i].Genre;
               
               createContainers(movieTitle, moviePoster, genre);
                
             
      
        }
              
        
    }
    
         
     
    apiRequest.send();

            
 
    
    

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });  


//Display Movies function


    
    
    
   
    

    
        

    
})