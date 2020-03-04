function loaded() {
    M.AutoInit();
}

function closeSidenav(n) {
    M.Sidenav.getInstance(document.getElementsByClassName("sidenav")[n]).close();
}