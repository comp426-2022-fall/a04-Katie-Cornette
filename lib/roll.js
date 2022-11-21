export default function roll(sides, dice, rolls) {
	let res = []; 	
	for(let j = 0; j < rolls; j++) {
		let num = 0;
		for(let i = 0; i < dice; i++){ 
			let num_1  = Math.floor(Math.random() * sides) + 1;
			num = num + num_1;
		}
		res[j] = num; 
	} 
	let  m = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: res
	} 
	
	return JSON.stringify(m); 
}  
