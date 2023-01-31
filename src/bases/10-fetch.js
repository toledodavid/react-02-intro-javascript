const apiKey = 'FMH46HzHk8wFS4OcWPBUXvpm7eYt14bF';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request.then(response => response.json())
.then(({data}) => {
  const { url } = data.images.original;
  console.log(url);

  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
})
.catch(console.warn);