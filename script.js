var input="";

function inputEquals(){
	if(input[0].match(/[0-9]/)===null){
		input="";
		return document.getElementById("inputField").innerHTML="0";
	}
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
}

function inputUpdate(num){
	var update=input+=num;
	console.log(update);
	document.getElementById("inputField").innerHTML=update;
}

function allClear(){
	input="";
	console.log(input);
	document.getElementById("inputField").innerHTML="0";
}
