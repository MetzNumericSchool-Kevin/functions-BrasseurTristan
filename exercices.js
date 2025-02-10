const nom_sorcier = "Archibald 🧙‍♂️";
const manuel_de_fabrication = {
    potion_soin: {
        ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
        temps_de_fabrication: 3, // exprimé en secondes
    },
};
const inventaire = [
    {
        id: "potion_soin", // identifiant unique de la potion
        prix: 10,
        stock: 0,
    },
];


function welcome(name) { return `Salutations Aventurier ! Je me nomme ${name} pour vous servir.` };
alert(`${welcome(nom_sorcier)}`);

function potion_price(id, inventory, quantity = 1) {
    price = inventory.find(o => o.id === id);
    return price.prix * quantity;
}
console.log(potion_price("potion_soin", inventaire, 3));

function potion_creation(id, price = 10, quantity = 1) {
    new_potion = {
        id: id,
        prix: price,
        stock: quantity
    }
    return new_potion;
    //return `Nouvelle potion créée : ${new_potion.id} | prix : ${new_potion.prix} | stock : ${new_potion.stock}`;
}
//console.log(potion_creation("potion_mana", 20, 3));
//console.log(potion_creation("potion_endurance"));

function add_potion(inventory, potion) {
    price = inventory.find(o => o.id === potion.id);
    if (price === undefined) {
        inventory.push(potion);
    } else {
        price.prix = potion.prix;
        price.stock += potion.stock;
    }
    return inventory.sort((a, b) => b.prix - a.prix);
}
add_potion(inventaire, potion_creation("potion_mana", 20, 3))
add_potion(inventaire, potion_creation("potion_mana", 40, 9))

console.log(add_potion(inventaire, potion_creation("potion_endu")))

function search_potion() {
    return inventaire.filter((elm) => elm.stock > 0);
}

function search_empty_stock() {
    return inventaire.filter((elm) => elm.stock == 0);
}
console.log(search_potion());
console.log(search_empty_stock());
console.log(inventaire);