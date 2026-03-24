let lista = document.getElementById("lista");

function adicionar() {
  let input = document.getElementById("produto");

  if (input.value === "") {
    alert("Digite um produto!");
    return;
  }

  let item = document.createElement("li");
  item.innerText = input.value;

  lista.appendChild(item);

  input.value = "";
}
