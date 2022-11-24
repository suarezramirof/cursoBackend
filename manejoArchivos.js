const fs = require("fs");

class Contenedor {
  constructor(nombre) {
    this.archivo = nombre;
  }

  async getAll() {
    try {
      const array = JSON.parse(
        await fs.promises.readFile(this.archivo, "utf-8")
      );
      return array;
    } catch {
      return [];
    }
  }

  async getById(id) {
    try {
      const arr = await this.getAll();
      const obj = arr.filter((elem) => elem.id == id);
      return obj.length ? obj[0] : null;
    } catch {
      return null;
    }
  }

  async write(array, objeto, id) {
    try {
      if (objeto) {
        array.push({ ...objeto, id: id });
      }
      await fs.promises.writeFile(this.archivo, JSON.stringify(array, null, 2));
    } catch (error) {
      console.log(error);
    }
  }

  async save(objeto) {
    const array = await this.getAll();
    let idMax = 0;
    for (let obj of array) {
      if (obj.id > idMax) {
        idMax = obj.id;
      }
    }
    await this.write(array, objeto, idMax + 1);
    const retorno = idMax + 1;
    return retorno;
  }

  async deleteById(id) {
    const array = await this.getAll();
    const newArray = array.filter((item) => item.id != id);
    await this.write(newArray);
  }

  async deleteAll() {
    this.write([])
  }
}

const productos = new Contenedor("productos.txt");
const globoTerraqueo = {
  title: "Globo terráqueo",
  price: 200,
  thumbnail: "https://www.fillmurray.com/640/360",
};
const escuadra = {
  title: "Escuadra",
  price: 50,
  thumbnail: "https://www.fillmurray.com/640/358",
};
const calculadora = {
  title: "Calculadora",
  price: 150,
  thumbnail: "https://www.fillmurray.com/638/360"
}

// productos.save(globoTerraqueo).then((res) => console.log(res)) 

// ===> 1

// productos.save(escuadra);

// productos.save(calculadora);

/*
productos.getAll().then((res) => console.log(res)) 

===>

[
  {
    title: 'Globo terráqueo',
    price: 200,
    thumbnail: 'https://www.fillmurray.com/640/360',
    id: 1
  },
  {
    title: 'Escuadra',
    price: 50,
    thumbnail: 'https://www.fillmurray.com/640/358',
    id: 2
  },
  {
    title: 'Calculadora',
    price: 150,
    thumbnail: 'https://www.fillmurray.com/638/360',
    id: 3
  }
]
*/

/*

productos.getById(3).then((res) => console.log(res)) 

===>

{
  title: 'Calculadora',
  price: 150,
  thumbnail: 'https://www.fillmurray.com/638/360',
  id: 3
}
*/

// productos.deleteById(1);

/*
productos.getAll().then((res) => console.log(res)) 

===>

[
  {
    title: 'Escuadra',
    price: 50,
    thumbnail: 'https://www.fillmurray.com/640/358',
    id: 2
  },
  {
    title: 'Calculadora',
    price: 150,
    thumbnail: 'https://www.fillmurray.com/638/360',
    id: 3
  }
]
*/

// productos.getById(1).then((res) => console.log(res)) 

// ===> null

// productos.deleteAll();

// productos.getAll().then((res) => console.log(res)) 

// ===> []