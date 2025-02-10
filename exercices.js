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

