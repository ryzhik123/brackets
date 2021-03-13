module.exports = function check(str, bracketsConfig) {
	if(str.length %2 !== 0) return false;
	let stack = [];
	const openBrackets = bracketsConfig.flat().filter((el,index) => index%2===0);
	const closedBrackets = bracketsConfig.flat().filter((el,index) => index%2===1);
	str.split("").forEach(el=>{
		if (openBrackets.includes(el)) {
			if(closedBrackets[openBrackets.indexOf(el)] === el) {
				let last = stack.lastIndexOf(el);
				if(last != -1) {
					if((stack.length + 1 - last) %2 === 0) {
						stack.splice(last,1); //remove last occurence of element
					} else {
						return false;
					} 
				} else {
					stack.push(el);
				}
			} else {
				stack.push(el);	
			}
			
			
		} else if (closedBrackets.includes(el)) {
			let popped = stack[stack.length-1];
			if(closedBrackets[openBrackets.indexOf(popped)] === el) {
				stack.pop();
			} else {
			return false;
			}
				
		}
	});
	
	return stack.length === 0;

}