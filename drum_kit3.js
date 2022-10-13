// for(var i=0;i<document.querySelectorAll("button").length;i++)
// {
// 	document.querySelectorAll("button")[i].addEventListener("click",function(){alert("I GOT CLICKED")});
// }


//FOR ADDING MORE SPECIFICITY WE CAN SELECT THE QUERY USING IT'S CLASS NAME
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
 	document.getElementsByClassName("drum")[i].addEventListener("click",function(){
	var element=this.innerHTML;
	make_sound(element);
	});
}
	document.addEventListener("keypress",function(event){make_sound(event.key)});
	
	function make_sound(ele)
	{ document.querySelector("."+ele).classList.add("pressed");
	switch(ele)
	{
	    case "w":
			var crash=new Audio("sounds/crash.mp3");
			crash.play();
			break;
		case "a":
			var kick=new Audio("sounds/kick.png");	
		case "s":
			var snare=new Audio("sounds/snare.mp3");
		  snare.play();
			break;
	    case "d":
			var tom1=new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "j":
			var tom2=new Audio("sounds/tom-2.mp3");
			tom2.play();
		    break;
		case "k":
		    var tom3=new Audio("sounds/tom-3.mp3");
		    tom3.play();
			break;
						
        case "l":
			var tom4=new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;

		default:
			console.log("PRESS SOME VALID KEY");
	}
	setTimeout(function()
{
	document.querySelector("."+ele).classList.remove("pressed");
},200);
};



