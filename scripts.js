// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


//Solution 1

const logArr = (arr)=>{
arr.forEach(element => {
  console.log(element);
});
}
const logTwoArr = (arr1, arr2)=>{
  arr1.forEach(element => {
    arr2.forEach(element2 =>{
      console.log(`${element}(${element2})`);
    })
  });
  }

logArr(provinces);
logArr(names);
logTwoArr(provinces,names);

//solution2

const upperCase = (arr)=>{
 return console.log(arr.map((element)=>{
  return element.toUpperCase();
 }))
}

upperCase(provinces);


//solution 3

const lengthOfNames = (arr)=>{
 return console.log(arr.map((element)=>{
  return element.length;
 }))
}

lengthOfNames(names);

//solution 4

const sortAlphabeticallyAscending = (arr)=>{
  return console.log(arr.sort());
}

sortAlphabeticallyAscending(provinces);

//solution 5

const filterCape = (arr)=>{
 return console.log(arr.filter((element)=>{
  return element.includes("Cape") === false;
 }))
}

filterCape(provinces);

//solution 6

const hasSTrue = (arr)=>{
  return console.log(arr.map((element)=>{
    let n = [element]
   return n.some((name)=>{
    
    return name.includes("S");
   })
  }))
}

hasSTrue(names);

//solution 7

const createNameProvinceMapping = (arr1, arr2)=> {
  return console.log(arr1.reduce((acc, name, index) => {
    acc[name] = arr2[index];
    return acc;
  }, {}));
}

createNameProvinceMapping(names, provinces);

//advanced solution 1

console.log(products.forEach((item)=>  console.log(item.product)));

//advanced solution 2

console.log(products.filter(item=> item.product.length < 6));

//advanced solution 3

console.log(products.filter(item=> item.price != null).reduce((acc, item) => acc +  Number(item.price), 0));

//advanced solution 4

console.log(products.reduce((acc, item) => acc + item.product , ""));

//advanced solution 5

console.log(`Highest:${Math.max(...products.map(item => item.price))} Lowest:${Math.min(...products.map(item => item.price))}`)

//advanced solution 6

//couldnt figure this one out, this is the answer chat gave but it doesnt seem to work

console.log(products.reduce((acc, item) => {
  const price = item.price.trim() !== '' ? parseFloat(item.price) : null;
  acc[item.product] = { name: item.product, cost: price };
  return acc;
}, {}));