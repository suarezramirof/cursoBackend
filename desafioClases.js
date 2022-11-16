class Persona {
  constructor(nombre, apellido, mascotas, libros) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascotas = mascotas;
    this.libros = libros;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas = this.mascotas.concat(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros = this.libros.concat({ nombre: nombre, autor: autor });
  }

  getBookNames() {
    return this.libros.map((e) => e.nombre);
  }
}

const roberto = new Persona(
  "Roberto",
  "González",
  ["Tweety", "Bob", "Tommy"],
  [
    { nombre: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { nombre: "Guerra y Paz", autor: "Leon Tolstoi" },
  ]
);

console.log("El nombre completo es", roberto.getFullName());

console.log("\n");

console.log(roberto.mascotas);
roberto.addMascota("Nemo");
console.log(roberto.mascotas);
console.log("El número total de mascotas es: " + roberto.countMascotas());

console.log("\n");

console.log(roberto.libros);
roberto.addBook("Veinte mil leguas de viaje submarino", "Julio Verne");
console.log(roberto.libros);
