// mengambil data dari localStorage
let tamp_musik=localStorage.getItem('lagu')
let tamp_gambar=localStorage.getItem('gambar')
let tamp_judul=localStorage.getItem('judul')
let tamp_artis=localStorage.getItem('artis')

// memasukan ke dalam html 
let source = document.querySelector('source')
let audio = document.querySelector('audio')
let img = document.querySelector('main>figure>img')
let h2 = document.querySelector('h2')
let h4 = document.querySelector('h4')



source.src = tamp_musik
audio.load()
img.src=tamp_gambar
h2.innerText = tamp_judul
h4.innerText = tamp_artis
// RESPONSIV
function f(y) {
    y.classList.toggle("change")
    var x = document.getElementById("linkAku");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}
