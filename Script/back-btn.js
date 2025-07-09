document.getElementById("back-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        document.getElementById("discover-questions").style.display = "none"
        document.getElementById("main-section").style.display = "block"
        document.getElementById("header").style.display = "block"
        // document.getElementById("activity-log").style.display = "block"
    }
)