var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
let video = document.getElementById("video")

if( windowWidth < 500 ) {
    video.innerHTML += `
        <video autoplay loop muted title="Dos santos Pereira">
        <source src="servir_vino2.mp4" type="video/mp4">
        </video>
        `
    }
    else {console.log ("NO ES MOBILE")
    video.innerHTML += `
        <video autoplay loop muted title="Dos santos Pereira">
        <source src="servir_vino1.mp4" type="video/mp4">
        </video>
        `   
}
;