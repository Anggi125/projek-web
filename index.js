function f(y) {
    y.classList.toggle("change")
    var x = document.getElementById("linkAku");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}

