// ===============================
// WELCOME → MAIN SITE
// ===============================
function goNext() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("msite").style.display = "block";

    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// MODULE NAVIGATION
// ===============================
document.addEventListener("click", (event) => {

    if (!event.target) return;

    switch (event.target.id) {

        case "exploreBtn":
            window.location.href = "mywebsec.html";
            break;

        case "uiuxExploreBtn":
            window.location.href = "mywebsec2.html";
            break;

        case "cadExploreBtn":
            window.location.href = "mywebsec3.html";
            break;

        case "javaExploreBtn":
            window.location.href = "mywebsec6.html";
            break;
        case "NetExploreBtn";
            window.location.href = "mywebsec9.html";
            break;

        default:
            break;
    }
});


