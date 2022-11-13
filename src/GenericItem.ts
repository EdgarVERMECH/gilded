import Item from "./Item";

export default class GenericItem extends Item{
    

    constructor(sellIn:number,quality:number,itemName:string){
        super(sellIn,quality,itemName);
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