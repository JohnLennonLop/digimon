const digimonName =document.querySelector('.digimon_name');


const fetchDigimon = async (digimon) =>{
    const APIResponse = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);
    const data= await APIResponse.json();
    console.log(data);
    return data;
}

const renderDigimon = async (digimon) =>{
    const data = await fetchDigimon(digimon);
 
    digimonName.innerHTML = data.name;
   
}
renderDigimon('agumon');