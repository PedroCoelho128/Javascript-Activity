const A = prompt('Digite o valor de A')
const B = prompt('Digite o valor de B')
const C = prompt('Digite o valor de C')
const D = prompt('Digite o valor de D')

AC = parseInt(A) + parseInt(C) 
BD = B * D
if(AC > BD){
    document.write("A+C é maior que B+D")
}
else if(AC < BD){
    document.write("A+C é menor que B+D")
}
else if(AC == BD){
    document.write("A+C é igual B+D")
}