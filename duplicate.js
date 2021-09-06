const names = ['sabul', 'cabul', 'kabul', 'abul', 'tabul', 'abul', 'jamil', 'reja', 'shipon', 'rahman', 'kabul'];

function removeDuplicate(names){
    const unique = [];
    /* for(let i = 0; i < names.length; i++){
        const element = names[i];
        console.log(element);
    } */
    for(const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);