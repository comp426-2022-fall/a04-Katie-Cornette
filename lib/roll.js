export default function roll(sides, dice, rolls) {
	let res = []; 	
	for(let j = 0; j < rolls; j++) { 
		let num  = Math.floor(Math.random() * sides*dice) + 1;
		res[j] = num; 
	} 
	let  m = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: res
	} 
	
	return m; 
}  
