var appStore = document.getElementById("appStore");
if (appStore) {
    appStore.addEventListener("click", function () {
        window.open("https://www.apple.com/la/app-store/");
    });
}

var googlePlay = document.getElementById("googlePlay");
if (googlePlay) {
    googlePlay.addEventListener("click", function () {
        window.open(
            "https://play.google.com/store/games?hl=es_AR&gl=US&pli=1",
        );
    });
}