const product = {

    name: 'Bike',
    price: 500,
    discount: 0.15,

}

function clone(obj){

    return { ...obj }

}

const newProduct = clone(product);
newProduct.name = 'Electric Bike';

console.log(product, newProduct);