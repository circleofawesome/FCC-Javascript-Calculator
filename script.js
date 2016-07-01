//calculator function, takes two numbers and an operation and returns the result 

function calculate(num1,num2,operation){
	if(operation==='+'){
		return num1+num2;
	}
	else if(operation==='-'){
		return num1-num2;
	}
	else if(operation==='*'){
		return num1*num2;
	}
	else{
		return num1/num2;
	}
}
//calculate(2,3,'*');

//==============================

//takes a form input and determines what the order of operations should be 