$(function() {
    //First we will hide all the answers of the questions
    $("#Answer1").hide() ;
    $("#Answer2").hide() ;
    $("#Answer3").hide() ;

    //Now we will create the script to slide down the answer when the link 1 is clicked 
    $("#link1").click(function(event) {
        event.preventDefault() ; 
        $("#Answer1").slideDown('slow') ;
        //Now we will add the script to slideUp or hide the content of another questions 
        $("#Answer2 , #Answer3").hide('slow' , function() {
            $(this).slideUp('slow') ;
        })   ;
    }) ; 
    //Now we will create the same script for Link 2 
    $("#link2").click(function(event) {
        event.preventDefault() ; 
        $("#Answer2").slideDown('slow') ;
        $("#Answer1 , #Answer3").hide('slow' , function() {
            $(this).slideUp('slow') ;
        })
    }) ; 
    //Now we will do the same for Link 3 
    $("#link3").click(function(event) {
        event.preventDefault() ; 
        $("#Answer3").slideDown('slow') ;
        //Now we will add the script to slideUp or hide the content of another questions 
        $("#Answer1 , #Answer2").hide('slow' , function() {
            $(this).slideUp('slow') ;
        }); 


    }) ; 
});