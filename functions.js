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

//takes a form input as a string and returns the result

//"3+5*6"

function calculateString(str){
	return eval(str);
}