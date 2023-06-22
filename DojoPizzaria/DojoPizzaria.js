function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza

}
var p1=pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
var p2=pizzaOven("hand tossed", "marinara", ["mozzarella"], ["mushrooms", "olives", "onions"])
var p3=pizzaOven("thin crust", "pesto", ["cotija"], ["meatballs", "tomatoes"])
var p4=pizzaOven("stuffed crust", "buffalo", ["cheddar", "mozzarella"], ["chicken","bacon"])

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)

