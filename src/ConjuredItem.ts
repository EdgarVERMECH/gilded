import Item from "./Item";
import PerishableItem from "./PerishableItem";

export default class ConjuredItem extends PerishableItem{
    

    constructor(sellIn:number,quality:number,itemName:string,basePrice:number){
        super(sellIn,quality,itemName,basePrice);
        this.isConjured = true;
    }

    updateQuality(): void {
        this.sellIn--;
        if(this.sellIn < 0){
            this.quality -= 4;
        }
        else{
            this.quality -= 2;
        }

        this.checkQuality();
    }


}