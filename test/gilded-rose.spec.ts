import Shop from '../src/Shop';
import Item from '../src/Item';
import { assert } from 'console';
import GenericItem from '../src/GenericItem';
import LegendaryItem from '../src/LegendaryItem';
import AgingItem from '../src/AgingItem';
import EventItem from '../src/EventItem';
import ConjuredItem from '../src/ConjuredItem';
import ItemRepository from '../src/ItemRepository';
import InMemoryItemRepository from './InMemoryItemRepository';
import SellItemRequest from '../src/SellItemRequest';
import TestShopOutputBoundary from './TestShopOutputBoundary';
import PerishableItem from '../src/PerishableItem';


describe('Gilded Rose', () => {
    let shop:Shop;
    let repository : ItemRepository;
    let outputBoundary : TestShopOutputBoundary;
    beforeEach(() => {
        repository = new InMemoryItemRepository();
        outputBoundary = new TestShopOutputBoundary();
        shop = new Shop(repository, outputBoundary);
        repository.getInventory()[10].setConjured(true);
        repository.getInventory()[11].setConjured(true);
        shop.updateQuality();
    });

    it('Should get sell in', () => {
        expect((repository.getInventory()[0] as PerishableItem).sellIn).toBe(9);
    });

    it('Should get quality', () => {
        expect(repository.getInventory()[0].quality).toBe(9);
    });

    it('Should decrease twice faster', () => {
        expect((repository.getInventory()[1] as PerishableItem).quality).toBe(8);
    });

    it('Quality should not go below zero', () => {
        expect(repository.getInventory()[3].quality).toBe(0);
    });

    it('Quality should not go above Fifty', () => {
        expect(repository.getInventory()[5].quality).toBe(50);
    });

    it('Should upgrade the quality of Aged Brie', () => {
        expect(repository.getInventory()[4].quality).toBe(11);
    });

    it('Should not update Lengendary Item', () => {
        expect(repository.getInventory()[2].quality).toBe(80);
    });

    it('Should upgrade the quality of Backstage Pass', () => {
        expect(repository.getInventory()[6].quality).toBe(11);
        expect(repository.getInventory()[7].quality).toBe(12);
        expect(repository.getInventory()[8].quality).toBe(13);

    });

    it('Should set to 0 the quality of Backstage Pass', () => {
        expect(repository.getInventory()[9].quality).toBe(0);

    });

    it('Should remove 2 quality to conjured item', () => {
        expect(repository.getInventory()[10].quality).toBe(8);

    });

    it('Should remove 4 quality to conjured item', () => {
        expect(repository.getInventory()[11].quality).toBe(6);
    });

    it('Should get the price of the item', () => {
        expect(repository.getInventory()[10].getArticleValue()).toBe(180);
    });



    it('Should sell item', () => {
        shop.sellItem(new SellItemRequest("Sulfuras",80));
        expect(repository.getInventory().length).toBe(11);
        expect(shop.balance).toBe(900);
    });


    it('Should not sell item that does not exist', () => {
        expect(function(){shop.sellItem(new SellItemRequest("adzad",80))} ).toThrow(new Error("Item not found"));
    });
    

    it('Should display inventory', () => {
        shop.getInventory();
        expect(outputBoundary.hasReceivedItems).toBe(true);
    });

    it('Should display balance', () => {
        shop.getBalance();
        expect(outputBoundary.hasReceivedBalance).toBe(true);
    });

});
