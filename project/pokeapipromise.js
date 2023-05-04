//Processing pokeman api to fetch data


const pokedex = document.getElementById("pokedex");
console.log(pokedex);

let itemsPerPage = 10;
let currentPage =1;

const fetchPokeman = () => {

  console.log(data);

  const promises = [];
  for (let i = 1; i <= 50; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    promises.push(fetch(url).then(res => res.json()));

  }
  Promise.all(promises).then(results => {
    const pokeman = results.map((data) => ({
      name : data.name,
      id : data.id,
      image : data.sprites['front_default'],
      type : data.types.map((type) => type.type.name).join(','),
      moves : data.moves.map((moves) => moves.move.name).join(','),
      abilities : data.abilities.map((abilities) => abilities.ability.name).join(','),
      weight : data.weight
    }));
    displayPokeman(pokeman);
  });
};
  // then((data) => {
  //   console.log(data);
  //   const pokeman = {

  //   };


  // pokeman['name'] = data.name;
  // pokeman['weight'] = data.weight;
  // pokeman['moves'] = data.moves;
  // pokeman['type'] = data.types.map((type) => 
  // type.type.name).join(',');
  // pokeman['abilities'] = data.abilities.map((abilities) => 
  // abilities.ability.name).join(',');



const displayPokeman = (pokeman) => {
  console.log(pokeman);

  const pages = [];
  for(let i = 0;i<=Math.ceil(pokeman.length/itemsPerPage);i++){
    pages.push();
  }

  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const currentItems = pokeman.slice(indexOfFirstPage,indexOfLastPage);

  const pokemanHtmlString = currentItems.map((pokeman) => `<li class="card">
  <img class="card-image" src ="${pokeman.image}"/>
  <h2 class="card-title">${pokeman.id}.${pokeman.name}</h2>
  <p class="card-content">Type:${pokeman.type}</p>
  <p class="card-content" >Abilities:${pokeman.abilities}</p>
  <p class="card-content">Weight:${pokeman.weight}</p>
 
  </li>
  `).join('');
  pokedex.innerHTML = pokemanHtmlString;
}
{/* <p class="card-content">Moves:${pokeman.moves}</p>  */}


fetchPokeman();

const prevBtn = ()=> {
  if((currentPage - 1 ) * itemsPerPage){
    currentPage--;

    fetchPokeman();
  }
}

const nextBtn = ()=> {
  if((currentPage * itemsPerPage) / 50){
    currentPage++;
    fetchPokeman();
  }
}

document.getElementById("prevBtn").addEventListener("click",prevBtn,false);
document.getElementById("nextBtn").addEventListener("click",nextBtn,false);
