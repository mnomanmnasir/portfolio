function showHide(name) {
    var element = document.getElementById(name);
    if (element.style.display === "block") {
        element.style.display = "none";

    } else {
        element.style.display = "block";
    }
}
function showOptions(name) {
    var details = document.getElementById("details");
    var portfolio = document.getElementById("portfolio");
    if (name === "details") {
        portfolio.style.display = "none";
        details.style.display = "block";
    } else {
        portfolio.style.display = "block";
        details.style.display = "none";
    }
}



