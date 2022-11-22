import Item from "./Item";

export default class GenericItem extends Item{
    

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