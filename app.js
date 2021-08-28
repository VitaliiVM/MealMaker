const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizer) {
        this._courses.appetizers = appetizer;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is: ${appetizer.name}, ${main.name}, ${dessert.name},
         The price is $${totalPrice.toFixed(2)}`;
    }
}

menu.addDishToCourse('appetizers', 'Salad', 4.25);
menu.addDishToCourse('appetizers', 'Fruits', 10.20);
menu.addDishToCourse('appetizers', 'Souse', 2.15);

menu.addDishToCourse('mains', 'Potato', 4.25);
menu.addDishToCourse('mains', 'Meat', 10.20);
menu.addDishToCourse('mains', 'Soup', 2.15);

menu.addDishToCourse('desserts', 'Napoleon', 4.25);
menu.addDishToCourse('desserts', 'Icecream', 10.20);
menu.addDishToCourse('desserts', 'Coffe', 2.15);

let meal = menu.generateRandomMeal();
console.log(meal);
