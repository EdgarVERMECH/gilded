import InMemoryItemRepository from "./InMemoryItemRepository";
import Shop from "./Shop";
import ConsoleUI from "./ConsoleUI";
import * as readline from 'readline';

let itemRepository = new InMemoryItemRepository();
let shop = new Shop(itemRepository);
let consoleUi = new ConsoleUI(shop);

console.log("\nWelcome to Lion\'s Pride Inn !");
console.log("\nHow can i be helpful ? ");



const prompt = require('prompt-sync')()


function main() {
    let choice: string = "\n1. List all items of the shop\
    \n2. See the inn's balance\
    \n3. Sell an item\
    \n4. Update all inn's items \
    \n5. Leave the inn\n"
    console.log(choice);
    let answer = prompt()

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


function listItems(): void {
    console.log("\nHere are all the items of the inn\n")
    consoleUi.displayInventory();
    console.log("What more can i do ?");
    main();
}


function innBalance(): void {
    consoleUi.displayBalance();
    main();
}

function sellItem(): void {
    let name = prompt("What is the name of the item you want to buy ?")
    let quality = prompt("What is the quality of the item you want to buy ?")
    try{
        consoleUi.sellItem(name,parseInt(quality));
        console.log("You sucessfully bought ",name)
    } catch{
        console.log("Sorry, this item is not available for sell")
    }
    
    main();
}

function updateAllItems():void{
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

