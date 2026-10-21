//Estructuras = OBJETOS
//Desestructuras = ABRIR OBJETOS
const persona = {
  apellidos : "Isidro Mancha",
  nombres : "Robert Dany",
  edad : 22,
  skills: ["PHP", "Java", "Javascript", "SQL", "Python"]
}


//Guardar apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const nombres = persona.nombres
const edad = persona.edad
*/

//Desestructurar es separar datos provinientes de un objeto
//NOTA: No es necesario recuperar toda la coleccion
//NOTA: La variable deben coinciden con la claves
const {nombres,  skills } = persona

console.log(nombres, skills)
