export function roll(sides, dice, rolls) {
	const res = new Array(rolls); 
	for(let j = 0; j <= rolls; j++) {
		res[j] = Math.floor(Math.random() * sides) + 1;
	} 
	const m = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: res
	} 
	
	return m;
}  
