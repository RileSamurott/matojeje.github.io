document.addEventListener("DOMContentLoaded", function() {
    M.AutoInit();
    document.querySelectorAll(".hidden-before-loaded").forEach(el => {
        el.classList.remove("hidden-before-loaded")
    })
})

function closeSidenav(n) {
    M.Sidenav.getInstance(document.getElementsByClassName("sidenav")[n]).close();
}

window.addEventListener("resize", function() {
    let mobileCarousel = document.querySelector("#mobile .carousel");
    if (isVisible(mobileCarousel)) {
        M.Carousel.getInstance(mobileCarousel).destroy();
        M.Carousel.init(mobileCarousel)
    }
})

function isVisible(el) {
    return !!el.offsetParent;
}