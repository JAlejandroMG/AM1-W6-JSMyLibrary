const library = {}; // Se inicializa libreria



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
// ? The contains() method returns true if the value is present in the list
// * mycontains Method simulating contains()

// @ ***** V1 *****
// @ En esta versión, usando un callback, se le pide al usuario que desarrolle la función que entregue el valor que será buscado dentro de la list (arreglo) para en caso de ser encontrado se le regrese el valor true. El uso de index es opcional
Array.prototype.mycontains1 = function(callback, index) {
  if(index >= 0) {
    for(let i = index; i < this.length; i++) {
      if(callback(this[i]) === true) {
        return true;
      };
    }
  } else {
      for(let i = 0; i < this.length; i++) {
        if(callback(this[i]) === true) {
          return true;
        };
      };
    }  
};

// @ ***** V2 *****
// @ En esta versión no se usa un callback ya que la documentación establece específicamente la funcionalidad y el resultado del método por lo que el usuario requiere solamente pasar como argumentos el arreglo del cuál se evaluarán sus elementos, y el valor contra el que compararán dichos elementos para que en caso de que haya igualdad en una de dichas comparaciones se le regrese como resultado el valor true. El uso de index es opcional
// @ Se quita al usuario el desarrollo de la función que envía el valor a ser comparado, ya solo requiere enviarlo como argumento al llamar al método como el método contains original
Array.prototype.mycontains2 = function(value, index) {
  if(index >= 0) {
    for(let i = index; i < this.length; i++) {
      if(this[i] === value) {
        return true;
      };
    };
  } else {
      for(let i = 0; i < this.length; i++ ) {
        if(this[i] === value) {
          return true;
        };
      };
    };  
};



// ! filter()
// ? The filter() method creates a new array with array elements that passes a test
// * myfilter Method simulating filter()

// @ El uso de index es opcional
Array.prototype.myfilter = function(callback, index) {
  const newArray = [];

  if(index >= 0) {
    for(let i = index; i < this.length; i++) {
      if(callback(this[i]) === true) {
        newArray.push(this[i]);
      };
    };
  } else {
      for(let i = 0; i < this.length; i++ ) {
        if(callback(this[i]) === true) {
            newArray.push(this[i]);
        };
      };
    }

  return newArray;
};



// ! find()
// ? The find() method returns the value of the first array element that passes a test function
// * myfind Method simulating find()

// @ El uso de index es opcional
Array.prototype.myfind = function(callback, index) {
  if(index >= 0) {
    for(let i = index; i < this.length; i++) {
      if(callback(this[i]) === true) {
        return this[i];
      };
    };
  } else {
      for(let i = 0; i < this.length; i++) {
        if(callback(this[i]) === true) {
          return this[i];
        };
      };
    }
};



// ! findIndex()
// ? The findIndex() method returns the index of the first array element that passes a test function
// * myfindIndex Method simulating findIndex()

// @ El uso de index es opcional
Array.prototype.myfindIndex = function(callback, index) {
  if(index >= 0) {
    for(let i = index; i < this.length; i++) {
      if(callback(this[i]) === true) {
        return i;
      };
    };
  } else {
      for(let i = 0; i < this.length; i++) {
        if(callback(this[i]) === true) {
          return i;
        };
      };
    };
};



// ! forEach()
// ? The forEach() method calls a function (a callback function) once for each array element
// * myforEach Method simulating forEach()

// @ El uso de index es opcional
Array.prototype.myforEach = function(callback, index) {
  if(index >= 0) {
    for(let i = index; i < this.length; i++) {
      callback(this[i]);
    };
  } else {
      for(let i = 0; i < this.length; i++) {
        callback(this[i]);
      };
    };
};



// ! map()
// ? The map() method creates a new array by performing a function on each array element
// ? The map() method does not execute the function for array elements without values
// ? The map() method does not change the original array
// * mymap Method simulating map()

// @ El uso de index es opcional
Array.prototype.mymap = function(callback, index) {
  let newArray = [];

  if(index >= 0) {
    for(let i = index; i < this.length; i++) {
      if(!this[i]) {
        alert('Arreglos con elementos sin valor no son válidos');
        return;
      } else {
          newArray.push(callback(this[i]));
        };
    };
  } else {
      for(let i = 0; i < this.length; i++) {
        if(!this[i]) {
          alert('Arreglos con elementos sin valor no son válidos');
          return;
        } else {
            newArray.push(callback(this[i]));
          };
      };
    };

  return newArray;
};



// ! pluck()
// ? The pluck() method exctracts a list of property values
// * mypluck Method simulating pluck()

// @ ***** V1 *****
// @ En esta versión, usando un callback, se le pide al usuario que desarrolle la función que envie la propiedad del objeto de cada elemento, del cual quiere obtener el valor para incluir en el nuevo arreglo y, posteriormente, recibe el nuevo arreglo
Array.prototype.mypluck1 = function(callback) {
  let newArray = [];

  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  };

  return newArray;
};

// @ ***** V2 ***** PENDIENTE
// @ En esta versión no se usa un callback ya que la documentación establece específicamente la funcionalidad y el resultado del método por lo que el usuario requiere solamente pasar como argumento la propiedad del objeto de cada elemento, del cual quiere obtener el valor para incluir en el nuevo arreglo y, posteriormente, recibe el nuevo arreglo
// @ Se quita al usuario el desarrollo de la función que define la propiedad del objeto de cada elemento, del cual quiere obtener el valor, ya solo requiere enviarlo como argumento al llamar al método
Array.prototype.mypluck2 = function(property) {
  let newArray = [];
alert(typeof(property));
  for(let i = 0; i < this.length; i++) {
    alert(this[i].name);
    newArray.push(this[i].property);
  };

  return newArray;
};



// ! without()
// ? The without() method returns a copy of the array with all instances of the values removed
// * mywithout Method simulating without() from underscoresjs.org

// @ ***** V1 *****
// @ En esta versión, usando un callback, se le pide al usuario que desarrolle la función que entregue la condición para incluir o no un elemento en el nuevo arreglo que le será regresado como resultado
Array.prototype.mywithout1 = function(callback) {
  let newArray = [];

  for(let i = 0; i < this.length; i++) {
    if(callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  };
    
  return newArray;
}

// @ ***** V2 *****
// @ En esta versión, usando un callback, se le pide al usuario que desarrolle la función que entregue el arreglo de los elementos que no se incluirán en el nuevo arreglo que le será regresado como resultado
// @ Se quita al usuario el desarrollo de la función para seleccionar que elementos serán eliminados del arreglo original
Array.prototype.mywithout2 = function(callback) {
  let newArray = [];

  for(let i = 0; i < this.length; i++) {
    let sum = 0;

    for(let j = 0; j < callback(this[i]).length; j++) {
      if(this[i] === callback(this[i])[j]) {
        sum++;
      }
    }
    
    if(sum === 0) {
      newArray.push(this[i]);
    }      
  };
    
  return newArray;
}

// @ ***** V3 *****
// @ En esta versión no se usa un callback ya que la documentación establece específicamente la funcionalidad y el resultado del método por lo que el usuario requiere solamente pasar como argumentos el arreglo de donde se extraerán los elementos, y los elementos en sí que serán extraidos, de manera que se pueda crear un nuevo arreglo que le será regresado como resultado
// @ Se quita al usuario el desarrollo de la función para definir los elementos a ser eliminados como un variable de tipo arreglo, ya solo requiere enviarlos como argumentos al llamar al método
Array.prototype.mywithout3 = function(...rest) {
  let newArray = [];

  for(let i = 0; i < this.length; i++) {
    let sum = 0;

    for(let j = 0; j < rest.length; j++) {
      if(this[i] === rest[j]) {
        sum++;
      }
    };

    if(sum === 0) {
      newArray.push(this[i]);
    };
  };

  return newArray;
};



export default library;
