export function roll(sides, dice, rolls) {
	let res = []; 	
	for(let j = 0; j < rolls; j++) {
		res[j] = Math.floor(Math.random() * sides) + 1;
	} 
	vars m = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: res
	} 
	
	return (m); 
}  
