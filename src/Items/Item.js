"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(sellIn, quality, itemName, basePrice) {
        this.sellIn = sellIn;
        this.itemName = itemName;
        this.isConjured = false;
        this.quality = this.setQualityForItem(quality);
        this.basePrice = basePrice;
    }
    Item.prototype.setConjured = function (isConjured) {
        this.isConjured = isConjured;
    };
    Item.prototype.checkQuality = function () {
        if (this.quality < 0)
            this.quality = 0;
        if (this.quality > 50)
            this.quality = 50;
        if (this.itemName == "Sulfuras")
            this.quality = 80;
    };
    Item.prototype.setQualityForItem = function (quality) {
        if (this.itemName == "Sulfuras") {
            return 80;
        }
        else if (quality > 50) {
            return 50;
        }
        else if (quality < 0) {
            return 0;
        }
        return quality;
    };
    Item.prototype.getArticleValue = function () {
        return this.basePrice + this.quality * 10;
    };
    Item.prototype.setPrice = function (price) {
        this.basePrice = price;
    };
    return Item;
}());
exports["default"] = Item;
