//Api


const getIceAndFire = async() => {
    try {
     const fetchResponse = await fetch("https://anapioficeandfire.com/api/characters/583");   
     return fetchResponse.json();
     
    } catch (err) {
        console.log("From catch section: " + err);
      }
};

getIceAndFire().then(jsonData =>console.log(jsonData));

