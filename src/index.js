"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryItemRepository_1 = __importDefault(require("../test/InMemoryItemRepository"));
var Shop_1 = __importDefault(require("./Shop"));
var ConsoleController_1 = __importDefault(require("./Console/ConsoleController"));
var ConsoleView_1 = __importDefault(require("./Console/ConsoleView"));
var SellItemRequest_1 = __importDefault(require("./Boundary/SellItemRequest"));
var itemRepository = new InMemoryItemRepository_1.default();
var shop = new Shop_1.default(itemRepository);
var consoleController = new ConsoleController_1.default(shop);
var consoleViewer = new ConsoleView_1.default(shop);
console.log("\nWelcome to Lion\'s Pride Inn !");
console.log("\nHow can i be helpful ? ");
var prompt = require('prompt-sync')();
function main() {
    var choice = "\n1. List all items of the shop\
    \n2. See the inn's balance\
    \n3. Sell an item\
    \n4. Update all inn's items \
    \n5. auction an item \
    \n6. Leave the inn\n";
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
            auction();
        case '6':
            console.log('Bye, thanks for visiting the Lion\'s Pride Inn !');
            process.exit();
        default:
            console.log('Sorry, i can\'t do that, choose an other option please');
            main();
    }
}
function listItems() {
    console.log("\nHere are all the items of the inn\n");
    consoleViewer.displayInventory(shop.getInventory());
    console.log("What more can i do ?");
    main();
}
function innBalance() {
    consoleViewer.displayBalance(shop.getBalance());
    main();
}
function sellItem() {
    var name = prompt("What is the name of the item you want to buy ?");
    var quality = prompt("What is the quality of the item you want to buy ?");
    try {
        consoleController.sellItem(name, parseInt(quality));
        console.log("You sucessfully bought ", name);
    }
    catch (_a) {
        console.log("Sorry, this item is not available for sell");
    }
    main();
}
function updateAllItems() {
    consoleController.updateQuality();
    console.log("All items has been succesfully updated !\n");
    main();
}
function auction() {
    var name = prompt("What is the name of the item you want to auction ?");
    var quality = prompt("What is the quality of the item you want to auction ?");
    var cptAuction = 0;
    var itemToAuction = new SellItemRequest_1.default(name, quality);
    var price;
    var newPrice;
    try {
        var item = consoleController.itemExist(itemToAuction);
        price = item.getArticleValue() / 2;
        console.log("The item is estimated to ", item.getArticleValue());
        console.log("The starting price is " + price + " golds");
        while (cptAuction < 3) {
            newPrice = +prompt("What is your new bid ?");
            if (cptAuction == 0 && newPrice >= price) {
                price = newPrice;
                console.log("New minimum bid is : " + (price + price / 10));
                cptAuction++;
            }
            else if (cptAuction != 0 && newPrice >= price + price / 10) {
                price = newPrice;
                if (cptAuction < 2) {
                    console.log("New minimum bid is : " + (price + price / 10));
                }
                cptAuction++;
            }
            else {
                if (cptAuction == 0) {
                    console.log("Your bid must be higher than " + price);
                }
                else {
                    console.log("Your bid must be higher than " + (price + price / 10));
                }
            }
        }
        console.log("You successfully bought the item for " + price + " golds");
        price -= item.quality * 10;
        shop.setPrice(itemToAuction, price);
        shop.sellItem(itemToAuction);
    }
    catch (_a) {
        console.log("Sorry, this item is not available for sell");
    }
    main();
}
main();
