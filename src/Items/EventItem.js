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
var EventItem = /** @class */ (function (_super) {
    __extends(EventItem, _super);
    function EventItem(sellIn, quality, itemName, basePrice) {
        return _super.call(this, sellIn, quality, itemName, basePrice) || this;
    }
    EventItem.prototype.updateQuality = function () {
        this.sellIn--;
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
    return EventItem;
}(Item_1["default"]));
exports["default"] = EventItem;