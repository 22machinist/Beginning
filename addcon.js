//This file will contain codes for : 
// 1.To hide the content 
// 2.To edit the link using javascript 

window.onload = function () {
    //Defining the variables required 
    var faqList , answers , questionLinks , questions , currentNode , i , j ; 

    //Declaring the variables to the desired part 
    faqList = document.getElementById("faq") ;  //Declaration of the variable 
    answers = faqList.getElementsByTagName("dd") ; //Declaring the answers to the "dd" elements of "faqList" 

    //Creating a loop for the length of the answers 
    for (i = 0 ; i < answers.length ; i++) {
        answers[i].style.display = 'none' ; //Declaring the style property of the answers 
    }

    questions = faqList.getElementsByTagName("dt") ; //Defining the questions 

    //Defining the loop 
    for (i = 0 ; i < questions.length; i++) {
        questions[i].onclick = function() {
            currentNode = this.nextSibling ; 
            while(currentNode) {
                if (currentNode.nodeType == "1" && currentNode.tagName == "DD") {
                    if(currentNode.style.display == 'none'){
                        currentNode.style.display = 'block' ;
                    } else {
                        currentNode.style.display = 'none' ;
                    }
                    break ;
                }
                currentNode = currentNode.nextSibling ;
            }

            return false ; 
        } ; 

    } ; 
    //Now we will define the function to add the stuff using JavaScript 

    function addExpandAllLink() {
        var expandAllDiv , expandAllLink , faq ;                     //Designated the required variables 

        expandAllDiv = document.createElement("div") ;               //This will create the "div" element 
        expandAllDiv.setAttribute("id" , "expandAll") ;              //This will set the "id" of newly created element to "expandAll"

        expandAllLink = document.createElement("a") ; 
        expandAllLink.setAttribute("href" , "#") ; 
        expandAllLink.setAttribute("id" , "expandAllLink") ; 
        expandAllLink.appendChild(document.createTextNode("Expand All")) ;  //Text Node will be placed inside the "a" Tag 

        expandAllDiv.appendChild(expandAllLink) ;                       //Appending the link to the <div>

        //Designating the function with onclick event 
 
       expandAllLink.onclick = function() {

        var faqList , answers ;                                         //Designating the variables 
        faqList = document.getElementById("faq")  ; 
        answers = faqList.getElementsByTagName("dd") ; 

        //Creating the if statement using innerHTML property of the HTML DOM interface 
        if(this.innerHTML == "Expand All") {
            //Creating the for loop 
            for ( i = 0 ; i < answers.length ; i++) {
                answers[i].style.display = 'block' ;
            }
            this.innerHTML = "Collapse All" ; 
        }
        else {
            //Creating loop again 
            for (i = 0 ; i < answers.length ; i++) {
                answers[i].style.display = 'none' ;
            }
            this.innerHTML = "Expand All" ;
        }
        return false ; 
       } ; 

       faq = document.getElementById("faq") ;
       faq.insertBefore(expandAllDiv , faq.firstChild) ;
    };

    //Calling the function 
    addExpandAllLink() ;

    //Now we will add new function which will update the expand link

    function updateExpandAllLink() {
        //Designating the required variables 
        var faqList , answers , expandAllLink , switchLink ; 

        faqList = document.getElementById("faq") ; 
        answers = faqList.getElementsByTagName("dd") ; 
        expandAllLink = document.getElementById("expandAllLink") ;
        switchLink = true ; 

        //Creating the if-conditional loop 
        if (expandAllLink.innerHTML == "Expand All") {
            for (i = 0 ; i < answers.length ; i++) {
                if(answers[i].style.display == 'none') {
                    switchLink = false ; 
                }
            } ; 
            //Creating the if-statement again 
            if(switchLink) {
                expandAllLink.innerHTML = "Collapse All" ;
            }
        }
        else {
            for (i = 0 ; i < answers.length ; i++) {
                if(answers[i].style.display == 'block') {
                    switchLink = false ;
                    break ;
                }
            }
        }

        if (switchLink) {
            expandAllLink.innerHTML = "Expand All" ;
        }
    } 
    //Calling the update link function 
    updateExpandAllLink() ; 
};