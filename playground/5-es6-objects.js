const name = 'Gaurav';
const userAge = 26;

const user = {
    name,
    age: userAge,
    location: 'Paiga'
}

console.log(user);

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

const {label:productlabel, stock, rating=5} = product;
console.log(productlabel,stock,rating);

const transaction = (type,{label, stock}) {
    console.log(type,label,stock);
}
transaction('order',product);