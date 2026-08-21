// Function to handle the transition from the Welcome page to the Main portfolio site
function goNext() {
    document.getElementById('welcome').style.display = "none";
    document.getElementById('msite').style.display = "block";
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Global Click Router - Handles all links and redirects without failing
document.addEventListener("click", (event) => {
    // If the click didn't land on a valid element, ignore it
    if (!event.target) return;

    // Check the ID of the clicked element and redirect to the correct page
    switch (event.target.id) {
        
        // 1. Web Development Module Link
        case "exploreBtn":
            window.location.href = "mywebsec.html";
            break;

        // 2. UI/UX Design Module Link
        case "uiuxExploreBtn":
            window.location.href = "mywebsec2.html";
            break;

        // 3. Computer Aided Designing Module Link
        case "cadExploreBtn":
            window.location.href = "mywebsec3.html";
            break;

        // 4. Java Programming Module Link
        case "javaExploreBtn":
            window.location.href = "mywebsec6.html";
            break;

        // 5. About Button Link
        case "aboutBtn":
            window.location.href = "about.html";
            break;

        // 6. Contact Button Link
        case "contactBtn":
            window.location.href = "contact.html";
            break;

        // 7. Go Back Button smooth scroll mechanic
        case "goBackBtn":
            const mainSiteInterface = document.getElementById("msite");
            if (mainSiteInterface) {
                mainSiteInterface.scrollIntoView({ behavior: "smooth" });
            }
            break;
            
        default:
            // Do nothing if any other unmapped element is clicked
            break;
    }
});


// Jab index.html seedha #modules hash ke sath khule (back arrow se)
window.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash === "#modules") {
        const welcome = document.getElementById('welcome');
        const msite = document.getElementById('msite');
        if (welcome && msite) {
            welcome.style.display = "none";
            msite.style.display = "block";
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";

            setTimeout(() => {
                document.getElementById('modules').scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }
});

