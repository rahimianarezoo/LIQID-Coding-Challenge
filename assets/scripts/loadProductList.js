function loadProductList(productList, wrapperId) {
    const listContainer = document.getElementById(wrapperId);

    if (listContainer) {
        listContainer.innerHTML = '';

        productList.forEach(product => {
            let li = document.createElement('li');
            li.classList.add('product-list__item');

            let h4 = document.createElement('h4');
            h4.classList.add('product-list__item__title');
            
            let div = document.createElement('div');
            div.classList.add('product-list__item__badget');
            if (product.flag === 'deficit') {
                div.classList.add('product-list__item__badget--red')
            }
            
            let span = document.createElement('span');
            span.classList.add('product-list__item__badget__percent');
            
            let a = document.createElement('a');
            a.classList.add('product-list__item__link');

            h4.innerHTML = product.productTitle;
            span.innerHTML = product.percent;
            div.innerHTML = product.amount;
            div.appendChild(span);
            a.innerHTML = 'Explore';
            // The source of the link will be filled here in the real project.
            a.href = '#';

            li.appendChild(h4);
            li.appendChild(div);
            li.appendChild(a);
            listContainer.appendChild(li);   
        });
    } else {
        throw `${wrapperId} is not defined`;
    }
}