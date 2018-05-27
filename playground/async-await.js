// function to make request using fetch
// http://rallycoding.herokuapp.com/api/music_albums

// Promise
const fetchAlbums = () => {
  fetch('http://rallycoding.herokuapp.com/api/music_albums')
  .then(result => result.json())
  .then(json => console.log(json));
}

fetchAlbums();

// Async/Await
const fetchAsyncAlbums = async () =>{
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();
  console.log(json);
}

fetchAsyncAlbums();
