import InFileItemRepository from "./InFileItemRepository";
import Item from "./Item";
import ItemRepository from "./ItemRepository";

export default class Shop {
    
    repository:ItemRepository;
    balance: number = 0;

    constructor(repository:ItemRepository){
        this.repository = repository;
        this.balance;
    }

    updateQuality():void{
        const items = this.repository.getInventory();
        for(let i = 0; i < items.length; i++){
            items[i].updateQuality();
        }
        this.repository.saveInventory(items);
        
    }

    sellItem(name:string,quality:number){
        let item:Item;
        item = this.repository.findItem(name,quality);
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