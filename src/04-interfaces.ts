/*
 * Интерфейсы
 *  - Конструкция `interface`
 *  - Необзательные поля с `key?: value`
 *  - readonly поля с `readonly key: value`
 *  - Ошибка при добавлении полей не существующих в интерфейсе
 * - Index signatures: объект произвольных свойств со значениями `[key: тип]: тип`
 * - Наследование интерфейсов с extends
 *  - [interface vs type](https://pawelgrzybek.com/typescript-interface-vs-type/)
 */

interface PluginConfig {
    readonly selector: string;
    perPage: number;
    startUndex?: number;
    draggable: boolean;
}

const config: PluginConfig = {
    selector: "#plugin-1",
    perPage: 2,
    /* startUndex: 0, */
    draggable: false,

}
/* config.selector = 'asdfasd' */

interface Employees {
    [key: string]: number;
}

const employees: Employees = {
    mango: 5,
    kiwi: 30,
    apple: 20,
    kawa: 10,
}

const entries = Object.entries(employees)
let bestEmployeeName = '';
let bestEmployeeSalary = 0;

entries.forEach(([name, value]) => {
    if (value > bestEmployeeSalary) {
        bestEmployeeSalary = value
        bestEmployeeName = name
    }
}
)

console.log(bestEmployeeName);

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square: Square = {
    color: 'red',
    sideLength: 10,
}



console.log(config);

export {};
