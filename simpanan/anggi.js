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
    for (let i = 1; i <= 1; i++) {
      fetch(url + i, options)
        .then((res) => res.json())
        .then((req) => {
          console.log(req);
          let artist = req;
          keytrack = artist.nb_fan;
          getTrack(music);
          console.log(keytrack);
          console.log(music);
          let tamp = document.createElement('img')
          let paragraf = document.createElement('p')
          let lagu = document.getElementById('link-audio');
          paragraf.textContent = req.name
          tamp.src = req.picture
          lagu.src = music;
          document.body.appendChild(tamp)
          document.body.appendChild(paragraf)
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
function getTrack(){
  const url = 'https://deezerdevs-deezer.p.rapidapi.com/track/' + keytrack;
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
        console.log(hasil)
        music = hasil.preview;
        console.log(music)
      });
      // const response = fetch(url, options);
      // const result = response.tet();
    // console.log(result);
  } catch (error) {
    // console.error(error);
  }
}

