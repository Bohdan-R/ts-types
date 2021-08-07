/*
 * Примитивные типы
 *  - Объявление типа: number, string, boolean, null и undefined, any и object
 *  - Ошибки:
 *    - присвоение значения другого типа
 *    - переопределение значения
 *  - [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
 *  - Множественные типы с type composition
 */

let age: number = 5;

const name: string = 'mango'

// ANY лучше не использовать
let value: any = 5
value = 'sdafsdfds'

let id: string | number | boolean = 5
id = 'sdfds'


console.log(age, name, value, id);
export {};
