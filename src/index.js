"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var InMemoryItemRepository_1 = __importDefault(require("./InMemoryItemRepository"));
var Shop_1 = __importDefault(require("./Shop"));
var ConsoleUI_1 = __importDefault(require("./ConsoleUI"));
var itemRepository = new InMemoryItemRepository_1["default"]();
var shop = new Shop_1["default"](itemRepository);
var consoleUi = new ConsoleUI_1["default"](shop);
console.log("\nWelcome to Lion\'s Pride Inn !");
console.log("\nHow can i be helpful ? ");
var prompt = require('prompt-sync')();
function main() {
    var choice = "\n1. List all items of the shop\
    \n2. See the inn's balance\
    \n3. Sell an item\
    \n4. Update all inn's items \
    \n5. Leave the inn\n";
    console.log(choice);
    var answer = prompt();
    switch (answer) {
        case '1':
            listItems();
            break;
        case '2':
            innBalance();
            break;
        case '3':
            sellItem();
        case '4':
            updateAllItems();
        case '5':
            console.log('Bye, thanks for visiting the Lion\'s Pride Inn !');
            process.exit();
        default:
            console.log('Sorry, i can\'t do that, choose an other option please');
            main();
    }
}
function listItems() {
    console.log("\nHere are all the items of the inn\n");
    consoleUi.displayInventory();
    console.log("What more can i do ?");
    main();
}
function innBalance() {
    consoleUi.displayBalance();
    main();
}
function sellItem() {
    var name = prompt("What is the name of the item you want to buy ?");
    var quality = prompt("What is the quality of the item you want to buy ?");
    try {
        consoleUi.sellItem(name, parseInt(quality));
        console.log("You sucessfully bought ", name);
    }
    catch (_a) {
        console.log("Sorry, this item is not available for sell");
    }
    main();
}
function updateAllItems() {
    consoleUi.updateQuality();
    console.log("All items has been succesfully updated !\n");
    main();
}
// async function ask() {
//     return new Promise(resolve => {
//       rl.question('Is this example useful? [y/n/q] ', (answer) => {
//         switch(answer.toLowerCase()) {
//           case 'y':
//           console.log('Super!');
//           break;
//           case 'n':
//           console.log('Sorry! :(');
//           break;
//           case 'q':
//           console.log('Bye!');
//           rl.close();
//           process.exit();
//           default:
//           console.log('Invalid answer!');
//         }
//         ask();
//       });
//     });
//   }
//   async function start() {
//     for (let i = 0; i < 5; i++) {
//       await ask();
//     }
//     rl.close();
//   }
main();
