"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemResponse = /** @class */ (function () {
    function ItemResponse(sellIn, quality, value, name, attack, defense) {
        this.sellIn = sellIn;
        this.quality = quality;
        this.value = value;
        this.name = name;
        if (attack !== undefined || attack == 0) {
            this.attack = attack;
        }
        else {
            this.attack = 0;
        }
        if (defense !== undefined || defense == 0) {
            this.defense = defense;
        }
        else {
            this.defense = 0;
        }
    }
    ItemResponse.prototype.getAttack = function () {
        return this.attack != 0;
    };
    ItemResponse.prototype.getDefense = function () {
        return this.defense != 0;
    };
    return ItemResponse;
}());
exports.default = ItemResponse;
