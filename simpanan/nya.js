// id lagu
const number = 2;

async function Api() {
    // mengambil api
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${number}`;
    const options = {
        method: 'GET',
        headers: {
            // key 
            'X-RapidAPI-Key': '53c9ad2159msh7c6ae966a14c19bp10948cjsn3f6ba00369b3',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    try {
        // memindahkan ke objek
        const response = await fetch(url, options);
        const result = await response.json();
        z = result.data;

        // perulangan buat ngambil data secara dinamis
        z.map((x) => {
            let figure = document.createElement('figure');
            let figcaption = document.createElement('figcaption');
            let img = document.createElement('img');

            img.src = x.artist.picture;

            let judul = document.createElement('h2');
            judul.textContent = x.title;
            let artis = document.createElement('h4');
            artis.textContent = x.artist.name;

            figcaption.appendChild(judul);
            figcaption.appendChild(artis);

            figure.appendChild(img);
            figure.appendChild(figcaption);

            // Membuat elemen audio
            const audioElement = document.createElement('audio');
            audioElement.controls = true;

            // Membuat elemen source
            const audioSource = document.createElement('source');
            audioSource.src = x.preview;

            // Menambahkan elemen source ke elemen audio
            audioElement.appendChild(audioSource);

            // Menambahkan elemen audio ke dalam elemen figure
            figure.appendChild(audioElement);

            // Menambahkan figure ke dalam elemen HTML
            document.querySelector('main').appendChild(figure);
        })
        // jika fetch gagal, maka akan membuat output error 
    } catch (error) {
        console.error(error);
    }
}

// memanggil function 
Api();
