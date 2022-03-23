export default function LibraryBasketCollection() {

    const basket = Array();

    basket.addBasketItem = function (basketItem) {
        this.push(basketItem);
        console.log(basketItem)

    }
    basket.removeBasketItem = function (basketItem) {
        basket.splice(basket.indexOf(basketItem), 1);
        console.log(basketItem)
    }

    basket.checkoutBasket = function () {

        this.forEach(function (basketItem) {
            basketItem.checkOut();
        });

        //
        // basket = [];
        do {
            basket.pop();
        } while (basket.length > 0);


        return basket;
    }

    console.log(basket);
    return basket;
}