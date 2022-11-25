import ItemResponse from "../src/ItemResponse";
import ShopOutputBoundary from "../src/ShopOutputBoundary";

export default class VirtualShopOutputBoundary implements ShopOutputBoundary{
    public hasReceivedItems: boolean = false;
    public hasReceivedBalance : boolean = false;

    public displayInventory(inventory: ItemResponse[]) {
        this.hasReceivedItems = inventory != null;
    }

    public displayBalance(balance: number) {
        this.hasReceivedBalance = balance != null && balance != NaN;
    }
    
}