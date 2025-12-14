document.getElementById("year").innerHTML = new Date().getFullYear();

function playMusic(){
    const music = document.getElementById("play");
    document.addEventListener("click", () => {
        music.muted = false;
        music.play();
    }, { once: true });
}
