import AgingItem from "../src/AgingItem";
import ConjuredItem from "../src/ConjuredItem";
import EventItem from "../src/EventItem";
import GenericItem from "../src/GenericItem";
import Item from "../src/Item";
import ItemRepository from "../src/ItemRepository";
import LegendaryItem from "../src/LegendaryItem";
 


export default class InMemoryItemRepository implements ItemRepository{
    
    inventory:Item[] =  [
        new GenericItem(10,10,"genericItem",100),
        new GenericItem(0,10,"genericItem",100),
        new LegendaryItem(80,"Sulfuras",100),
        new GenericItem(10,0,"genericItem",100),
        new AgingItem(10,10,"Aged Brie",100),
        new AgingItem(10,50,"Aged Brie",100),
        new EventItem(20,10,"Backstage passes",100),
        new EventItem(7,10,"Backstage passes",100),
        new EventItem(2,10,"Backstage passes",100),
        new EventItem(0,10,"Backstage passes",100),
        new ConjuredItem(10,10,"Conjured item",100),
        new ConjuredItem(0,10,"Conjured item",100)
    ]
    

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