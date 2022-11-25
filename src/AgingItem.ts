import Item from "./Item";
import PerishableItem from "./PerishableItem";

export default class AgingItem extends PerishableItem{
    

    constructor(sellIn:number,quality:number,itemName:string,basePrice:number){
        super(sellIn,quality,itemName,basePrice);
    }

    updateQuality(): void {
        this.sellIn--;
        this.quality++;
        this.checkQuality();
    }
}