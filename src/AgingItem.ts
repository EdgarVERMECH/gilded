import Item from "./Item";

export default class AgingItem extends Item{
    

    constructor(sellIn:number,quality:number,itemName:string){
        super(sellIn,quality,itemName);
    }

    updateQuality(): void {
        this.sellIn--;
        this.quality++;
        this.checkQuality();
    }
}