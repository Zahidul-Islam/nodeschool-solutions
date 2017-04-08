const pets =  ['cat', 'dog', 'rat'];
// for (let i = 0; i < pets.length; i++) {
//     pets[i] = pets[i] + 's';
// }
const newPets = pets.map(x => x + 's');
console.log(newPets);