/**
 *
 * 📚 Interfaces
 *
 * Una **interface** es una *estructura que define un contrato dentro de nuestra aplicación*.
 *
 * La definición de una interface es bastante similar a un type alias. Veamos en el siguiente
 * ejemplo como definimos la interface `Employee`.
 *
 **/

interface Employee {
  name: string;
  role: string;
  seniority: 'junior' | 'semi-senior' | 'senior';
}

const employee1: Employee = { name: 'Juano', role: 'QA Tester', seniority: 'senior' };

// 🚨 Property 'role' is missing in type
// const employee2: Employee = { name: 'maxi', seniority: 'senior' };

// 🚨 Type '"trianee"' is not assignable to junior|semi-senior|senior
// const employee3: Employee = { name: 'lau', role: 'Developer', seniority: 'trianee'};

/**
 *
 * 📚 Readonly properties
 *
 * TypeScript permite marcar propiedades como "read only". esto significa que, una vez que
 * se le asigna un valor a una propiedad, esta no puede cambiarse.
 *
 * Pero cuidado, porque esto solo aplica al asignarle un valor a esta propiedad, no al asignar
 * valor al objeto entero.
 *
 **/
interface Citizen {
  name: string;
  readonly nationalDocumentId: number;
}

const kane: Citizen = { nationalDocumentId: 110555444, name: 'James Bond' };

kane.name = 'Steve Smith';
// kane.nationalDocumentId = 220555444; // 🚨 'nationalDocumentId' is a read-only property.

let carl: Citizen;
carl = { name: 'Carl Sanchez', nationalDocumentId: 333666999 };
carl = { name: 'Carl Sanchez', nationalDocumentId: 222666999 };
// ⚠️ Al redefinir el objeto completo, el read only no aplica

/**
 *
 * 📚 Extend interfaces
 *
 * Las interfases pueden extender una o más interfaces, de manera similar a como lo hacen
 * las clases. Esto nos permite "heredar" o copiar miembros de las demás interfaces para
 * reutilizar sus componentes.
 *
 * Esto se logra por medio de la keyword `extends`, como vemos en el ejemplo de más abajo.
 * En el mismo, la interface `Woloxer` extiende de `Citizen` y `Employee`.
 *
 **/

// 💡 Extiende desde 2 interfaces
interface Woloxer extends Citizen, Employee {
  readonly buddy?: Woloxer;
}

const woloxer1: Woloxer = {
  name: 'Juan',
  nationalDocumentId: 444666999,
  role: 'Team manager',
  seniority: 'senior'
};

const woloxer2: Woloxer = {
  name: 'Ignacio',
  nationalDocumentId: 444666999,
  role: 'Developer',
  seniority: 'semi-senior',
  buddy: woloxer1
};

/**
 * También puedo deficir a un Woloxer con un Type Alias, utilizando el operador
 * de *UNION (&)* que vimos anteriormente
 **/

type TypeWoloxer = Citizen & Employee & { buddy?: TypeWoloxer };

const woloxer3: TypeWoloxer = {
  name: 'Ignacio',
  nationalDocumentId: 444666999,
  role: 'Developer',
  seniority: 'semi-senior',
  buddy: woloxer1
};

/**
 *
 * 📚 Declaration merging
 *
 * Las interfaces son entidades abiertas, esto quiere decir que cuando el compilador de
 * TypeSCript encuentra más de una declaración de una misma interface las mergea de manera
 * tal que la definición sea unica.
 *
 * Esto es particularmente útil al trabajar con librerias externas, y ya vamos a ver un
 * ejemplo de cómo usarlo más adelante.
 *
 **/

interface Mix {
  number: number;
}
interface Mix {
  string: string;
}
interface Mix {
  boolean: boolean;
}

let objectMix1: Mix = { number: 1, string: 'Hello, world', boolean: true }; // ✅
// let objectMix2: Mix = { number: 1, string: 'Hello, world' }; // 🚨 Property 'boolean' is missing
