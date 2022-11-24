"use strict";
exports.__esModule = true;
var Shop = /** @class */ (function () {
    function Shop(repository) {
        this.balance = 0;
        this.repository = repository;
        this.balance;
    }
    Shop.prototype.updateQuality = function () {
        var items = this.repository.getInventory();
        for (var i = 0; i < items.length; i++) {
            items[i].updateQuality();
        }
        this.repository.saveInventory(items);
    };
    Shop.prototype.sellItem = function (name, quality) {
        var item;
        item = this.repository.findItem(name, quality);
        this.balance += item.getArticleValue();
        var items = this.repository.getInventory();
        items.splice(this.repository.getInventory().indexOf(item), 1);
        this.repository.saveInventory(items);
    };
    return Shop;
}());
exports["default"] = Shop;
