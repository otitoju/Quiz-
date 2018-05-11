function check(){
	var name =document.quiz.name.value;
	var question2=document.quiz.question2.value;
	var question3=document.quiz.question3.value;
	var question4=document.quiz.question4.value;
	var correct=0;
	
	if(question2=="john"){
		correct++;
	}
	if(question3=="Abuja"){
		correct++;
	}
	if(question4=="ritualist"){
		correct++;
	}

	var messages = ['Very good','You can do better next time','You try']
	var range;
	if(correct <1){
		range=1;
	}
	if(correct >0 && correct <3){
		range=2
	}
	if(correct >2 ){
		range=0
	}
	var x = document.forms['quiz']['name'].value;
	if(x == null || x==""){
		alert(' Please name must be filled before you can submit');
		return false;
	}
	var y = Date();
	document.getElementById('demo').innerHTML = "On " + y;
	

	document.getElementById('after_submit').style.visibility="visible";
	document.getElementById('number_correct').innerHTML=name +" you got " + correct + " correct answer";
	document.getElementById('message').innerHTML=messages[range];

}
	
