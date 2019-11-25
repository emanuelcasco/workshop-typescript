/**
 *
 * 📚 Functions
 *
 * Ahora es el turno de hablar de las functiones, estas no son la excepción y también
 * pueden tiparse con TypeScript, de tal manera que tanto sus entradas como su salida
 * tengan un tipo explicitamente definido.
 *
 * Hay varias maneras de escribir la type annotation de una función. En esta sección
 * vamos a hablar de ellas.
 *
 * Empecemos por un ejemplo sencillo:
 *
 **/

// classic
function sayMyNameNamed(name: string): string {
  return `${name} yeah, you are f*#&ing rigth!`;
}

// 💡 También pueden tiparse las funciones anonimas.
// arrow function
const sayMyNameAnonymous = (name: string): string => `${name} yeah, you are f*#&ing rigth!`;

/**
 *
 * 📚 Function types
 *
 * *También es posible definir un tipo que represente a una función*. De esta manera,
 * no es necesario explicitar el tipo de la función en cada argumento ya que TypeScript
 * hace el resto del trabajo inferiendo los tipos.
 *
 * En el siguiente ejemplo, definimos el tipo `NumericIdentity` que representa una función.
 * Esta función recibe un número como argumento y devuelve un número.
 *
 * Notemos como no es necesario volver a explicitar el tipo del argumento "x", ya que TS lo
 * infiere por si mismo gracias a que le aclaramos el tipo de "numericIdentity".
 *
 **/
type NumericIdentity = (x: number) => number;
const numericIdentity: NumericIdentity = x => x;

/**
 *
 * 📚 Type void
 *
 * En muchas ocaciones, implementamos *funciones que no tienen un valor de retorno*, para
 * estos casos contamos con el tipo `void`, que simboliza "nada".
 *
 **/
function logger(text: string): void {
  console.log(text); // No retorna nada!
}

/**
 *
 * 📚 Optional arguments
 *
 * Para especificar argumentos opcionales utilizamos el operador "?", similar a
 * lo que hacemos con los objetos.
 *
 * En caso de que no aclaremos que un argumento es opcional y no lo completemos al
 * invocar la función, TypeScript nos mostrará un error reclamando por el argumento
 * faltante.
 *
 **/

type User = {
  firstName: string;
  lastName?: string;
};

function buildUser1(firstName: string, lastName?: string): User {
  // lastName = 42; // 🚨 Error: Type '42' is not assignable to type 'string'.
  return { firstName, lastName };
}

const sayHelloToMyFriends = (friend1: string, friend2: string): string => `Hello, ${friend1} and ${friend2}`;

// sayHelloToMyFriends('juanito'); // 🚨 Expected 2 arguments, but got 1.
sayHelloToMyFriends('juanito', 'luisito'); // ✅

/**
 *
 * 📚 Default values
 *
 * Especificar valores "default" es igual a como lo hacemos en JavaScript.
 *
 * El problema es que no es posible definir un valor default en el tipo,
 * es necesario hacerlo si o si en la definición de la función.
 *
 **/

type Order = { item: string; value: number };
type buildOrderFn = (item: string, value: number) => Order;
// type buildOrderFn = (item: string, value: number = 99.9) => User;
// 🚨 A parameter initializer only allowed in a function or constructor implementation.

const buildOrder: buildOrderFn = (item, value = 99.9): Order => {
  return { item, value };
};

/**
 *
 * 📚 Rest params
 *
 * Para poder utilizar rest params en TS es necesario definir el tipo como un array.
 *
 * Por ejemplo, la función `reduceSum` toma una cantidad n no definida de elementos
 * y realiza la sumatoria de todos ellos.
 *
 * Ya que los argumentos de una función en JavaScript pueden expresarse también como un
 * array, podemos usar el spread operator para explicitar lo ya mencionado.
 *
 **/
const reduceSum = (...values: number[]): number => {
  return values.reduce((sum, value) => sum + value, 0);
};

/**
 *
 * 📚 Recursive functions
 *
 * Una función recursiva es aquella que se llama a sí misma, hasta que cierta condición
 *
 * En el siguiente ejemplo, analizamos la función `recursiveSum`, la cuál toma un número
 * n indeterminado de argumentos de tipo numerico y devuelve su sumatoria.
 *
 **/
const recursiveSum = (...values: number[]): number => {
  const [head, ...tail] = values;
  return tail.length > 0 ? head + recursiveSum(...tail) : head;
};

/**
 *
 * 📚 Deconstructing
 *
 * Es posible pasar solo algunas propiedades de un tipo como argumento en una función.
 * En el ejemplo de abajo, tenemos la función `showName` que solo necesita la propiedad
 * "firstName" del usuario.
 *
 * Como esa propiedad, ya esta presente dentro del tipo "User", podemos tipar:
 * `({ firstName }: User): string`.
 *
 **/

// 👆 Recuerden el type User = { firstName: string; lastName?: string };

const showName = ({ firstName }: User): string => `My name is ${firstName}`;

const myUser: User = { firstName: 'john', lastName: 'doe' };

showName({ firstName: 'zaraza' }); // => "My name is john"
showName(myUser); // => "My name is john"

/**
 *
 * 📚 Usar funciones como parametros
 *
 * En JavaScript las funciones son objetos de primera clase, entre otras cosas
 * esto quiere decir que pueden ser pasadas como argumento para otras funciones.
 *
 * Pero, ¿cómo notamos esto en TypeScript? ¿Cómo tipar una función que recibe otra
 * función como argumento? 🤯
 *
 **/
function presentUser(presenter: Function, user: User): void {
  console.log(presenter(user));
}

presentUser(() => {}, myUser); // => Print: undefined
presentUser(showName, myUser); // => Print: "My name is ema"

/**
 * Esto funciona, pero nosotros no solo queremos que la función tome una función.
 * Queremos que tome una función que reciba un usuario como argumento y su retorno
 * sea de tipo void (no retorne nada).
 **/
const presentUserNarrowed = (presenter: (user: User) => string, user: User): void => {
  return console.log(presenter(user));
};

// presentUserNarrowed(() => {}, user); // 🚨 Error: Argument is not assignable
presentUserNarrowed(showName, myUser); // ✅ => Print: "My role is dev"

/**
 *
 * 📚 Function Overloading
 *
 * TypeScript introduce a la sintaxis de JavaScript el concepto de **function overloading**.
 * Basicamente, consiste en tener multiples definiciones de la misma función con variaciones
 * en los parametros y/o valor de retorno. Sin embargo, el número de parametros debe ser el
 * mismo.
 *
 * Para nuestro ejemplo, creamos el tipo `AddressInfo`, que cuenta con un arreglo de códigos
 * postales y el pais. Además, vamos a instanciar el valor "data" de tipo "AddressInfo".
 *
 **/
type AddressInfo = {
  postalCodes: string[];
  country: string;
};

const addressInfo: AddressInfo = {
  postalCodes: ['123', '422'],
  country: 'CO'
};

/**
 * Ahora, necesitamos crear una función que tome "addressInfo" y nos devuelve información
 * en base a la key que le pasemos. En caso de pasarle "postalCodes" debe retornarnos el
 * array correspondiente, y lo mismo con el país. Llamaremos a esta función`getAddressDataByKey`.
 *
 * Cómo tipamos que la key puede ser 'postalCodes' o 'country', y que la salida puede ser un
 * solo string o un array de strings.
 *
 * Un primer acercamiento podría ser pensar en Unions, soluciona el problema de la salida,
 * pero no el de la entradas.
 **/
function getAddressDataByKey(address: AddressInfo, key: 'postalCodes'): number[];
function getAddressDataByKey(address: AddressInfo, key: 'country'): string;
function getAddressDataByKey(address: AddressInfo, key: 'postalCodes' | 'country'): string | number[] {
  if (key === 'postalCodes') {
    return address[key].map(Number);
  }
  if (key === 'country') {
    return address[key].toUpperCase();
  }
  throw new Error(`Expected string or string[], got '${typeof key}'.`);
}

const postalCodesRetrieved: number[] = getAddressDataByKey(addressInfo, 'postalCodes');
const countryCodesRetrieved: string = getAddressDataByKey(addressInfo, 'country');

// const postalCodesRetrieved2: number[] = getAddressDataByKey(addressInfo, 'country');
// 🚨 Error: Type 'string' is not assignable to type 'number[]'

/**
 *
 * 📚 "this" keyword
 *
 * La keyword `this` suele ser un concepto dificil de entender, eso hace que sea importante
 * el poder validar que el tipo del valor que contiene sea el que yo espero en todo momento.
 *
 * Veamos el siguiente ejemplo, tenemos la interface `Presenter`, la cual consistente en un
 * atributo `name` y un método `present` que devuelve un string y toma como parametro opcional
 * una función que modifica un string.
 *
 **/

type Modifier = (v: string) => string;
interface Presenter {
  name: string;
  present: (this: Presenter, modifier?: Modifier) => string;
}

const presenter: Presenter = {
  name: 'jhon',
  present(this: Presenter, modifier?: Modifier) {
    const greeting = `Hello, my name is ${this.name}`;
    return modifier ? modifier(greeting) : greeting;
  }
};
presenter.present(); // Hello, my name is Jhon
presenter.present((value: string) => value.toUpperCase()); // HELLO, MY NAME IS JHON

/**
 * Pero, ¿Qué puede pasar si no explicito el `this` en la función? Vamos a verlo con
 * el siguiente ejemplo y eliminando el `this` en las definiciones dle ejemplo anterior.
 **/

interface Bird {
  type: string;
  sound: string;
  present: (this: Bird, modifier?: Modifier) => string;
}

// const bird: Bird = {
//   type: 'colibri',
//   sound: 'pio',
//   present: presenter.present // 🚨 Error 'Bird' !== 'Presenter'
// };

/**
 * Al no explicitar el tipo de `this` para nuestros metodos, estamos debilitando el tipado
 * de nuestra aplicación.
 **/
