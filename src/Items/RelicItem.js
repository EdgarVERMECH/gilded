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
var RelicItem = /** @class */ (function (_super) {
    __extends(RelicItem, _super);
    function RelicItem(sellIn, quality, itemName, basePrice) {
        return _super.call(this, sellIn, quality, itemName, basePrice) || this;
    }
    RelicItem.prototype.updateQuality = function () {
    };
    return RelicItem;
}(Item_1["default"]));
exports["default"] = RelicItem;