const number = [45, 65, 23, 98, 19]

// for(let i = 0; i < Numbers.length; i++){
//     const number = numbers[1];
//     console.log(number);
// }

// for(const number of numbers){
//     // console.log(number)
// }

const products = [
    {id:1, name: 'xiami phone one night', price: 19000},
    {id:2, name: 'iphone', price: 19000},
    {id:3, name: 'mac book air', price: 119000},
    {id:4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id:5, name: 'dell inspiron laptop', price: 19000},
    {id:6, name: 'samsung phone note 7', price: 19000},
    {id:7, name: 'nokia old age phone gone', price: 19000},
    {id:8, name: 'nothing phone one', price: 19000},
    {id:8, name: 'asus Laptop', price: 129000},
];

for(const product of products){
    console.log(product);
}

function matcheadProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matcheadProducts(products, 'laptop');
console.log(result);


   