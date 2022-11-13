function calcular(){
    quantidade = document.getElementById('quant').value
    if(quantidade<=0){
        alert('Quantidade inválida! Digite novamente.')
    }
    else if(quantidade < 12){
        valorCompra = 1.30 * quantidade
    }
    else if (quantidade >= 12)(
        valorCompra = 1.00 * quantidade
    )
    document.getElementById('resultado').innerText = "O valor total da compra é " + valorCompra.toFixed(2)
}