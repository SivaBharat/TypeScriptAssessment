"use strict";
function Api() {
    return fetch('/product.json')
        .then(res => res.json())
        .then(res => { return res; });
}
Api()
    .then(pro => {
    console.log(pro.map(u => 'id:' + u.id + '\n' + 'ProductName:' + u.pname + '\n' + 'ProductDescription' + u.pdescription + '\n' + 'Price' + u.price + '\n' + '\n').toString());
});
