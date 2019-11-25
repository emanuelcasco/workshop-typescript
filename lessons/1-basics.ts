/**
 *
 * 📚 Type inference
 *
 * TypeScript es capaz de inferir el tipo de nuestras variables al *asignarles* un valor.
 *
 * En el siguiente ejemplo vemos como, habiendo asignado a la variable `welcome` el valor
 * de tipo texto, no es posible asignarle posteriormente un valor de tipo numerico.
 *
 **/
let welcome = 'hello, wolox';

welcome = 'bye, wolox';
// welcome = 1189; // 🚨 ERROR: 'Type '1189' is not assignable to type 'string''

/**
 *
 * 📚 Initialized constants
 *
 * Al definir una constante, lo que hacemos es decirle a TypeScript que el valor que utilizamos
 * es a su vez el tipo de la constante.
 *
 * En los siguientes ejemplos, las variables `constantString` y `constantNumber` tienen como
 * tipo el valor "hello, wolox"  y 1 respectivamente.
 *
 **/
const constantString = 'hello, wolox';
const constantNumber = 1_000_000; // 💡 Numeric Separators!

const constantOperatedNumber = 1024 * 1024; // ⚠️ Ojo con las operaciones algebraicas

/**
 *
 * 📚 Not initialized variables
 *
 * Si vemos el tipo de `fatherInitializeMe` en el editor podemos observar que al
 * no inicializarlo TS le asigna el tipo **any**.
 *
 * *Esto quiere decir que este tipo puede ser cualquier cosa*.
 *
 * En nuestro día a día en TypeScript vamos a intentar evitar introducir variables
 * de tipo "any" a nuestras aplicaciones, ya que hacen que nuestro tipado sea debil.
 *
 **/
let fatherInitializeMe;
fatherInitializeMe = 1189;
fatherInitializeMe = 'wolox'; // ⚠️ Any

/**
 *
 * 📚 Basic type annotations
 *
 * Podemos decirle a TypeScript, explicitamente, que tipo queremos para nuestras variables.
 *
 * Esto se logra por medio de Type Annotations, los tipos básicos de TypeScript, son los
 * mismos que los que tiene JavaScript.
 *
 * La sintaxis es la siguiente: `(var|let|const) <variable>: <type>`
 *
 **/
let num: number;
let str: string;
let bool: boolean;

// num = '123'; // 🚨 ERROR Type ''123'' is not assignable to type 'number'.
num = 123; // ✅
num = 123.456; // ✅

// str = 123; // 🚨 ERROR Type '123' is not assignable to type 'string'.
str = '123'; // ✅

// bool = 'false'; // 🚨 ERROR Type ''false'' is not assignable to type 'boolean'.
bool = true; // ✅
bool = false; // ✅

/**
 *
 * 📚 Arrays
 *
 * La sintaxis para declarar un array es bastante sencilla. Simplemente agregamos
 * un `'[]'` luego del tipo o usamos `Array<T>`, donde 'T' es el tipo que necesitamos.
 *
 * Por convención, suele usarse la primer alternativa ya que es más verbosa, la
 * segunda opción introduce otro concepto llamado **Utility types**, que veremos más
 * adelante.
 *
 **/
const array1: number[] = []; // 👍 prefer this option
const array2: Array<number> = []; // 👎 avoid

array1.push(1);
// array2.push('a'); // 🚨 ERROR: Argument of type 'a' is not assignable to parameter of type 'number'.

/**
 *
 * 📚 Tuplas
 *
 * Las tuplas con arrays de largo fijo cuyos tipos son conocidos y no son necesariamente
 * iguales. Por ejemplo:para representar una dirección puedo tener una tupla donde el
 * primer elemento es el nombre de la calle y el segundo es el número.
 *
 **/
let directionTuple: [string, number] = ['Guemes', 4673];

directionTuple = ['Malabia', 2300];
// directionTuple = [1, 2, 3]; // 🚨 ERROR: Type 'number' is not assignable to type 'string'.

// ⚠️ Debemos definir su tipo explicitamente.
let personalInfoTuple = ["Jhon O'Connor", 25, true];
personalInfoTuple = [23, false, 'Mixed!']; // 👈 ¡Definan sus tuplas!

/**
 *
 * 📚 Enums
 *
 * Es una manera de organizar un conjunto de datos relacionados. Otros lenguajes, cuentan con
 * este tipo de datos en su sintaxis pero no JavaScript.
 *
 * TypeScript introduce los enums en JavaScript 💙!
 *
 **/

// Numeric: valores numericos.
enum ImageType {
  JPEG,
  PNG,
  PDF
}

ImageType.PDF; // => 1;

// String: valores de texto.
enum ImageFormatType {
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  PDF = 'application/pdf'
}

ImageFormatType.JPEG; // => 'image/jpeg';

// Heterogeneous: ambos, numerico y texto.
enum ImageMixType {
  JPEG = 'image/jpeg',
  JPG = 1
}

ImageType.JPEG; // => 1;
ImageFormatType.JPEG; // => 'image/jpeg';

/**
 *
 * 📚 Objetos
 *
 *
 * La estructura del tipo de un objeto es muy similar a los valores del mismo.
 * Se usa la misma estructura: `key: type`, con la diferencia de que las propiedades
 * suelen separarse, por convensión, con un ';' para poder diferenciarlas del valor.
 *
 * En el siguiente ejemplo, definimos el tipo de un objeto que representa una dirección,
 * con las siguientes propiedades: street (string) y number (number).
 *
 **/
let directionObject: { street: string; number: number };

// directionObject = { street: 'Calle Falsa' }; // 🚨 Error: Missing 'number'
directionObject = { street: 'Calle Falsa', number: 123 }; // ✅

/**
 * Es posible tanto definir objetos nesteados (uno dentro del otro), propiedades
 * opcionales,
 **/
let order: {
  id: number;
  user: { name: string };
  direction?: string; // 'direction' es opcional
};

// order = {  id: 100, direction: 'Evergreen Avenue' } // 🚨 Error: Missing 'user'.
order = { id: 100, user: { name: 'John' }, direction: 'Evergreen Avenue' }; // ✅
order = { id: 100, user: { name: 'John' } }; // ✅

/**
 *
 * 📚 Type Alias
 *
 * Con ellos puedo definir alias para nuestros tipos. Más adelante los veremos más
 * en detalle.
 *
 * Por ejemplo, creemos un type alias para nuestras ordenes.
 *
 * Observemos como la *definición del tipo no se choca con la variable del mismo nombre*,
 * esto se debe a que los nombres de variables y de tipos viven es espacios diferentes,
 * por lo que no pueden colisionar.
 *
 **/

type order = {
  id: number;
  user: { name: string };
  direction?: string;
};

const newOrder: order = order;

/**
 * ☝️ Es importante mencionar que el tipado en TypeScript es **Tipado estructural** y
 * no nominal. Volvamos a la presentación para conversar sobre esto ⏪.
 **/

/**
 *
 * 📚 Union
 *
 * _UNION = OR_ (Debe satisfacer al menos uno de los tipos)
 *
 * Es posible crear nuevos tipos de datos a partir de la union de otros tipos diferentes.
 * Por ejemplo:
 *
 **/

const { API_URL } = process.env;
// API_URL.toUpperCase(); // 🚨 ERROR: Object is possibly 'undefined'.

type Dog = { name: string; owner: string };
type Cat = { name: string; slave: string };

let petOr: Dog | Cat;

petOr = { name: 'dog', owner: 'Jhon' };
petOr = { name: 'cat', slave: 'Jhon' };
petOr = { name: 'cat', owner: 'Jhon', slave: 'Jhon' };

/**
 *
 * 📚 Intersection
 *
 * _INTERSECTION = AND_ (Debe satisfacer ambos tipos)
 *
 **/

let petAnd: Dog & Cat;

// petAnd = { name: 'dog', owner: 'Jhon' }; // 🚨 ERROR: slave not defined
// petAnd = { name: 'cat', slave: 'Jhon' }; // 🚨 ERROR: owner not defined
petAnd = { name: 'cat', slave: 'Jhon', owner: 'Jhon' }; // ✅ OK
