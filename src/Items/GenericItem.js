"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Item_1 = __importDefault(require("./Item"));
var GenericItem = /** @class */ (function (_super) {
    __extends(GenericItem, _super);
    function GenericItem(sellIn, quality, itemName, basePrice, attack, defense) {
        var _this = _super.call(this, sellIn, quality, itemName, basePrice) || this;
        if (attack !== undefined || attack == 0) {
            _this.attack = attack;
        }
        else {
            _this.attack = 0;
        }
        if (defense !== undefined || defense == 0) {
            _this.defense = defense;
        }
        else {
            _this.defense = 0;
        }
        return _this;
    }
    GenericItem.prototype.updateQuality = function () {
        this.sellIn--;
        if (this.sellIn < 0) {
            this.quality -= 2;
        }
        else {
            this.quality--;
        }
        this.checkQuality();
    };
    return GenericItem;
}(Item_1["default"]));
exports["default"] = GenericItem;