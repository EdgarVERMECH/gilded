import Shop from '../src/Shop';
import Item from '../src/Item';
import { assert } from 'console';
import GenericItem from '../src/GenericItem';
import LegendaryItem from '../src/LegendaryItem';
import AgingItem from '../src/AgingItem';
import EventItem from '../src/EventItem';
import ConjuredItem from '../src/ConjuredItem';


describe('Gilded Rose', () => {
    let shop:Shop;

    beforeEach(() => {
        let inventory:Item[];
        inventory = [
            new GenericItem(10,10,"genericItem"),
            new GenericItem(0,10,"genericItem"),
            new LegendaryItem(10,80,"Sulfuras"),
            new GenericItem(10,0,"genericItem"),
            new AgingItem(10,10,"Aged Brie"),
            new AgingItem(10,50,"Aged Brie"),
            new EventItem(20,10,"Backstage passes"),
            new EventItem(7,10,"Backstage passes"),
            new EventItem(2,10,"Backstage passes"),
            new EventItem(0,10,"Backstage passes"),
            new ConjuredItem(10,10,"Conjured item"),
            new ConjuredItem(0,10,"Conjured item")


        ]
        shop = new Shop(inventory);
        shop.inventory[10].setConjured(true);
        shop.inventory[11].setConjured(true);
        shop.updateQuality();
    });

    it('Should get sell in', () => {
        expect(shop.inventory[0].sellIn).toBe(9);
    });

    it('Should get quality', () => {
        expect(shop.inventory[0].quality).toBe(9);
    });

    it('Should decrease twice faster', () => {
        expect(shop.inventory[1].quality).toBe(8);
    });

    it('Should not decrease sell in and quality', () => {
        expect(shop.inventory[2].quality).toBe(80);
        expect(shop.inventory[2].sellIn).toBe(10);
    });

    it('Quality should not go below zero', () => {
        expect(shop.inventory[3].quality).toBe(0);
    });

    it('Quality should not go above Fifty', () => {
        expect(shop.inventory[5].quality).toBe(50);
    });

    it('Should upgrade the quality of Aged Brie', () => {
        expect(shop.inventory[4].quality).toBe(11);
    });

    it('Should upgrade the quality of Backstage Pass', () => {
        expect(shop.inventory[6].quality).toBe(11);
        expect(shop.inventory[7].quality).toBe(12);
        expect(shop.inventory[8].quality).toBe(13);

    });

    it('Should set to 0 the quality of Backstage Pass', () => {
        expect(shop.inventory[9].quality).toBe(0);

    });

    it('Should remove 2 quality to conjured item', () => {
        expect(shop.inventory[10].quality).toBe(8);

    });

    it('Should remove 4 quality to conjured item', () => {
        expect(shop.inventory[11].quality).toBe(6);
    });



    



});
