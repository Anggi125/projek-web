const numbers = [];

// Menambahkan id ke dalam array numbers hingga412
for (let i = 1; i <= 2;i++) {
    numbers.push(i);
}

let z = [];
const audios = []; // Array untuk menyimpan elemen audio

async function fetchMusic(number) {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${number}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '53c9ad2159msh7c6ae966a14c19bp10948cjsn3f6ba00369b3',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        z.push(...result.data);
    } catch (error) {
        console.error(error);
    }
}   

async function fetchAllMusic() {
    try {
        await Promise.all(numbers.map(number => fetchMusic(number)));
        displayMusic(z);
    } catch (error) {
        console.error(error);
    }
}

function displayMusic(musics) {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = ''; // Bersihkan konten sebelum menampilkan

    musics.forEach(x => {
        // membuat tag dan di tampung di variable
        let figure = document.createElement('figure');
        let figcaption = document.createElement('figcaption');
        let img = document.createElement('img');
        let artis = document.createElement('h4');
        let judul = document.createElement('h2');
        const audioButton = document.createElement('button');
        audioButton.textContent = 'Play'; // Teks awal tombol adalah 'Play'

        // mengisi variable
        img.src = x.artist.picture_big;
        judul.textContent = x.title;
        artis.textContent = x.artist.name;

        // memasukkan elemen ke dalam struktur
        figcaption.appendChild(judul);
        figcaption.appendChild(artis);
        figure.appendChild(img);
        figure.appendChild(figcaption);

        // Membuat elemen audio 
        const audioElement = document.createElement('audio');
        audioElement.addEventListener('pause',()=> audioButton.textContent = "Play" )
        // Membuat elemen source
        const audioSource = document.createElement('source');
        audioSource.src = x.preview;

        // Menambahkan elemen source ke elemen audio
        audioElement.appendChild(audioSource);
        // Menambahkan elemen audio ke dalam elemen figure
        figure.appendChild(audioElement);
        // Menambahkan elemen audio ke dalam array audios
        audios.push(audioElement);

        // Menambahkan event listener ke tombol untuk mengendalikan pemutaran audio
        audioButton.addEventListener('click', () => {
            if (audioElement.paused) {
                let semuaMusik = document.querySelectorAll("audio");
                semuaMusik.forEach((musik)=> musik.pause())
                audioElement.play();
                audioButton.textContent = 'Pause'; // Ganti teks tombol menjadi 'Pause' saat audio diputar
            } else {
                audioElement.pause();
                audioButton.textContent = 'Play'; // Ganti teks tombol menjadi 'Play' saat audio dijeda
            }
        });

        figure.appendChild(audioButton);
        mainElement.appendChild(figure);

        img.addEventListener('click', () => {
            window.location.href = 'putar.html'; // tujuan link
            // menyimpan link lagu, link gambar, link judul, dan link artis ke dalam localStorage
            localStorage.setItem('lagu', x.preview);
            localStorage.setItem('gambar', x.artist.picture_big);
            localStorage.setItem('judul', x.title);
            localStorage.setItem('artis', x.artist.name);

            window.location.href = 'putar.html'; 
        });
    });
}

// Fungsi untuk mencari musik berdasarkan nama penyanyi atau judul lagu
function searchMusic() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const filteredMusics = z.filter(x => {
        const title = x.title.toLowerCase();
        const artistName = x.artist.name.toLowerCase();
        return title.includes(searchTerm) || artistName.includes(searchTerm);
    });

    if (filteredMusics.length === 0) {
        // Jika hasil pencarian kosong, tampilkan alert
        fetchAllMusic();
        alert('Data tidak ditemukan. Jika ingin mencari, tambahkan angka ke dalam array numbers.');

    }

    displayMusic(filteredMusics);
}

// Menambahkan event listener untuk pencarian dengan menekan tombol Enter
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        searchMusic();
    }
});

// Memanggil function fetchAllMusic saat halaman dimuat
fetchAllMusic();

const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

// Memulai slideshow saat halaman dimuat
setInterval(showNextImage, 1000);

let menu = document.getElementById('menu');
menu.addEventListener("click",()=>{
    let nav = document.getElementById('navigasi');
    nav.classList.toggle('hidden');
    menu.classList.toggle('bx-menu');
    menu.classList.toggle('bx-x');
});

window.onload = fetchAllMusic;
