function doBold() {
    const element = document.getElementById("content");

    if(element) {
        if(element.style.fontWeight === "bold") {
            element.style.fontWeight = "normal";
        } else {
            element.style.fontWeight = "bold";
        }
    }
}