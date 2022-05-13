custoDeUmProduto = 100
valorCustoTotal = 1.2 * custoDeUmProduto
valorDeVendaDoProduto = 200
lucroNaVendaDoProduto = valorDeVendaDoProduto - valorCustoTotal

if (custoDeUmProduto > 0 && valorDeVendaDoProduto > 0) {
    console.log("tudo certo com os valores!")
    console.log(1000 * lucroNaVendaDoProduto)
}
else {
    console.log("mensagem de erro")
    
}
