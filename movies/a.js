const API_KEY = 'c32983b3';

const input = document.createElement('input');
input.placeholder = 'Enter movie title';

const button = document.createElement('button');
button.textContent = 'Search';

const result = document.createElement('div');

button.addEventListener('click', async () => {
  const title = input.value;
  if (!title) {
    alert('Enter a title');
    return;
  }

  try {
    const res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
    const data = await res.json();

    if (data.Response === 'False') {
      result.innerHTML = 'Movie not found.';
    } else {
      result.innerHTML = `
        <h2>${data.Title} (${data.Year})</h2>
        <p>${data.Genre}</p>
        <p>${data.Plot}</p>
        <img src="${data.Poster}" style="height:300px">
      `;
    }
  } catch {
    result.innerHTML = 'Error fetching data.';
  }
});

document.getElementById('app').append(input, button, result);