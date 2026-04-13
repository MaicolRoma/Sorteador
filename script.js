

function sortearNumeros(){
const input1 = document.querySelector("#inputNumeroInicial").value;
const input2 = document.querySelector("#inputNumero2").value;
const valorInput1 = parseFloat(input1);
const valorInput2 = parseFloat(input2);

    if(isNaN(valorInput1) || isNaN(valorInput2)){
        alert("Porfavor digite números validos");
        return;
    }
    if (valorInput1 > valorInput2) {
        alert("O primer Número Não pode ser Maior que o Segundo");
        return;
    }
  const minValorInput = Math.ceil(valorInput1);
  const maxValorInput = Math.floor(valorInput2);
  const resultSorteio = Math.floor(Math.random() * (maxValorInput - minValorInput + 1)) + minValorInput;
  
const titulo = document.querySelector(".titulo-sorteio");
const numeroSorteado = document.querySelector("#numeroSorteado");

  mudarCorTitulo(titulo);  
  mostrarResultado(resultSorteio);

}


function mostrarResultado(resultSorteio) {
        numeroSorteado.classList.remove("mostrar");
        setTimeout(() => {
              numeroSorteado.textContent = resultSorteio;  
             numeroSorteado.classList.add("mostrar");
        }, 600);
       
}

function mudarCorTitulo(titulo) {
    titulo.classList.remove("cor-text");
     setTimeout(() => { 
             titulo.classList.add("cor-text");
        }, 600);
    
}








