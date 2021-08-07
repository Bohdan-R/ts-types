/*
 * Массивы
 *  - Нотации `тип[]` и `Array<тип>`
 *  - `(тип | тип)[]`
 *  - `readonly` и `ReadonlyArray<тип>`
 *  - Tuple `[тип, тип]`, например массив координат
 */

const temps: readonly number[] = [12, 45, 35, 45, 14, 47,]

/* temps.push(5) */
/* const temps: Array<number> = [12, 45, 35, 45, 14, 47] */
/* const temps: (number | string)[] = [12, 45, 35, 45, 14, 47, 'sdfsdf'] */


const coords: [number, number] = [45.1244, 475.4545]
const rgb: [number,number,number] = [255,45,100]

const arrA: number[] = [1, 2, 3, 4, 5]
const arrB = [...arrA]

console.log(temps,coords, rgb);
export {};
