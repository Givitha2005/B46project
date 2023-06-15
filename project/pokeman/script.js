//Processing pokeman api to fetch data

const pokedex = document.getElementById("pokedex");
console.log(pokedex);

let itemsPerPage = 50;
let currentPage = 1;

const fetchPokeman = async () => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1000`;
    const res = await fetch(url);
    const data = await res.json();
    const pokeman = data.results.map((result, index) =>
    ({
      ...result,
      name: result.name,
      id: index + 1,
      apiUrl: result.url,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }));
    displayPokeman(pokeman);
  } catch (err) {
    console.log("Error Occured: " + err);
  }
};

const displayPokeman = (pokeman) => {
  console.log(pokeman);
  const pages = [];
  for (let i = 0; i <= Math.ceil(pokeman.length / itemsPerPage); i++) {
    pages.push();
  }

  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const currentItems = pokeman.slice(indexOfFirstPage, indexOfLastPage);

  const pokemanHtmlString = currentItems.map((pokeman) => `<li class="card" onclick="selectPokeman(${pokeman.id})">
  <img class="card-image" src ="${pokeman.image}"/>
  <h2 class="card-title">${pokeman.id}.${pokeman.name}</h2>
   </li>
  `
  ).join('');
  pokedex.innerHTML = pokemanHtmlString;
}
{/*
<p class="card-content">Type:${pokeman.type}</p>
  <p class="card-content" >Abilities:${pokeman.abilities}</p>
  <p class="card-content">Weight:${pokeman.weight}</p> <p class="card-content">Moves:${pokeman.moves}</p>  */}

fetchPokeman();

const selectPokeman = async (id) => {
  // console.log(id);
  try{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    displayInfo(pokeman);
  } catch(err){
    console.log("Error Occured: " + err);
  }

}

const displayInfo = (pokeman) => {
  // console.log(pokeman);
  const image = pokeman.sprites['front_default'];
  const moves = pokeman.moves.map((moves) => moves.move.name).join(',');
  const abilities = pokeman.abilities.map((abilities) => abilities.ability.name).join(',');
  const weight = pokeman.weight;
  const htmlString = `
  <div class="pokeinfo">
  <button id = "closeBtn" onclick = "closeInfo()">Close</button>
  <div class="car">
     <img class="card-image" src ="${image}"/>
     <h2 class="card-title">${pokeman.id}.${pokeman.name}</h2>
     <p class="card-content">Weight:${weight} </p>
     <p class="card-content">Abilities:${abilities}</p>
     <p class="card-content">Moves:${moves}</p>
  </div>
  </div>
  `;
  pokedex.innerHTML = htmlString + pokedex.innerHTML;
  console.log(htmlString);
}

const closeInfo = () => {
  const pokeinfo = document.querySelector('.pokeinfo');
  pokeinfo.parentElement.removeChild(pokeinfo);
}

const prevBtn = () => {
  if ((currentPage - 1) * itemsPerPage) {
    currentPage--;
    fetchPokeman();
  }
}

const nextBtn = () => {
  if ((currentPage * itemsPerPage) / 50) {
    currentPage++;
    fetchPokeman();
  }
}

document.getElementById("prevBtn").addEventListener("click", prevBtn, false);
document.getElementById("nextBtn").addEventListener("click", nextBtn, false);
