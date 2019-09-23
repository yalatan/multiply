module.exports = function multiply(first, second) {
   let result = []; let stack = [];
  let a = first.split("").reverse();
   let b = second.split("").reverse();
   
   for(let i=0; i < b.length; i++){
	  for(let r=0; r < a.length; r++){
if(stack[i+r] ){stack[i+r] = a[r] * b[i] + stack[i+r];} 
else {stack[i+r] = a[r] * b[i] ;}   
	  } 
   };
   let plus = 0;
   for(let i=0; i < stack.length; i++){
	   if(stack[i] > 9) {
	  stack[i] =   stack[i] + "";
	   plus = +stack[i].slice(0, -1);
		  stack[i] = stack[i].slice(-1);
		  if(stack[i+1]){stack[i+1] = stack[i+1] +  plus;}
		  else{stack[i+1] = 0 +  plus;}
		  
	   }
   };
   
  return stack.reverse().join("");
}
