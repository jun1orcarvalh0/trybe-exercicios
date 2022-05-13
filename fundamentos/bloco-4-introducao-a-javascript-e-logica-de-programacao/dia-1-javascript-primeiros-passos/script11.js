const salarioBruto = 3000;
let inss;
let impostoDeRenda

if (salarioBruto < 1556.94){
    inss = (salarioBruto * 8) / 100
}
else if (salarioBruto <= 2594.92) {
    inss = (salarioBruto * 9) / 100
}
else if (salarioBruto <= 5189.82 ) {
    inss = (salarioBruto * 11) / 100
}
else {
    inss = 570.88
}

const salarioBase = salarioBruto - inss

if (salarioBase < 1903.98) {
    impostoDeRenda = 0
  } else if (salarioBase <= 2826.65) {
    impostoDeRenda = (salarioBase * 7.5) / 100 - 142.8
  } else if (salarioBase <= 3751.05) {
    impostoDeRenda = (salarioBase * 15) / 100 - 354.8
  } else if (salarioBase <= 4664.68) {
    impostoDeRenda = (salarioBase * 22.5) / 100 - 636.13
  } else {
    impostoDeRenda = (salarioBase * 27.5) / 100 - 869.36
  }

  const salarioLiquido = salarioBase - impostoDeRenda

  console.log (salarioLiquido)