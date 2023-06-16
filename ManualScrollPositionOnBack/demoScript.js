(function(){
    // I set scrollRestoration to Manual to make sure that I control the behavior
    history.scrollRestoration = "manual";

    // Defining variables
    var previousUrl = sessionStorage.getItem("previous-url");
    var previousPosition= sessionStorage.getItem("previous-position");
    var currentUrl = sessionStorage.getItem("current-url");
    var currentPosition = sessionStorage.getItem("position-current");

    var styling = "font-size: 20px; color: green; font-family: Arial, Helvetica, sans-serif; text; font-weight: 700;";
    var page = document.querySelector("h1").innerHTML;

    // If this isn't the first page on the site I'm visiting then I move the current page to the previous in my sessionStorage
    if(sessionStorage.getItem("current-url") != null){
        sessionStorage.setItem("previous-url", currentUrl);
        sessionStorage.setItem("previous-position", currentPosition);
        sessionStorage.setItem("position-current", 0);
    }

    // Then I set the page I'm on as my current page
    sessionStorage.setItem("current-url", window.location.href);

    // I check if the page I'm on matches the page I was on before
    if (previousUrl == window.location.href) {
        console.log("%cDeja Vu - " + page, styling);
        window.scrollTo({
            top: previousPosition,
            behavior: 'smooth'
        });
    }

    // Listen to onClick for links in this case, this could also be a specific class in a production scenario 
    document.querySelectorAll("a").forEach(el => {
        el.addEventListener("click", function(e) {
            e.preventDefault;
            if(sessionStorage.getItem("position-current") != null){
                sessionStorage.setItem("previous-position", currentPosition);
            }
        });
    });

    // Clear sessionStorage for testing purposes
    document.querySelector("#delBtn").addEventListener("click", function (){
        sessionStorage.removeItem("previous-url");
        sessionStorage.removeItem("current-url");
        sessionStorage.removeItem("previous-position");
        sessionStorage.removeItem("position-current");
        console.log("%cSession cleared!", styling);
    });

    // Log sessionStorage for testing purposes
    document.querySelector("#prtBtn").addEventListener("click", function (){
        previousUrl = sessionStorage.getItem("previous-url");
        currentUrl = sessionStorage.getItem("current-url");
        previousPosition = sessionStorage.getItem("previous-position");
        currentPosition = sessionStorage.getItem("position-current");
        console.log("%cHere are the current values :", styling);
        console.log("previousUrl : " + previousUrl +"\npreviousPosition : " + previousPosition +"\ncurrentUrl : " + currentUrl + "\ncurrentPosition : " + currentPosition);
    });

    // Adding scroll listener
    window.addEventListener("scroll", function (){
        document.querySelector("h2").innerHTML = "Scroll position : " + window.scrollY + "px";
        sessionStorage.setItem("position-current", window.scrollY);
    });
})();












/*
window.addEventListener("beforeunload", function(event) {
    if(sessionStorage.getItem("current-url") != null){
        var currentUrl = sessionStorage.getItem("current-url");
        sessionStorage.setItem("previous-url", currentUrl);
    }
    sessionStorage.setItem("current-url", window.location.href);

    if(sessionStorage.getItem("position-current") != null){
        var currentPosition = sessionStorage.getItem("position-current");
        sessionStorage.setItem("previous-position", currentPosition);
    }
    sessionStorage.setItem("position-current", window.scrollY);
});
*/