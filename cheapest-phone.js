const phones = [
    {name : 'Samusung s5',
     price : 45000, 
     camera : 10, 
     storage : 32},
    {name : 'walton',
     price : 15000, 
     camera : 8, 
     storage : 8},
    {name : 'Xiaomi Redmi5',
     price : 5000, 
     camera : 5, 
     storage : 8},
    {name : 'Samusung Note5',
     price : 35000, 
     camera : 16, 
     storage : 64},
    {name : 'Lenovo V3',
     price : 3000, 
     camera : 20, 
     storage : 12}
]

let cheapest = phones[0];
for (const phone of phones) {
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);
