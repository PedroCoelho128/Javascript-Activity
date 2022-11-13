const number = prompt('Digite um numero')
let Fatorial = 1
for(let i = 1; i <= number; i++){
    Fatorial = Fatorial * i
}
document.write( number + "! = "+ Fatorial)