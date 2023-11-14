// Seleciona os elementos HTML que você vai usar
const digimonNameInput = document.getElementById('digimonName');
const digimonForm = document.getElementById('digimonForm');
const digimonNameElement = document.querySelector('.digimon_name');
const digimonLevelElement = document.querySelector('.digimon_level');
const digimonImage = document.querySelector('.digimon_image');

// Função para fazer a solicitação à API e obter os dados do Digimon
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
    // Tratar o erro aqui, por exemplo, exibindo uma mensagem de erro na interface do usuário.
  }
};

// Função para renderizar os dados do Digimon na tela
const renderDigimon = async (digimon) => {
  const data = await fetchDigimon(digimon);

  // Atualiza a imagem do Digimon com a URL fornecida pela API
  digimonImage.src = data[0].img;

  // Atualiza o nome e o nível do Digimon (se desejar)
  //digimonNameElement.textContent = `Nome do Digimon: ${data.name}`;
  //digimonLevelElement.textContent = `Nível do Digimon: ${data.level}`;
};

// Adiciona um evento de envio de formulário para buscar o Digimon
digimonForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário

  const digimonName = digimonNameInput.value;
  await renderDigimon(digimonName);
});
