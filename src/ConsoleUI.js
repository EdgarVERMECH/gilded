"use strict";
exports.__esModule = true;
var EventItem = /** @class */ (function () {
    function EventItem(shop) {
        this.shop = shop;
    }
    EventItem.prototype.displayInventory = function () {
        var item;
        if (this.shop.repository.getInventory().length == 0) {
            console.log("\nThere is no item in this shop");
            return;
        }
        for (var i = 0; i < this.shop.repository.getInventory().length; i++) {
            item = this.shop.repository.getInventory()[i];
            console.log("\nItem n°" + i + " :\nName : " + item.itemName + "\nQuality : " + item.quality + "\nSell in :" + item.sellIn + " days\nValue : " + item.getArticleValue());
        }
    };
    EventItem.prototype.displayBalance = function () {
        console.log("This shop has " + this.shop.balance + " golds");
    };
    EventItem.prototype.updateQuality = function () {
        this.shop.updateQuality();
        console.log("Quality of all item has been updated");
    };
    EventItem.prototype.sellItem = function (name, quality) {
        this.shop.sellItem(name, quality);
    };
    return EventItem;
}());
exports["default"] = EventItem;
