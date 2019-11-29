/**
 *
 * 📚 Guardas de tipos
 *
 * Son condiciones o chequeos dinámicos que "achican" (narrow) el posible tipo de una variable.
 * Algunos ejemplos son: instanceOf, typeOf, in, etc.
 *
 * Tambien es posible usar string literal types o crear nuestros propios type guards.
 *
 **/

const port = process.env.PORT;

// console.log(port.toUpperCase()); //  🚨 Object is possibly 'undefined'.
if (port) {
  port.toUpperCase(); // value: string
}

/**
 *
 * 📚 typeof keyword
 *
 * sdfsdfd
 *
 * Sintaxis: typeof v === <typename>
 *   donde <typename> = "number", "string", "boolean", or "symbol"
 *
 **/

function toUpperCase(value: number | string): string {
  // console.log(value.toUpperCase()); // 🚨 'toUpperCase' doesn't exist on type 'string | number'
  if (typeof value === 'string') {
    return value.toUpperCase(); // value: string
  }
  return String(value).toUpperCase(); // value: number
}

/**
 *
 * 📚 instanceof keyword
 *
 * sdfsdfd
 *
 **/
// rwe

/**
 *
 * 📚 in keyword
 *
 * sdfsdfd
 *
 **/
// werwe
