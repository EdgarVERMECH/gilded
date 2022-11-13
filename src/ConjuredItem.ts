import Item from "./Item";

export default class ConjuredItem extends Item{
    

    constructor(sellIn:number,quality:number,itemName:string){
        super(sellIn,quality,itemName);
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