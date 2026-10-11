function showInfo() {
    const info = document.getElementById("info");

    if (info.textContent === "") {
        info.textContent =
            "HTML5 supports semantic tags, multimedia, " +
            "improved forms and other modern web features.";
    } else {
        info.textContent = "";
    }
}

function showMessage() {
    document.getElementById("message").textContent =
        "Congratulations! You completed the HTML Learning Guide.";
}