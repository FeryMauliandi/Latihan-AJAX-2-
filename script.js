async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30", {
        method: "GET"
    });
  
    const json = await response.json();
    const results = json.results;
    const img = json.results.url;
      
    let data = '';
    for (i = 0; i < results.length; i++) {
      data = data + `<p class="result">${results[i].name}</p>`;
    }
    document.getElementById("imge").src = img;
    document.getElementById("main").innerHTML = data;
  }