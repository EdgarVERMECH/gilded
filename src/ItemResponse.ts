export default class ItemResponse{
    
    quality:number;
    value:number
    name:string;
    constructor(quality:number,value:number,name:string){
        
        this.quality = quality;
        this.value = value;
        this.name = name;
        
    }
}