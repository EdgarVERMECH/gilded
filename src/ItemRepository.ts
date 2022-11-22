import Item from "./Item";

export default interface ItemRepository {
    
    getInventory():Item[];

    findItem(type:string,quality:number):Item

    saveInventory(items:Item[]):void;

}


