/**
 *
 * 📚 Tipos genericos
 *
 * Los **tipos genericos** nos permiten *parametrizar* nuestros tipos de manera similar a lo
 * que hacemos con las funciones.
 *
 **/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrappedValue1(value: any): { value: any } {
  return { value };
}
wrappedValue1('helloWorld'); // => { value: 'helloWorld' };
wrappedValue1(1); // => { value: 1 };
wrappedValue1({ foo: 'bar' }); // => { value: { foo: 'bar' } };

/**
 * En el ejemplo anterior, tuvimos que recurrir al tipo `any` para poder tipar la función
 * `wrappedValue`. Nosotros queremos que el método pueda recibir cualquier tipo.
 *
 * Aquí es donde hacen su entrada los tipos genericos.
 */

function wrappedValue2<T>(value: T): { value: T } {
  return { value };
}
wrappedValue2<string>('helloWorld'); // 🔍 T = string
wrappedValue2(1); // 🔍 T = number
wrappedValue2({ foo: '`bar' }); // 🔍 T = { foo: 'bar' }

/**
 * En el primer ejemplo, decimos explicitamente que `wrappedValue2` va a trabajar con el
 * tipo "string".
 *
 * Pero, esto mejora aún más, en la definición decimos que la función toma un valor de tipo "T".
 * Recordemos que TypeScript es muy inteligente, y puede _inferir_ varios de nuestros tipos.
 *
 * Al pasar un valor como paramétro, TypeScript es capas de inferir el tipo del mismo y
 * autocompletarlo por nosotros.
 */

interface Shape {
  draw(): void;
}
interface Circle extends Shape {
  radius: number;
}

/**
 * Evitemos caer en la tentación de tipar todo con Genericos. En el ejemplo de abajo
 * la función `drawShapes1` recae en el uso de genericos para expresar que "S" hace
 * referencia a un tipo del cual no conozco su tipo pero que extiende del tipo "Shape".
 *
 * Si bien, la idea detras no es mala, si es una acción innecesaria. Porque lo que en verdad
 * queremos decir es que `drawShapes` debería tomar como parametros un array de elementos
 * tipo "Shape".
 */
function drawShapes1<S extends Shape>(shapes: S[]): void {
  shapes.forEach(s => s.draw());
}
function drawShapes2(shapes: Shape[]): void {
  shapes.forEach(s => s.draw());
}

// 💡 ¿Y ese "extends"? Tranqui, ahora vamos a hablar de esa keyword y explicar para que nos sirve.
