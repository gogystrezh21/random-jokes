const url = 'https://api.icndb.com/jokes/random';
const jokebutton = document.querySelector('.jokebutton');
const joke = document.querySelector('.joke');

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    randomJokes(data);
    console.log(data.value)
  }

getData()

  function randomJokes(data) {
    joke.textContent = data.value.joke;
  }


  jokebutton.addEventListener('click', getData);

  

  const audio = new Audio();

  function sound() {
    audio.src = `./assets/sound/laugh.mp3`;
    audio.play();
    audio.currentTime = 0;
  }


  jokebutton.addEventListener('click', sound);

  





