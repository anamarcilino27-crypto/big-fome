const prompt = require("prompt-sync")();

let hamburguer;
let cheeseburger;
let cachorroQuente;
let sanduicheNatural;
let refrigerante;
let sucoNatural;
let sobremesa;

let codigo1;
let codigo2;
let codigo3;
let quantidade1;
let quantidade2;
let quantidade3;
let produto1;
let produto2;
let produto3;
let total1;
let total2;
let total3;

hamburguer = 26.99;
cheeseburger = 35.99;
cachorroQuente = 18.50;
sanduicheNatural = 38.99;
refrigerante = 9.50;
sucoNatural = 15.45;
sobremesa = 25.00;

console.log("CARDÁPIO");
console.log("1 - Hambúrguer - R$26,99");
console.log("2 - Cheeseburger - R$35,99");
console.log("3 - Cachorro-quente - R$18,50");
console.log("4 - Sanduíche natural - R$38,99");
console.log("5 - Refrigerante - R$9,50");
console.log("6 - Suco Natural - R$15,45");
console.log("7 - Sobremesa - R$25,00");

codigo1 = Number(prompt("Digite o código do primeiro produto:"));
quantidade1 = Number(prompt("Digite a quantidade:"));

switch(codigo1) {
    case 1:
        produto1 = "Hambúrguer";
        total1 = hamburguer * quantidade1;
        break;
    case 2:
        produto1 = "Cheeseburger";
        total1 = cheeseburger * quantidade1;
        break;
    case 3:
        produto1 = "Cachorro-quente";
        total1 = cachorroQuente * quantidade1;
        break;
    case 4:
        produto1 = "Sanduíche natural";
        total1 = sanduicheNatural * quantidade1;
        break;
    case 5:
        produto1 = "Refrigerante";
        total1 = refrigerante * quantidade1;
        break;
    case 6:
        produto1 = "Suco Natural";
        total1 = sucoNatural * quantidade1;
        break;
    case 7:
        produto1 = "Sobremesa";
        total1 = sobremesa * quantidade1;
        break;
}

let continuar = prompt("Deseja adicionar outro produto? S ou N:");

if(continuar == "S" || continuar == "s") {

    codigo2 = Number(prompt("Digite o código do segundo produto:"));
    quantidade2 = Number(prompt("Digite a quantidade:"));

    switch(codigo2) {
        case 1:
            produto2 = "Hambúrguer";
            total2 = hamburguer * quantidade2;
            break;
        case 2:
            produto2 = "Cheeseburger";
            total2 = cheeseburger * quantidade2;
            break;
        case 3:
            produto2 = "Cachorro-quente";
            total2 = cachorroQuente * quantidade2;
            break;
        case 4:
            produto2 = "Sanduíche natural";
            total2 = sanduicheNatural * quantidade2;
            break;
        case 5:
            produto2 = "Refrigerante";
            total2 = refrigerante * quantidade2;
            break;
        case 6:
            produto2 = "Suco Natural";
            total2 = sucoNatural * quantidade2;
            break;
        case 7:
            produto2 = "Sobremesa";
            total2 = sobremesa * quantidade2;
            break;
    }

    continuar = prompt("Deseja adicionar outro produto? S ou N:");

    if(continuar == "S" || continuar == "s") {

        codigo3 = Number(prompt("Digite o código do terceiro produto:"));
        quantidade3 = Number(prompt("Digite a quantidade:"));

        switch(codigo3) {
            case 1:
                produto3 = "Hambúrguer";
                total3 = hamburguer * quantidade3;
                break;
            case 2:
                produto3 = "Cheeseburger";
                total3 = cheeseburger * quantidade3;
                break;
            case 3:
                produto3 = "Cachorro-quente";
                total3 = cachorroQuente * quantidade3;
                break;
            case 4:
                produto3 = "Sanduíche natural";
                total3 = sanduicheNatural * quantidade3;
                break;
            case 5:
                produto3 = "Refrigerante";
                total3 = refrigerante * quantidade3;
                break;
            case 6:
                produto3 = "Suco Natural";
                total3 = sucoNatural * quantidade3;
                break;
            case 7:
                produto3 = "Sobremesa";
                total3 = sobremesa * quantidade3;
                break;
        }

    } else if(continuar == "N" || continuar == "n") {
        total3 = 0;
    }

} else if(continuar == "N" || continuar == "n") {
    total2 = 0;
    total3 = 0;
}

console.log("PEDIDO");
console.log("Produto: " + produto1);
console.log("Quantidade: " + quantidade1);
console.log("Subtotal: R$" + total1);

if(total2 > 0) {
    console.log("Produto: " + produto2);
    console.log("Quantidade: " + quantidade2);
    console.log("Subtotal: R$" + total2);
}

if(total3 > 0) {
    console.log("Produto: " + produto3);
    console.log("Quantidade: " + quantidade3);
    console.log("Subtotal: R$" + total3);
}

console.log("Valor total: R$" + (total1 + total2 + total3));