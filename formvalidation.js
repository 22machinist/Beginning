//This file now contains the perfect code to give a perfect error output 
//while validating the form 

$(function() {
    $("#RegistrationForm").submit(function(event) {
        var errors = [] ; 

        $("div.errors" , this).remove() ;
        if (!$(this.name).val() ){
            errors.push("<li>You must enter your name ! </li>") ; 
            $(this.name).parents("div.required").addClass("error") ; 
            event.preventDefault() ;
        } ;

        if(!$("input[name='gender']:checked" , this).length) {
            errors.push("<li> You must choose your Gender ! </li>") ;
            $("input[name='gender']").parents("div.required").addClass("error") ;
            event.preventDefault() ;
        }
        if(errors.length > 0 ) {
            $(this).prepend("<div class='errors'> You must" + "correct the following errors: <ul>" + 
            errors.join("") + "</ul></div>") ;
        }
    }) ;
});