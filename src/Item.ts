export default abstract class Item {
    quality: number;
    itemName: string;
    isConjured:boolean;
    basePrice:number;
    constructor(quality:number,itemName:string,basePrice:number){
    
        this.itemName = itemName;
        this.isConjured = false;        
        this.quality = this.setQualityForItem(quality);
        this.basePrice = basePrice;
    }


    setConjured(isConjured:boolean):void{
        this.isConjured = isConjured;
    }

    checkQuality():void{
        if(this.quality < 0) this.quality = 0;
        if(this.quality> 50) this.quality = 50;
        if(this.itemName == "Sulfuras") this.quality = 80;
    }

    setQualityForItem(quality:number):number{
        if(this.itemName == "Sulfuras"){
            return 80;
        } 
        else if (quality > 50){
            return 50;
        } else if(quality < 0){
            return 0;
        }
        return quality;
    }


    getArticleValue():number{
        return this.basePrice + this.quality * 10;
    }


}


