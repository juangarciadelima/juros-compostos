const taxainicial = 15000
const juros = 15
const tempo = 12
const taxamensal = 1000

function juroscompostos(){

      return taxainicial*(1 + juros/100)**tempo

}

console.log ('juros', juroscompostos())
      
