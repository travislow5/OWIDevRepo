//Navbar function:
$(function(){
    
   
    
    var apiRequest = new XMLHttpRequest();
    
    var variableName = "Girls";
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?apikey=26f0eb1&s="' + variableName + '"', true);
                    
    
    
         apiRequest.onload = function (){
        
        var data = JSON.parse(this.response);
       
                
             
            
             
        
        function createContainers(movieTitle, moviePoster, genre){
            
            $("#movieInformation").append("<div class='movie-information-container col-xs-3'><div class='individualMovie'><img src=" + moviePoster +"><h4 id='movie-name'> " + movieTitle + "</h4><h6 id='movie-genre'> " + genre + "</h6><button><img src='../img/movieinfo.png' href='individual_movie.html'></button></div>");            
           
            for(i=0; i < data.Search.length; i++){
               
               movieTitle = data.Search[i].Title;
               moviePoster = data.Search[i].Poster;
               genre = data.Search[i].genre;
               
               createContainers(movieTitle, moviePoster, genre);
                
              
           } 
      
        }
              
        
    }
    
         
     
    apiRequest.send();

            
 
    
    

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });  


//Display Movies function


    
    
    
   
    

    
        

    
})