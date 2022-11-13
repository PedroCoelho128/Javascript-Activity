meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let temp = []
somatemp = 0
for (let i = 0; i < 12; i++){
    temp[i]= prompt('Digite a temperatura media em ' + meses[i])
    somatemp += parseFloat(temp[i])
}

media = somatemp/12
document.write("A media anual é de: " + media + "ºC")
document.write("<br>")
document.write("Temperaturas Acima da Média Anual:")
document.write("<br>")

for (let i = 0; i < 12; i++){
    if (temp[i]>media){
        document.write(i + '- Mês: ' + meses[i] + ' Temperatura média: ' + temp[i] + "ºC" )
        document.write("<br>")
    }
}