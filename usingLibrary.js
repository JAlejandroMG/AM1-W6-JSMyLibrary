import library from './library.js'



/* ------------------------- ARRAY ITERATION METHODS ------------------------ */


/* -------- Para una mejor visualización de los comentarios en VSCode ------- */
/* --------- puede usar la extensión "Better Comments" de Aaron Bond -------- */


/* -------- Para mejorarla aún más puede seguir los siguientes pasos: ------- */
/* -------------------------- teclear Shift+Ctrl+P -------------------------- */
/* ------------ buscar "Open Workspace Settings" y teclear Enter ------------ */
/* ---------------- buscar "Better Comments" y teclear Enter ---------------- */
/* -------- ir al enlace "Edit in settings.JSON" en la parte inferior ------- */
/* --------------------- buscar la línea "tag": "todo", --------------------- */
/* ------------------------ cambiarla por "tag": "@", ----------------------- */
/* ----------------------- guardar los cambios y salir ---------------------- */



// ! contains()
// * mycontains Method simulating contains() from underscoresjs.org

// @ ***** V1 *****
// @ En esta versión, usando un callback, el usuario desarrolla la función que en primera instancia, al llamar al método, envia el valor a ser buscado dentro de la lista (arreglo) para, posteriormente, recibir el valor true si fue encontrado. El uso de index es opcional
/* const numbers = [1, 2, 3, 4, 5];
const value = 3;
const index = 0;

const isPresent = numbers.mycontains1((number) => {
  return (number === value);
}, index);

console.log(isPresent); */

// @ ***** V2 *****
// @ En esta versión no se usa un callback ya que la documentación establece específicamente la función que se va a aplicar a cada elemento y el resultado del método, por lo que el usuario solamente requiere enviar como argumento el valor contra el que compararán dichos elementos para que, en caso de que haya igualdad en una de dichas comparaciones, se reciba posteriormente como resultado el valor true. El uso de index es opcional
/* const numbers = [1, 2, 3, 4, 5];
const value = 2;
const index = 2;

const isPresent = numbers.mycontains2(value, index);

console.log(isPresent); */



// ! filter()
// * myfilter Method simulating filter()

// @ El uso de index es opcional
/* const ages = [5, 8, 10, 34, 2, 56];
const index = 0;

const children = ages.myfilter((age) => {
  return age < 18;
}, index);

console.log(children); */



// ! find()
// * myfind Method simulating find()

// @ El uso de index es opcional
/* const ages = [1, 3, 5, 7, 9];
const ageOlderThan = 4;
const index = 0;

const findAge = ages.myfind( (age) => {
  return age > ageOlderThan;
});

console.log(findAge); */



// ! findIndex()
// * myfindIndex Method simulating findIndex()

// @ El uso de index es opcional
/* const ages = [1, 3, 5, 2, 9];
const ageOlderThan = 3;
const index = 3;

const findAgeIndex = ages.myfindIndex((age) => {
  return age > ageOlderThan;
}, index);

console.log(findAgeIndex); */



// ! forEach()
// * myforEach Method simulating forEach()

// @ El uso de index es opcional
/* const numbers = [1, 2, 3, 4, 5];
const index = 2;

const results = numbers.myforEach((number) => {
  console.log(number * 2);
}, index) */



// ! map()
// * mymap Method simulating map()

// @ El uso de index es opcional
/* const ages = [1, 3, 4, 5, 7];
const index = 2;

const doubleAge = ages.mymap((age) => {
  return age * 2;
}, index);

console.log(doubleAge); */



// ! pluck()
// * mypluck Method simulating pluck() from underscoresjs.org

const stooges = [
  {
    name: 'moe',
    age: 40
  },
  {
    name: 'larry',
    age: 50
  },
  {
    name: 'curly',
    age: 60
  }
];

// @ ***** V1 *****
// @ En esta versión, usando un callback, el usuario desarrolla la función que en primera instancia, al llamar al método, envia la propiedad del objeto de cada elemento, del cual quiere obtener el valor para incluir en el nuevo arreglo y, posteriormente, recibe el nuevo arreglo
/* const names = stooges.mypluck1((stooge) => {
  return stooge.name;
});

console.log(names); */

// @ ***** V2 ***** PENDIENTE
// @ En esta versión no se usa un callback ya que la documentación establece específicamente la función que se va a aplicar a cada elemento y el resultado del método, por lo que el usuario solamente requiere enviar como argumento la propiedad del objeto de cada elemento, del cual quiere obtener el valor para incluir en el nuevo arreglo para posteriormente recibir el nuevo arreglo
/* const property = 'name';

const names = stooges.mypluck2(property);

console.log(names); */



// ! without()
// * mywithout Method simulating without() from underscoresjs.org

// @ ***** V1 *****
// @ En esta versión, usando un callback, el usuario desarrolla la función que en primera instancia, al llamar al método, envia la condición para incluir o no un elemento en el nuevo arreglo y, posteriormente, recibe el nuevo arreglo
/* const numbers = [1, 2, 1, 0, 3, 1, 4];

const strippingValues = [0, 1];

const newArray = numbers.mywithout1((number) => {
  let sum = 0;

  strippingValues.myforEach((strippingValue) => {
    if(number === strippingValue) {
      sum++
    }
    return sum;
  });

  return sum === 0;
});

console.log(newArray); */

// @ ***** V2 *****
// @ En esta versión, usando un callback, el usuario desarrolla la función que en primera instancia, al llamar al método, envia el arreglo de los elementos que no se van a incluir en el nuevo arreglo y, posteriormente, recibe el nuevo arreglo
/* const numbers = [1, 2, 1, 0, 3, 1, 4];

const strippingValues = [0, 1];

const newArray = numbers.mywithout2((number) => {
  return strippingValues;
});

console.log(newArray); */

// @ ***** V3 *****
// @ En esta versión no se usa un callback ya que la documentación establece específicamente la función que se va a aplicar a cada elemento y el resultado del método, por lo que el usuario solamente requiere enviar como argumentos los elementos en sí que serán extraidos, para posteriormente recibir el nuevo arreglo
/* const array = [1, 2, 1, 0, 3, 1, 4];

const newArray = array.mywithout3(0, 1);

console.log(newArray); */
