export default function LibraryBasketCollection() {

    const basket = Array();

    basket.addBasketItem = function (basketItem) {
        this.push(basketItem);
    }
    basket.removeBasketItem = function (basketItem) {
        basket.splice(basket.indexOf(basketItem), 1);
        console.log(basketItem)
    }

    basket.checkoutBasket = function () {

        this.forEach(function (basketItem) {
            basketItem.checkOut();
        });

        do {
            basket.pop();
        } while (basket.length > 0);


        return basket;
    }


    return basket;
}