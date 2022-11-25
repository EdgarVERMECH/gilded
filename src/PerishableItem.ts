import Item from "./Item";
import SellItemRequest from "./SellItemRequest";


export default abstract class PerishableItem extends Item {

    sellIn:number;

    constructor(sellIn:number,quality:number,itemName: string, basePrice: number){

        super(quality,itemName,basePrice);

        this.sellIn = sellIn ; 

    }

    abstract updateQuality(): void
}
