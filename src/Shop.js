"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConjuredItem_1 = __importDefault(require("./Items/ConjuredItem"));
var GenericItem_1 = __importDefault(require("./Items/GenericItem"));
var ItemResponse_1 = __importDefault(require("./Boundary/ItemResponse"));
var LegendaryItem_1 = __importDefault(require("./Items/LegendaryItem"));
var RelicItem_1 = __importDefault(require("./Items/RelicItem"));
var Shop = /** @class */ (function () {
    // outputBoundary:ShopOutputBoundary;
    function Shop(repository) {
        this.balance = 0;
        this.repository = repository;
        this.balance;
        // this.outputBoundary = new ConsoleView(this);
    }
    Shop.prototype.getInventory = function () {
        var items = this.repository.getInventory();
        var responses = [];
        for (var i = 0; i < items.length; i++) {
            if (items[i] instanceof GenericItem_1.default || items[i] instanceof LegendaryItem_1.default || items[i] instanceof ConjuredItem_1.default) {
                responses.push(new ItemResponse_1.default(items[i].sellIn, items[i].quality, items[i].getArticleValue(), items[i].itemName, items[i].attack, items[i].defense));
            }
            else {
                responses.push(new ItemResponse_1.default(items[i].sellIn, items[i].quality, items[i].getArticleValue(), items[i].itemName));
            }
        }
        return responses;
    };
    Shop.prototype.getBalance = function () {
        return this.balance;
    };
    // getBalance():void{
    //     this.outputBoundary.displayBalance(this.balance);
    // }
    Shop.prototype.updateQuality = function () {
        var items = this.repository.getInventory();
        for (var i = 0; i < items.length; i++) {
            if (items[i] instanceof RelicItem_1.default) {
                this.balance += 100;
            }
            items[i].updateQuality();
        }
        this.repository.saveInventory(items);
    };
    Shop.prototype.sellItem = function (itemToSell) {
        var item;
        item = this.repository.findItem(itemToSell.name, itemToSell.quality);
        this.balance += item.getArticleValue();
        console.log("sold ; ", item.getArticleValue());
        var items = this.repository.getInventory();
        items.splice(this.repository.getInventory().indexOf(item), 1);
        this.repository.saveInventory(items);
    };
    Shop.prototype.itemExist = function (item) {
        return this.repository.findItem(item.name, item.quality);
    };
    Shop.prototype.setPrice = function (item, price) {
        this.repository.findItem(item.name, item.quality).setPrice(price);
    };
    return Shop;
}());
exports.default = Shop;
