const section = document.querySelector("main section");

const fetchData = async function () {
  const result= await fetch("http://localhost/produtos/2");
  const produtos= await result.json();
  produtos.forEach(( produto) => {
section.innerHTML += `
<div class="card">
<a href="produto.html?id=${produto.id}">
 <h2>${produto.nome}</h2>
 <img src="${produto.imagem}" width="150px"/ >
 <p>${produto.descricao} </p>
 </a>
 </div>`;
  });
};

fetchData();