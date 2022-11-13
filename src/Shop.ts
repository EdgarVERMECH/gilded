import Item from "./Item";

export default class Shop {
    
    inventory:Item[];
    constructor(inventory:Item[]){
        this.inventory = inventory;

    }

    updateQuality():void{
        for(let i = 0; i < this.inventory.length; i++){
            this.inventory[i].updateQuality();
        }
    }
}