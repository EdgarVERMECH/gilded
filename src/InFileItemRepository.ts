import AgingItem from "./AgingItem";
import ConjuredItem from "./ConjuredItem";
import EventItem from "./EventItem";
import GenericItem from "./GenericItem";
import Item from "./Item";
import ItemRepository from "./ItemRepository";
import LegendaryItem from "./LegendaryItem";
import inventoryFile from "./itemRepository.json";
export default class InFileItemRepository implements ItemRepository{
    
    inventory:Item[] =  []
    constructor(){
        for(let i = 0; i < inventoryFile.length;i++){
            switch(inventoryFile[i].type){
                case "AgingItem":
                    this.inventory.push(new AgingItem(inventoryFile[i].sellIn,inventoryFile[i].quality,inventoryFile[i].name,inventoryFile[i].value));
                
                case "ConjuredItem":
                    this.inventory.push(new ConjuredItem(inventoryFile[i].sellIn,inventoryFile[i].quality,inventoryFile[i].name,inventoryFile[i].value));

                case "EvenItem":
                    this.inventory.push(new EventItem(inventoryFile[i].sellIn,inventoryFile[i].quality,inventoryFile[i].name,inventoryFile[i].value));

                case "GenericItem":
                    this.inventory.push(new GenericItem(inventoryFile[i].sellIn,inventoryFile[i].quality,inventoryFile[i].name,inventoryFile[i].value));

                case "LegendaryItem":
                    this.inventory.push(new LegendaryItem(inventoryFile[i].sellIn,inventoryFile[i].quality,inventoryFile[i].name,inventoryFile[i].value));
            }
        }
    }

    getInventory():Item[]{
        return this.inventory;
    }

    findItem(itemName:string,quality:number):Item{
        for(let i = 0; i < this.inventory.length; i++){
            if(this.inventory[i].itemName == itemName && this.inventory[i].quality == quality){
                return this.inventory[i]
            }
        }
        throw  new Error("Item not found");
        
    }

    saveInventory(items:Item[]):void{
        this.inventory = items;
    }

    


}