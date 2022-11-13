let mass = prompt("Digite o valor da massa do material: ")
let time = 0

while(mass >= 0.10){
    mass = mass * 0.75
    time = time + 30
}

document.write("A partir de " + time + "s a massa do material começará a se tornar inferior a 0.10")