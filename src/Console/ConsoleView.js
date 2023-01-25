"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleView = /** @class */ (function () {
    function ConsoleView(shop) {
        this.shop = shop;
    }
    ConsoleView.prototype.displayBalance = function (balance) {
        console.log("The shop balance is : ", balance);
    };
    ConsoleView.prototype.displayInventory = function (inventory) {
        for (var i = 0; i < inventory.length; i++) {
            var item = inventory[i];
            if (item.getAttack() && item.getDefense()) {
                console.log("\nItem n°" + i + " :\nName : " + item.name + "\nQuality : " + item.quality + "\nSell in :" + item.sellIn + " days\nValue : " + item.value + "\nAttack :", item.attack + "\nDefense :", item.defense);
            }
            else if (item.getAttack()) {
                console.log("\nItem n°" + i + " :\nName : " + item.name + "\nQuality : " + item.quality + "\nSell in :" + item.sellIn + " days\nValue : " + item.value + "\nAttack :", item.attack);
            }
            else if (item.getDefense()) {
                console.log("\nItem n°" + i + " :\nName : " + item.name + "\nQuality : " + item.quality + "\nSell in :" + item.sellIn + " days\nValue : " + item.value + "\nDefense :", item.defense);
            }
            else {
                console.log("\nItem n°" + i + " :\nName : " + item.name + "\nQuality : " + item.quality + "\nSell in :" + item.sellIn + " days\nValue : " + item.value);
            }
        }
    };
    return ConsoleView;
}());
exports.default = ConsoleView;
