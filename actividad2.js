//Crear un objeto que almacene datos de una mascota
//desestructurar utilizando un minimo de 4 variables
// mostrar en consola. 

const mascota = {
  nombre: "Firulais",
  especie: "Perro",
  edad: 3,
  raza: "Pug",
  vacunado: true
}
const { nombre, especie, edad, raza } = mascota

console.log(nombre, especie, edad, raza)
