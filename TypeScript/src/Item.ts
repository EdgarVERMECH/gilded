export default class Item {
    sellIn:number;
    quality: number;
    itemName: string;
    isConjured:boolean;
    constructor(sellIn:number,quality:number,itemName:string){
        this.sellIn = sellIn;
        this.itemName = itemName;
        this.isConjured = false;        
        this.quality = this.setQualityForItem(quality);

    }

    setConjured(isConjured:boolean){
        this.isConjured = isConjured;
    }

    updateQuality(){
        if(this.itemName == "Aged Brie" || this.itemName == "Backstage passes"){
            this.updateQualityForAgedBrie()
        }
        else if(this.itemName != "Sulfuras" && this.sellIn > 0){
            this.updateQualityProduct();
        }
        this.sellIn--;
        this.displayItemInformation();   
    }

    displayItemInformation(){
        if(this.sellIn>= 0){
            console.log("Article : ",this.itemName);
            console.log("La nouvelle qualité est de ",this.quality);
            console.log("Il reste ",this.sellIn," jours pour vendre l'article")
        } else{
            console.log("Article : ",this.itemName);
            console.log("L'article est périmé.");
            console.log("La nouvelle qualité est de ",this.quality);
        }
    }

    updateQualityForAgedBrie(){
        if(this.sellIn > 10){
            this.quality++;
        } else if(this.sellIn > 5){
            this.quality+= 2;
        } else if(this.sellIn > 0){
            this.quality+= 3
        } else{
            this.quality = 0;
        }
        this.checkQuality();

    }

    updateQualityProduct(){
        if(this.isConjured){
            if(this.sellIn <0){
                this.quality -= 4;
            } else{
                this.quality-= 2;
            }
        } else{
            if(this.sellIn < 0){
                this.quality-= 2;
            }
            else{
                this.quality--;
            }
        }

        this.checkQuality();
    }

    checkQuality(){
        if(this.quality < 0) this.quality = 0;
        if(this.quality> 50) this.quality = 50
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


}

let sulfuras = new Item(50,80,"Sulfuras");
sulfuras.updateQuality();
let aluneth = new Item(20,40,"Aluneth");
aluneth.updateQuality();
let agedBrie = new Item(2,46,"Aged Brie");
agedBrie.updateQuality();
agedBrie.updateQuality();
agedBrie.updateQuality();