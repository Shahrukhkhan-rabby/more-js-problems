const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names) {
    return [...new Set(names)];
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
