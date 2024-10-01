// input sea un numero o no (queremos que sea un numero)

function probandoInput(parametro){
    if(typeof parametro !== "number"){
        throw new Error("el valor recibido NO es un número!");
    }
}

module.exports = probandoInput;

//expect(drinkOctopus).toThrow(new Error('yuck, octopus flavor'));