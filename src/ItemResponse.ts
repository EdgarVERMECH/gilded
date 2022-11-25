export default class ItemResponse{
    sellIn:number;
    quality:number;
    value:number
    name:string;
    constructor(sellIn:number,quality:number,value:number,name:string){
        this.sellIn = sellIn;
        this.quality = quality;
        this.value = value;
        this.name = name;
        
    }
}