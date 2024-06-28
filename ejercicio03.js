//Ejercicio 2: Haciendo uso de bucles, recorrer un array de (5) números  y determinar cuál es el mayor.

const numeros = [58,4,96,125,20];

let mayor = 0; //125

console.log(numeros)
console.log(numeros[3])

for(let i=0; i< numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros [i]
    }
}

console.log(`el número mayor de los siguientes números: ${numeros} es ${mayor}`)