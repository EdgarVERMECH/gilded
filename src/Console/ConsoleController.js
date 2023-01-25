"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SellItemRequest_1 = __importDefault(require("../Boundary/SellItemRequest"));
var ConsoleController = /** @class */ (function () {
    function ConsoleController(shop) {
        this.shop = shop;
    }
    ConsoleController.prototype.updateQuality = function () {
        this.shop.updateQuality();
        console.log("Quality of all item has been updated");
    };
    ConsoleController.prototype.sellItem = function (name, quality) {
        var itemRequest = new SellItemRequest_1.default(name, quality);
        this.shop.sellItem(itemRequest);
    };
    ConsoleController.prototype.itemExist = function (item) {
        return this.shop.itemExist(item);
    };
    return ConsoleController;
}());
exports.default = ConsoleController;
