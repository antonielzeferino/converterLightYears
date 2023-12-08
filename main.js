let speed = prompt(`Saudações viajante qual a velocidade em anos luz que deseja converter ?`)
let measureType = prompt(`Para qual unidade de medida deseja converter ? \n parsec -> pc\n unidade astronomica -> au\n quilometro -> km`)
let speedValue = 0
let unitOfMeasure = ``

switch (measureType) {
    case "pc":
        speedValue = (speed * 0.306601) 
        unitOfMeasure = `parsec`
        break;
    case "au":
        speedValue = (speed * 63241.1)
        unitOfMeasure = `unidade atronomica`
        break;
    case "km": 
        speedValue = (speed * 9.5 * Math.pow(10, 12))
        unitOfMeasure = `quilometros`
        break;
    default:
        alert(`unidade não identificada: conversão fora de escopo `)
        break;
}
alert(`distancia em anos luz: ${speed}\ndistancia em ${unitOfMeasure}: ${speedValue}`)