"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var AgingItem_1 = __importDefault(require("./AgingItem"));
var ConjuredItem_1 = __importDefault(require("./ConjuredItem"));
var EventItem_1 = __importDefault(require("./EventItem"));
var GenericItem_1 = __importDefault(require("./GenericItem"));
var LegendaryItem_1 = __importDefault(require("./LegendaryItem"));
var InMemoryItemRepository = /** @class */ (function () {
    function InMemoryItemRepository() {
        this.inventory = [
            new GenericItem_1["default"](10, 10, "genericItem", 100),
            new GenericItem_1["default"](0, 10, "genericItem", 100),
            new LegendaryItem_1["default"](10, 80, "Sulfuras", 100),
            new GenericItem_1["default"](10, 0, "genericItem", 100),
            new AgingItem_1["default"](10, 10, "Aged Brie", 100),
            new AgingItem_1["default"](10, 50, "Aged Brie", 100),
            new EventItem_1["default"](20, 10, "Backstage passes", 100),
            new EventItem_1["default"](7, 10, "Backstage passes", 100),
            new EventItem_1["default"](2, 10, "Backstage passes", 100),
            new EventItem_1["default"](0, 10, "Backstage passes", 100),
            new ConjuredItem_1["default"](10, 10, "Conjured item", 100),
            new ConjuredItem_1["default"](0, 10, "Conjured item", 100)
        ];
    }
    InMemoryItemRepository.prototype.getInventory = function () {
        return this.inventory;
    };
    InMemoryItemRepository.prototype.findItem = function (itemName, quality) {
        for (var i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].itemName == itemName && this.inventory[i].quality == quality) {
                return this.inventory[i];
            }
        }
        throw new Error("Item not found");
    };
    InMemoryItemRepository.prototype.saveInventory = function (items) {
        this.inventory = items;
    };
    return InMemoryItemRepository;
}());
exports["default"] = InMemoryItemRepository;
