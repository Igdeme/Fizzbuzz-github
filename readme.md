# DOCUMENTACIÓNDE FIZZBUZZ

## 1.-PROCESO DE INSTALACIÓN

Para poder realizar la instalación de los test de jest en nuestro proyecto, primero hay que instalaren nuestro sistema [NodeJS](https://nodejs.org/es/), que nos servirá para utilizar el el gestor de librerías NPM e instalar [Jest](https://www.npmjs.com/package/jest)

Una vez instalado NodeJS, ya podemos instalar Jest en nuestro proyecto fizzbuzz, ejecutando en consola primero el comando `npm init` y después `npm i jest` (esto instalará la librería de jest que se encuentra en el enlace de arriba)

Por último, necesitamos ejecutar `npx jest --init` para crear nuestro proyecto de jest.

## 2.-CÓDIGO DEL JS A TESTEAR

El proyecto que vamos a testear es un código sencillo:

```js
function fizzbuzz(num){
    if (num%2==0 && num%3!=0){
        return "fizz";
    } else
    if (num%3==0 && num%2!=0){
        return "buzz";
    } else
    if (num%2==0 && num%3==0){
        return "fizzbuzz";
    } else {
        return "Nope"
    }
}

module.exports = fizzbuzz;
```

Simplemente comprueba que si el número es par, responda `fizz`, si el número es divisor de 3 responda `buzz` y si es ambas cosas responda `fizzbuzz`. Por último, en el caso de no ser ninguna de estas opciones, responderá `Nope`.

## 3.-TESTS Y ALGUNOS RESULTADOS

Ya que necesitamos probar sobre este js, lo importaremos en nuestro código para realizar los test con:

```js
const  fizzbuzz = require("./fizzbuzz");
```

Una vez hecho esto, ya podemos probar algún test como por ejemplo 

```js
    test('Should print fizz if they recieve a multiple of 2 and 3', () => {
        const expected = "fizzbuzz";
        const result = fizzbuzz(12);
        expect(expected).toBe(result);
    });
```

Este test comprueba que la operación para retornar `fizzbuzz` funcione correctamente.

Normalmente, podríamos ejecutar `npm jest` para realizar el test en la consola, pero en `package.json` podemos configurar algunos scripts para nuestra comodidad.


```json
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll"
  },
```

`test:watch` nos serviría para que haga los test cada vez que hagamos algún cambio, pero ahora mismo probaremos simplemente `npm test` que nos dará este resultado.

```terminal
> fizzbuzz@1.0.0 test
> jest

 PASS  ./fizzbuzz.test.js
  fizzbuzz
    √ Should print fizz if they recieve a multiple of 2 (2 ms)
    √ Should print fizz if they recieve a multiple of 3 (1 ms)
    √ Should print fizz if they recieve a multiple of 2 and 3
    √ Should print Nope if they recieve any other number

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.03 s
Ran all test suites.
```

Como podemos ver, el test de `fizzbuzz` aparece correctamente, al igual que el resto de tests en el código.