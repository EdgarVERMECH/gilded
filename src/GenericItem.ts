import Item from "./Item";
import PerishableItem from "./PerishableItem";

export default class GenericItem extends PerishableItem{
    

    constructor(sellIn:number,quality:number,itemName:string,basePrice:number){
        super(sellIn,quality,itemName,basePrice);
    }

    updateQuality(): void {
        this.sellIn--;
        if(this.sellIn < 0){
            this.quality-= 2;
        }
        else{
            this.quality--;
        }

        this.checkQuality();
    }


}