/*
 *  Describe
 */

console.log("Script running.")



const favoriteMovies = ["The Fifth Element", "Unforgiven", "Black Widow"];

favoriteMovies.forEach( (movie) => {
    console.log(movie);
} );



let neat = [0];
let whut = [0];
console.log('Same? ', neat==whut)

neat[1] = 1;
whut[1] = 1;

neat[2] = 2;
whut[1+1] = 'two';

neat.push(3);
whut.push("three");

neat[4] = 4;
whut["4"] = 4;  // hey, wait...

neat[5] = 5;
whut['five'] = 5;  // that's not right

neat[6] = 6;
whut['whut'] = 'dafuq';

console.log('\nlength');
console.log(`neat.length: ${neat.length}`);
console.log(`whut.length: ${whut.length}`);

console.log('\nlog:');
console.log('neat: ', neat)
console.log('whut: ', whut)

console.log(`\nlog in template string:`);
console.log(`neat: ${neat}`);
console.log(`whut: ${whut}`);

console.log('\ntypeof:');
console.log('typeof(neat): ', typeof(neat));
console.log('typeof(whut): ', typeof(whut));

console.log('\ntoString:');
console.log('neat.toString(): ', neat.toString());
console.log('whut.toString(): ', whut.toString());

console.log('\nvalueOf:');
console.log('neat.valueOf(): ', neat.valueOf());
console.log('whut.valueOf(): ', whut.valueOf());

console.log('\npopped:');
let neatPop = neat.pop();
let whutPop = whut.pop();
console.log('Popped ', neatPop, ' off of neat, leaving ', neat);
console.log('Popped ', whutPop, ' off of whut, leaving ', whut);
