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
var itemRepositoryJson_json_1 = __importDefault(require("./itemRepositoryJson.json"));
var InFileItemRepository = /** @class */ (function () {
    function InFileItemRepository() {
        this.inventory = [];
        for (var i = 0; i < itemRepositoryJson_json_1["default"].length; i++) {
            switch (itemRepositoryJson_json_1["default"][i].type) {
                case "AgingItem":
                    this.inventory.push(new AgingItem_1["default"](itemRepositoryJson_json_1["default"][i].sellIn, itemRepositoryJson_json_1["default"][i].quality, itemRepositoryJson_json_1["default"][i].name, itemRepositoryJson_json_1["default"][i].value));
                case "ConjuredItem":
                    this.inventory.push(new ConjuredItem_1["default"](itemRepositoryJson_json_1["default"][i].sellIn, itemRepositoryJson_json_1["default"][i].quality, itemRepositoryJson_json_1["default"][i].name, itemRepositoryJson_json_1["default"][i].value));
                case "EvenItem":
                    this.inventory.push(new EventItem_1["default"](itemRepositoryJson_json_1["default"][i].sellIn, itemRepositoryJson_json_1["default"][i].quality, itemRepositoryJson_json_1["default"][i].name, itemRepositoryJson_json_1["default"][i].value));
                case "GenericItem":
                    this.inventory.push(new GenericItem_1["default"](itemRepositoryJson_json_1["default"][i].sellIn, itemRepositoryJson_json_1["default"][i].quality, itemRepositoryJson_json_1["default"][i].name, itemRepositoryJson_json_1["default"][i].value));
                case "LegendaryItem":
                    this.inventory.push(new LegendaryItem_1["default"](itemRepositoryJson_json_1["default"][i].sellIn, itemRepositoryJson_json_1["default"][i].quality, itemRepositoryJson_json_1["default"][i].name, itemRepositoryJson_json_1["default"][i].value));
            }
        }
    }
    InFileItemRepository.prototype.getInventory = function () {
        return this.inventory;
    };
    InFileItemRepository.prototype.findItem = function (itemName, quality) {
        for (var i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].itemName == itemName && this.inventory[i].quality == quality) {
                return this.inventory[i];
            }
        }
        throw new Error("Item not found");
    };
    InFileItemRepository.prototype.saveInventory = function (items) {
        this.inventory = items;
    };
    return InFileItemRepository;
}());
exports["default"] = InFileItemRepository;
