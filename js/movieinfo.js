//Navbar function:

$(function(){

    var title = localStorage.getItem("filmTitle");
    var director = localStorage.getItem("filmDirector");
    var actors = localStorage.getItem("filmActors");
    var genre = localStorage.getItem("filmGenre");
    var runTime = localStorage.getItem("filmRuntime");
    var year = localStorage.getItem("filmYear");
    var plot = localStorage.getItem("filmPlot");
    var poster = localStorage.getItem("filmPoster");
    
    $("#movieTitle").text(title);
    $("#director").text(director);
    $("#actors").text(actors);
    $("#genre").text(genre);
    $("#runtime").text(runTime);
    $("#plot").text(plot);
    $("#movieYear").text(year);
    $("#moviePoster").attr('src', poster);
    $("#movie-poster").attr('src', poster);

    
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    }); 
    
});


