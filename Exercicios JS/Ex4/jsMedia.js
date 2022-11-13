const Alunos = prompt('Digite o número de alunos: ')
let soma = 0
notas = []
for(let i = 1; i <= Alunos; i++){
    notas[i] = prompt("Digite a nota do aluno: " + i)
    soma += parseFloat(notas[i])
}

media = soma/Alunos
document.write('A media da classe é: ' + media)