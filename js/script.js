const cart = document.querySelector('#cart'),
    cartWrapper = document.querySelector('.cart__wrapper'),
    products = document.querySelectorAll('.goods__item'),
    open = document.querySelector('.cart'),
    close = document.querySelector('.cart__close'),
    goodsBtn = document.querySelectorAll('.goods__btn');

function openCart() {
    open.style.display = 'block';
    document.body.style.overflow = "hidden";
}

function closeCart() {
    open.style.display = 'none';
    document.body.style.overflow = '';
}

cart.addEventListener('click', openCart);
close.addEventListener('click', closeCart);

goodsBtn.forEach(function(btn, i) {
    btn.addEventListener('click', () => {
        let item = products[i].cloneNode(true),
            trigger = item.querySelector('button'),
            removeBtn = document.createElement('div'),
            empty = cartWrapper.querySelector('.empty');

        trigger.remove();

        removeBtn.classList.add('goods__item-remove');
        removeBtn.innerHTML = '&times';
        item.appendChild(removeBtn);

        cartWrapper.appendChild(item);
        if (empty) {
            empty.remove();
        }
    })
})