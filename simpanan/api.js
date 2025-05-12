// Data artist
var keytrack;
var music;
{
  const url = "https://deezerdevs-deezer.p.rapidapi.com/artist/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9804c19848msh04eae9bf2ce06f3p1b05b2jsnb4ce1ff0cb53",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    // perulangan buat ngambil api artis
     for (let i = 9; i <= 10; i++) {
      fetch(url + i, options)
        .then((res) => res.json())
        .then((req) => {
          console.log(req);
          let artist = req;
          // ngabil kode buat bukak api track
          keytrack = artist.nb_fan;
          getTrack(music);
          console.log(keytrack);
          console.log(music);
  
          
          let lagu = document.getElementById('link-audio');
     

          let figure = document.createElement('figure')
          let img = document.createElement('img')
          img.src = req.picture
          let figcaption = document.createElement('figcaption')
          figcaption.innerText = req.name

          figure.appendChild(img)
          figure.appendChild(figcaption)

          document.querySelector('.kotakkecil').appendChild(figure)
        });
    }
  } catch (error) {
    console.error(error);
  }
}

// let btnHover = document.getElementsByClassName("musik");

// btnHover.addEventListener("mouseover", ()=> {
//   let msc = document.createElement('p');
//   msc.innerText = 'Ini Music';

//   });
// track
async function getTrack() {
  // api track 
  const url = 'https://deezerdevs-deezer.p.rapidapi.com/track/'+ keytrack;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '53c9ad2159msh7c6ae966a14c19bp10948cjsn3f6ba00369b3',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  try {
    fetch(url, options).then(Response => Response.json())
      .then(Response =>{
        let hasil = Response;  
        // ngambil music link music mp  3 
        music = hasil.preview;     
        let source = document.querySelector('#link-audio') 
        source.setAttribute('src', music);
        let audio = document.querySelector('audio')
        audio.load()
        
      });

  } catch (error) {
    console.error(error);
  }
}

  

