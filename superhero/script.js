const apiKey = '019bd70a949e0caf44a3d184369b7de1';

function ieskotiHerojaus() {
  const vardas = document.getElementById('vardas').value;
  const rezultatas = document.getElementById('rezultatas');
  const klaida = document.getElementById('klaida');
  rezultatas.innerHTML = '';
  klaida.textContent = '';

  fetch(`https://www.superheroapi.com/api.php/${apiKey}/search/${vardas}`)
    .then(res => res.json())
    .then(data => {
      if (data.response === 'error') {
        klaida.textContent = 'Herojus nerastas.';
        return;
      }

      const hero = data.results[0];
      rezultatas.innerHTML = `
        <div class="kortele">
          <h3>${hero.name}</h3>
          <img src="${hero.image.url}" width="100">
          <p>Intelektas: ${hero.powerstats.intelligence}</p>
          <p>Jėga: ${hero.powerstats.strength}</p>
          <p>Greitis: ${hero.powerstats.speed}</p>
          <p>Apyvarta: ${hero.biography['full-name']}, ${hero.biography.publisher}</p>
        </div>
      `;
    })
    .catch(err => {
      klaida.textContent = 'Klaida gaunant duomenis.';
    });
}