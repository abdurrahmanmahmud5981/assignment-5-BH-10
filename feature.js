document.getElementById("donateBtn").addEventListener("click", function (e) {
    e.target.classList.add("bg-primary"); 
    document.getElementById("historyBtn").classList.remove("bg-primary"); 
    document.getElementById("history").classList.add("hidden");
    document.getElementById("donate").classList.remove("hidden") ;
})
document.getElementById("historyBtn").addEventListener("click", function (e) {
   e.target.classList.add("bg-primary"); 
   document.getElementById("donateBtn").classList.remove("bg-primary"); 
   document.getElementById("donate").classList.add("hidden");
   document.getElementById("history").classList.remove("hidden");
})