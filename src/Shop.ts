import InFileItemRepository from "./InFileItemRepository";
import Item from "./Item";
import ItemRepository from "./ItemRepository";
import ItemResponse from "./ItemResponse";
import SellItemRequest from "./SellItemRequest";
import ShopInputBoudary from "./ShopInputBoundary";
import ShopOutputBoundary from "./ShopOutputBoundary";

export default class Shop implements ShopInputBoudary {
    
    repository:ItemRepository;
    balance: number = 0;
    outputBoundary:ShopOutputBoundary;
    constructor(repository:ItemRepository, outputBoundary:ShopOutputBoundary){
        this.repository = repository;
        this.balance;
        this.outputBoundary = outputBoundary;
    }

    getInventory(){
        let items = this.repository.getInventory()
        let responses:ItemResponse[] = [];
        for(let i = 0; i < items.length;i++){
            responses.push(new ItemResponse(items[i].sellIn,items[i].quality,items[i].getArticleValue(),items[i].itemName));
        }
        
        this.outputBoundary.displayInventory(responses);
    }

    getBalance():void{
        this.outputBoundary.displayBalance(this.balance);
    }

    updateQuality():void{
        const items = this.repository.getInventory();
        for(let i = 0; i < items.length; i++){
            items[i].updateQuality();
        }
        this.repository.saveInventory(items);
        
    }

    sellItem(itemToSell : SellItemRequest){
        let item : Item;
        item = this.repository.findItem(itemToSell.name,itemToSell.quality);
        this.balance += item.getArticleValue();

        const items = this.repository.getInventory()
        items.splice(this.repository.getInventory().indexOf(item),1);
        this.repository.saveInventory(items)
        
    }

    // updateShopValue():number{
    //     /*for(let i = 0; i < this.inventory.length;i++){
    //         this.solde += this.inventory[i].getArticleValue();
    //     }
    //     return this.solde; */

    // }
}