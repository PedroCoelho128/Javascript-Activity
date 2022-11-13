function calcular(){
    reajuste = document.getElementById('reajuste').value
    salAtual = document.getElementById('salario').value
    salFinal = ((reajuste/100)+1)*salAtual
    document.getElementById('resultado').innerText = "O seu salario com reajuste é de R$" + salFinal.toFixed(2)
}