// Seleciona os elementos HTML que você vai usar
const digimonNameInput = document.getElementById('digimonName');
const digimonForm = document.getElementById('digimonForm');
const digimonNameElement = document.querySelector('.digimon_name');
const digimonLevelElement = document.querySelector('.digimon_level');
const digimonImage = document.querySelector('.digimon_image');

const fetchDigimon = async (digimon) => {
  try {
    const APIResponse = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);
    if (!APIResponse.ok) {
      throw new Error('Erro na solicitação da API');
    }
    const data = await APIResponse.json();
    return data;
  } catch (error) {
    console.error(error);
    console.log("Não foi possivel localizar")  }
};

const renderDigimon = async (digimon) => {
  const data = await fetchDigimon(digimon);

  digimonImage.src = data[0].img;

  // Atualiza o nome e o nível do Digimon (se desejar)
  //digimonNameElement.textContent = `Nome do Digimon: ${data.name}`;
  //digimonLevelElement.textContent = `Nível do Digimon: ${data.level}`;
};

digimonForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário

  const digimonName = digimonNameInput.value;
  await renderDigimon(digimonName);
});
