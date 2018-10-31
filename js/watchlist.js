$(function(){
  
    console.log("hi");
    
    function CreateCards(MovieTitle, MovieImage, MovieCounter){
        $("#Watchlist").append("<div class='Info card'><div class='card-header' id='Title-One'><h5 class='mb-0'><p class='Movie-Title'>" + MovieTitle + "</p><button class='Chev-button btn btn-link' type='button' data-toggle='collapse' data-target='#Info" + MovieCounter + "'><img class='Chevron' src='../img/chevron.png'></button></h5></div><!--card header--><div id='Info"+ MovieCounter + "' class='collapse show' data-parent='#Watchlist'><div class='card-body'><div class='row'><div class='MovieCard col-6'><img src='" + MovieImage + "' alt='Movie image'></div><!--MovieCard--><div class='col-6 box-parent'><div class='buttons box-child'><a href='#' class='button btn btn-default'>Watch Now</a><a href='#' class='remove button btn btn-default'>Remove</a></div><!--buttons--></div></div><!--row--></div><!--card-body--></div><!--InfoOne--></div><!--card-->")
    };
  
    
   /* for(i=0, i < watchlistArray.length; i++){
        var movieName = watchlistArray[i].title;
        var movieImage = watchlistArray[i].poster;
        
        CreateCards(movieName, movieImage);
    }    
    
    
  */
// var watchlistArray = [{title: "Venom", ..... poster:"http//..."}] 
    
    var movieCounter = 3
    var titleFilm = localStorage.getItem("titleOfFilm");
    var posterFilm = localStorage.getItem("posterOfFilm");
    
    if(titleFilm != null){
      for(i=0; i < 1; i++){
        var movieName = titleFilm;
        var movieImage = posterFilm;
        var movieCounter = movieCounter + 1;
        CreateCards(movieName, movieImage, movieCounter);
    } ;  
    };
    
    
   
     $(".remove").on("click", function(){
        $(this).closest(".Info").fadeOut(800);
    })

    
});

