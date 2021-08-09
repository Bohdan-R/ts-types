/*
 * Классы
 *  - объявление и типизация свойств
 *  - дефолтные значения свойств
 *  - публичные и приватные свойства и методы
 *  - readonly свойства
 *  - parameter properties +-
 *  - Статические свойства и методы
 *  - Интерфейс класса с implements
 */

interface IParams {
    size: string;
    toppings: string[];
}

interface IPizza {
    size: string;
    addTopings(topping: string): void;
}

class Pizza implements IPizza{
    public size: string;
    private toppings: string[];

    constructor({size, toppings = []}: IParams) {
        this.size = size;
        this.toppings = toppings;
    }

    private validateTopping(topping: string): boolean {
        console.log(topping);
        // валидация
        return true;
    }

    public addTopings(topping: string) {
        this.toppings.push(topping)
    }
}

const pizza: IPizza = new Pizza({size: 'medium', toppings: ['cheese']});

console.log(pizza);

/* const x = pizza.addTopings('qewqwe');

console.log(x); */


export {};
