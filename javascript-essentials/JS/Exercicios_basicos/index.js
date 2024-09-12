if(2==="2"){
    console.log("Verdadeiro")
}
else{
    console.log("Farso")
}

const frutas = ["banana" , "figo" , "melão" , "manga" , "tomate"]
console.log(frutas)
frutas.push("morango")
frutas.unshift("abacaxi")
console.log(frutas)

frutas.pop()
frutas.shift()
console.log(frutas)

frutas.splice(1,[1],"piruba")
console.log(frutas)

const dlice = frutas.slice(1, 3)
console.log(dlice)

const vegetais = ["alface" , "couve" , "brócolis" , "couve-flor"]
const legumes = ["batata", "cenoura", "nabo", "beterraba", "abobrinha"]

const sacola = frutas.concat(vegetais,legumes)
console.log(sacola)
