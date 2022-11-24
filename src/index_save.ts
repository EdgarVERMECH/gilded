import InMemoryItemRepository from "./InMemoryItemRepository";
import Shop from "./Shop";
import ConsoleUI from "./ConsoleUI";
import * as readline from 'readline';   

let itemRepository = new InMemoryItemRepository();
let shop  = new Shop(itemRepository);
let consoleUi = new ConsoleUI(shop);

console.log("\nWelcome to Lion's Pride Inn !");
console.log("\nHow can i be helpful ? ");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputItemName = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputItemQuality = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    let choice:string = "\n1. List all items of the shop\
    \n2. See the inn's balance\
    \n3. Sell an item\
    \n4. Update all inn's items \
    \n5. Leave the inn\n"
    rl.question(choice, (answer) => {
      switch(answer.toLowerCase()) {
        case '1':
        listItems();
        rl.close();
        break;

        case '2':
        rl.close();
        break;

        case '3':
        console.log('Bye!');
        rl.close();
        process.exit();

        case '4':
        console.log('Bye!');
        rl.close();
        process.exit();

        case '5':
        console.log('Bye!');
        rl.close();
        process.exit();

        default:
        console.log('Invalid answer!');
        main();
      }
      
  
    });
  }


function listItems():void{
    console.log("\nHere are all the items of the inn\n")
    consoleUi.displayInventory();
    console.log("What more can i do ?");
    main();
}

function sellItem():void{
    let inputName:string = "\nWhat is the name of the item you want to buy ? \n"
    inputItemQuality.question(inputName, (answer) => {
      let inputQuality = "What is the quality of the item you want to buy ? \n"
      inputItemName.question(inputQuality, (quality) => {
          consoleUi.sellItem(answer,parseInt(quality));
          inputItemName.close()
      });
      inputItemQuality.close();
  
    });
    main();
}

main();

