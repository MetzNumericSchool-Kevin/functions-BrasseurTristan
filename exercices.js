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
    if (inventory.find(o => o.id === potion.id) === undefined) {
        inventory.push(potion);
    } else {
        price = inventory.find(o => o.id === potion.id);
        price.prix = potion.prix;
        price.stock += potion.stock;
    }
    return inventory.sort((a, b) => b.prix - a.prix);
}
add_potion(inventaire, potion_creation("potion_mana", 20, 3))
console.log(add_potion(inventaire, potion_creation("potion_endu")))

