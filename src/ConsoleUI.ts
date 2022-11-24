import Item from "./Item";
import Shop from "./Shop";

export default class EventItem{
    
    shop:Shop;
    constructor(shop:Shop){
        this.shop = shop;
    }

    displayInventory():void{
        let item:Item;
        if(this.shop.repository.getInventory().length == 0){
            console.log("\nThere is no item in this shop");
            return;
        }
        for(let i = 0; i < this.shop.repository.getInventory().length;i++){
            item = this.shop.repository.getInventory()[i]
            console.log("\nItem n°"+i+" :\nName : "+item.itemName+"\nQuality : "+item.quality+"\nSell in :"+item.sellIn+" days\nValue : "+item.getArticleValue());
        }
    }

    displayBalance():void{
        console.log("This shop has "+this.shop.balance+ " golds");
    }

    updateQuality():void{
        this.shop.updateQuality();
        console.log("Quality of all item has been updated")
    }

    sellItem(name:string,quality:number):void{
        this.shop.sellItem(name,quality);
        
    }


    


}