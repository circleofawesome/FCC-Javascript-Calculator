var input="";

//takes a form input as a string and returns the result
function inputEquals(){
	var ans=eval(input);
	console.log(ans);
	if(ans===undefined){
		document.getElementById("inputField").innerHTML="0";
		input="";
	}
	else{
		document.getElementById("inputField").innerHTML=ans;
		input="";
	}
	//document.getElementById("inputField").innerHTML=ans;
}

function inputUpdate(num){
	//return input+=num;
	var update=input+=num;
	console.log(update);
	document.getElementById("inputField").innerHTML=update;
}

function allClear(){
	input="";
	console.log(input);
	document.getElementById("inputField").innerHTML="0";
}
