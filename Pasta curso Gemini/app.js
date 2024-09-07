const personagem = [
  {
      nome: "Frodo Bolseiro",
      raca: "Hobbit",
      genero: "Masculino",
      idade: 50,
      local: "Condado",
      historia: "O hobbit que carrega o Um Anel em sua jornada para destruí-lo.",
  
  },
  {
      nome: "Aragorn",
      raca: "Dúnadan",
      genero: "Masculino",
      idade: 87,
      local: "Minas Tirith",
      historia: "Um Dúnadan, descendente de Isildur, destinado a ser rei."
  },
 
  {
      nome: "Gandalf",
      raca: "Isto",
      genero: "Masculino",
      idade: "Muito antiga",
      local: "Orthanc",
      historia: "Um poderoso mago que guia a Companhia do Anel."
  },
  {
      nome: "Legolas",
      raca: "Elfo Sindar",
      genero: "Masculino",
      idade: "Milhares de anos",
      local: "Floresta de Lothlórien",
      historia: "Um elfo sindar com grande habilidade com arco e flecha, companheiro leal de Aragorn."
  },
  {
      nome: "Gimli",
      raca: "Anão",
      genero: "Masculino",
      idade: 139,
      local: "Moria",
      historia: "Um anão valente e guerreiro, companheiro de Aragorn e Legolas."
  },
  {
      nome: "Arwen",
      raca: "Elfa",
      genero: "Feminino",
      idade: "Milhares de anos",
      local: "Rivendell",
      historia: "Uma elfa Noldor, filha de Elrond, e amada de Aragorn."
  },
  {
      nome: "Galadriel",
      raca: "Elfa",
      genero: "Feminino",
      idade: "Milhares de anos",
      local: "Lothlórien",
      historia: "Uma poderosa elfa Noldor, senhora de Lothlórien, e uma das mais antigas criaturas da Terra Média."
  },
  {
      nome: "Saruman",
      raca: "Isto",
      genero: "Masculino",
      idade: "Muito antiga",
      local: "Orthanc",
      historia: "Um poderoso mago que se corrompeu pelo poder do Um Anel e se tornou um dos principais inimigos da Companhia do Anel."
  },
  {
      nome: "Gollum",
      raca: "Hobbit",
      genero: "Masculino",
      idade: "Centenas de anos",
      local: "Montanhas Nebulosas",
      historia: "Um hobbit corrompido pelo Um Anel, obcecado por ele."
  },
  {
      nome: "Éowyn",
      raca: "Rohir",
      genero: "Feminino",
      idade: 25,
      local: "Edoras",
      historia: "Uma princesa rohir que deseja participar da batalha contra as forças de Saruman."
  }
]
const inputPesquisa = document.getElementById("pesquisa");

inputPesquisa.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    pesquisar();
  }
});
function pesquisar() {
  let section = document.getElementById("resultado");
  let campoPesquisa = document.getElementById("pesquisa").value.toLowerCase();
  let resultados = "";
  const img = document.createElement('img');

  personagem.forEach(personagem => {
    if (personagem.nome.toLowerCase().includes(campoPesquisa)) {
      resultados += `
        <div class="personagem">
         <h2>${personagem.nome}</h2>
         <p>Raça: ${personagem.raca}</p>
         <p>Gênero: ${personagem.genero}</p>
         <p>Idade: ${personagem.idade}</p>
         <p>Local: ${personagem.local}</p>
         <p>História: ${personagem.historia}</p>
        </div>
      `;
    }
    
  });

  if (resultados === "") {
    section.innerHTML = "Nenhum personagem encontrado.";
  } else {
    section.innerHTML = resultados;
  }
  
}
  