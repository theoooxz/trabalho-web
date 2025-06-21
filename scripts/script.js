let linguas = ["Tupi-Guarani"];

const listaLinguas = document.getElementById("lista-linguas");
const inputLingua = document.getElementById("nova-lingua");
const botaoAdicionar = document.getElementById("adicionar-lingua");

function renderizarLista() {
  listaLinguas.innerHTML = ""; 

  for (let i = 0; i < linguas.length; i++) {
    const novoItem = criaItemLista(linguas[i]);
    listaLinguas.appendChild(novoItem);
  }
}

function criaItemLista(lingua) {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const button = document.createElement("button");

  h3.innerText = lingua;
  button.innerText = "Remover";

  button.addEventListener("click", () => {
    linguas = linguas.filter(t => t !== lingua);
    renderizarLista();
  });

  li.appendChild(h3);
  li.appendChild(button);

  return li;
}

botaoAdicionar.addEventListener("click", () => {
  const novaLingua = inputLingua.value.trim();
  linguas.push(novaLingua);
  inputLingua.value = "";
  renderizarLista();
  
});

renderizarLista();