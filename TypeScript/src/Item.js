"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(sellIn, quality, itemName) {
        this.sellIn = sellIn;
        this.itemName = itemName;
        this.isConjured = false;
        this.quality = this.setQualityForItem(quality);
    }
    Item.prototype.setConjured = function (isConjured) {
        this.isConjured = isConjured;
    };
    Item.prototype.updateQuality = function () {
        if (this.itemName == "Aged Brie" || this.itemName == "Backstage passes") {
            this.updateQualityForAgedBrie();
        }
        else if (this.itemName != "Sulfuras" && this.sellIn > 0) {
            this.updateQualityProduct();
        }
        this.sellIn--;
        this.displayItemInformation();
    };
    Item.prototype.displayItemInformation = function () {
        if (this.sellIn >= 0) {
            console.log("Article : ", this.itemName);
            console.log("La nouvelle qualité est de ", this.quality);
            console.log("Il reste ", this.sellIn, " jours pour vendre l'article");
        }
        else {
            console.log("Article : ", this.itemName);
            console.log("L'article est périmé.");
            console.log("La nouvelle qualité est de ", this.quality);
        }
    };
    Item.prototype.updateQualityForAgedBrie = function () {
        if (this.sellIn > 10) {
            this.quality++;
        }
        else if (this.sellIn > 5) {
            this.quality += 2;
        }
        else if (this.sellIn > 0) {
            this.quality += 3;
        }
        else {
            this.quality = 0;
        }
        this.checkQuality();
    };
    Item.prototype.updateQualityProduct = function () {
        if (this.isConjured) {
            if (this.sellIn < 0) {
                this.quality -= 4;
            }
            else {
                this.quality -= 2;
            }
        }
        else {
            if (this.sellIn < 0) {
                this.quality -= 2;
            }
            else {
                this.quality--;
            }
        }
        this.checkQuality();
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
    return Item;
}());
exports["default"] = Item;
var sulfuras = new Item(50, 80, "Sulfuras");
sulfuras.updateQuality();
var aluneth = new Item(20, 40, "Aluneth");
aluneth.updateQuality();
var agedBrie = new Item(2, 46, "Aged Brie");
agedBrie.updateQuality();
agedBrie.updateQuality();
agedBrie.updateQuality();
