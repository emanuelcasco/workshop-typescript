/**
 *
 * 📚 Clases
 *
 * JavaScript tradicional utiliza funciones y herencia basada en prototipos para crear
 * componentes reutilizables, todo con un enfoque más bien funcional.
 *
 * Sin embargo, desde ECMAScript 2015 (ES6), se introduce la posibilidad de crear **clases**,
 * con un enfoque orientado a objetos.
 *
 * Como desarrolladores, no estamos limitados a elegir uno u otro enfoque, sino que podemos
 * combinarlos a nuestra conveniencia para crear aplicaciones flexibles y robustas.
 *
 * La sintaxis de una clase en TypeScript no varía mucho a lo que estamos acostumbrados en ES6,
 * por lo que mucho de lo que vamos a ver en esta lección puede parecerles conocido.
 *
 **/
class Enchantment {
  name: string;
  mana: number;

  constructor(_name: string, _mana: number) {
    this.name = _name;
    this.mana = _mana;
  }

  getMana(): number {
    return this.mana;
  }
}

// const bibidi: Enchantment = { power: -1, name: 'bibidi' }; // 🚨 Missing property

const allohomora = new Enchantment('allohomora', 1000); // ✅
allohomora.getMana(); // => 1000

// 💡 Las clases conviven en ambos espacios declarativos, son tanto un tipo como un valor.

/**
 *
 * 📚 Herencia
 *
 * Uno de los patrones fundamentales de la programación orientada a objetos, si bien ya se
 * puede utilizar en JS desde ES6, hagamos un repaso rápido.
 *
 */

class Hex extends Enchantment {
  power: number;
  forbidden: boolean;

  constructor(_name: string, _mana: number, _power: number, _forbidden: boolean) {
    super(_name, _mana);
    this.power = _power;
    this.forbidden = _forbidden;
  }

  getPower(): number {
    return this.power;
  }

  isForbidden(): boolean {
    return this.forbidden;
  }
}

/**
 *
 * 📚 Modificadores public, private, and protected
 *
 * Ahora si empezamos a notar algunas mejoras con respecto a ES6. TypeScript introduce
 * modificadores para las propiedades de nuestras clases.
 *
 * Los modificadores disponibles son los siguientes:
 *
 * - **public** ~> todos (default)
 * - **protected** ~> clase contenedora y subclases
 * - **private** ~> clase contenedora
 *
 * | accessible       | public  | protected  | private  |
 * |------------------|---------|------------|----------|
 * | clase            | ✅      | ✅         | ✅       |
 * | clases hijas     | ✅      | ✅         | ❌       |
 * | instancias       | ✅      | ❌         | ❌       |
 *
 */

class Example {
  public x: number;
  protected y: number;
  private z: number; // eslint-disable-line @typescript-eslint/prefer-readonly
}

// Efectos en las instancias
const foo = new Example();
foo.x; // ✅
// foo.y; // 🚨 ERROR : private
// foo.z; // 🚨 ERROR : protected

// Efectos en las clases hijas
class Child extends Example {
  constructor() {
    super();
    this.x; // ✅
    this.y; // ✅
    // this.z; // 🚨 ERROR: 'z' is private
  }
}

/**
 *
 * 📚 Clases abstractas
 *
 * El modificador `abstract` puede aplicarse tanto sobre la clase misma como a algún miembro.
 *
 * Este modificador significa que el elemento no puede inicializarse directamente, sino que
 * se debe crear alguna clase hija que implemente dicho elemento.
 *
 */

abstract class Contact {
  public name: string;
  abstract phone: number;

  constructor(_name: string) {
    this.name = _name;
  }

  abstract getName(): string;
  abstract setName(_name: string): void;
}

class WorkContact extends Contact {
  // ⚠️ Tenemos que definir `phone`
  public phone: number;

  constructor(_name: string, _phone: number) {
    super(_name);
    this.phone = _phone;
  }

  getPhone(): number {
    return this.phone;
  }
  // ⚠️ Si no definimos `getName` y `setName`, vamos a tener un error
  getName(): string {
    return this.name;
  }
  setName(_name: string): void {
    this.name = _name;
  }
}

/**
 *
 * 📚 Keyword `implements`
 *
 */

// TODO
