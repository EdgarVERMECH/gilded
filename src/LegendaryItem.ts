import Item from "./Item";

export default class LegendaryItem extends Item{
    

    constructor(sellIn:number,quality:number,itemName:string){
        super(sellIn,quality,itemName);
    }

    updateQuality(): void {}


}