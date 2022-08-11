const fruit = {
  apple: 100,
  orange: 200,
  strawberry: 150
}

// console.log(Object.keys(fruit).includes('apple'));
// Object.keys(fruit).forEach(key => console.log(key));

// console.log(Object.values(fruit))

// console.log(Object.entries(fruit))
Object.entries(fruit).forEach(([key, value]) => console.log(key, value))

