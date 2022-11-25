import ItemResponse from "./ItemResponse";
import Shop from "./Shop";
import ShopOutputBoundary from "./ShopOutputBoundary";

export default class ConsoleView implements ShopOutputBoundary{

    shop:Shop
    constructor(shop:Shop){
        this.shop = shop;
    }

    displayBalance(balance: number) {
        console.log("The shop balance is : ",balance);
    }

    displayInventory(inventory: ItemResponse[]) {
        for(let i = 0; i < inventory.length; i++){
            let item = inventory[i];
            console.log("\nItem n°"+i+" :\nName : "+item.name+"\nQuality : "+item.quality+"\nSell in :"+item.sellIn+" days\nValue : "+item.value);
        }
    }
}