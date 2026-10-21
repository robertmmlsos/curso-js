//Cadenas = conjunto de caracteres
//1 solo caracter = CHAR

//Existen 3 formas para crear cadenas JS:
const tradicional = "Hola soy un texto"
const simples = 'un gusto conocerte'
const mensaje = `un gusto conocerte` //Backticks

// Backticks premite multilinea + inyeccion
const nombre = 'Jhon'
const carrera = 'programador'

const historia = `
Esta es la historia de ${nombre}
de un ${carrera}
que solo queria Vibecodear
`

//console.log(historia)


//Propiedades
const longitud = carrera.length //Total de caracteres
//console.log(longitud)

//Esta constante NO es un arreglo
const amigos = "Luis, Miguel, Juan, Jose, Raul, Ernesto"

//Metodos
console.log('concat:', carrera.concat(nombre)) // concatenar (unir)
console.log('repeat:', carrera.repeat(3)) // repetir
console.log('replace:', carrera.replace('a', '@')) //reemplazar primero
console.log('uppercase:', carrera.toUpperCase())// mayuscula
console.log('lowercase:', carrera.toLowerCase())// ninuscula
console.log('replace all:', carrera.replaceAll('a', '@')) // reemplazar todos
console.log('split:', amigos.split('m')) // Devuelve un array
console.log('trim:', carrera.trim('m')) //quita espacios vacios extremos

//Extraer los 3 primeros caracteres
console.log('3 primros:', carrera.substring(0, 3)) // 0 = index (inicio ), 3 = total

// Extraer "grama" de programador
console.log('caracteres internos:', carrera.substring(3, 8))




