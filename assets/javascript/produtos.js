const section = document.querySelector("main section")

const fetchData = async function () {
  const result= await fetch("https://pweb-api.herokuapp.com//produtos");
  const produtos= await result.json();
  produtos.forEach(( produto) => {
section.innerHTML += `
<div class="card">
 <h2>${produto.nome}</h2>
 <img src="${produto.imagem}" / >
 <p>${produto.descricao} </p>

 </div>`;
  });
};

fetchData();