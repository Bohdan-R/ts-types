/*
 * Функции
 *  - Типизация параметров и возвращаемого значения
 *  - Необязательные параметры
 *  - rest-параметры
 *  - Функция без явного возврата: тип void
 *  - Типизация подписи функции
 *    - черерз тип
 *    - через интерфейс
 *  - Типизация методов объекта в интерфейсе
 *    - ключ: () => тип;
 *    - ключ() : тип;
 *  - Необязательные методы в интерфейсе
 */

interface IAddFn {
    (a: number, b: number): number;
}

type AddFn = (a: number, b: number) => number

/* const addExspression = function (x?: number, y: number): number {
    return x + y
} */
const addExspression: AddFn = function (x, y) {
    return x + y
}

/* const addArrow = (x: number, y: number): number => {
    return x + y
} */
const addArrow: AddFn = (x, y) => {
    return x + y
}

addExspression(2,3)
addArrow(2, 3)


// ==========================================================================
type Fn = (a: number, b: number, c: number, ...restParams: number[]) => number

/* const fn: Fn = (a: number, b: number, c: number, ...restParams: number[]) => {
    return 5;
} */
const fn: Fn = (a, b, c, ...restParams) => {
    return 5;
}
fn(1, 5, 4, 2, 5, 64, 7)


type LogFn = (m:string) => number | void

const log: LogFn = (message) => {

}

// =============================================================================
enum PizzaSize {
    Small = 's',
    Medium = 'm',
    Large = 'l',
}

interface IPizza {
    size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
    toppings: string[];
    /* logSize?: () => void; */
    logSize?(): void;
    getSize(): string;
    addTopping(topping: string): void 
}

const pizza: IPizza = {
  size: PizzaSize.Small,
  toppings: ["sause", "mushrooms"],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(topping) {
    this.toppings.push(topping);
  },
};

console.log(addExspression,);

export {};
