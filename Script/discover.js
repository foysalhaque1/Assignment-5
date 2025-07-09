document.getElementById("discover").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("main").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("discover-questions").style.display = "block";

})